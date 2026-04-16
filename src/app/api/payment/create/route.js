import { NextResponse } from "next/server";
import { paymentClient } from "@/lib/mercadopago";
import { TICKETS } from "@/lib/constants";

export async function POST(request) {
  try {
    const body = await request.json();
    const { ticketType, quantity, paymentMethod, payer, cardToken, installments } = body;

    // Validate ticket type and enforce server-side pricing
    const ticket = TICKETS.find((t) => t.id === ticketType);
    if (!ticket) {
      return NextResponse.json({ error: "Tipo de ingresso invalido" }, { status: 400 });
    }

    if (!quantity || quantity < 1 || quantity > 10) {
      return NextResponse.json({ error: "Quantidade invalida" }, { status: 400 });
    }

    if (!payer?.name || !payer?.email || !payer?.cpf) {
      return NextResponse.json({ error: "Dados do pagador incompletos" }, { status: 400 });
    }

    if (!["pix", "credit_card", "boleto"].includes(paymentMethod)) {
      return NextResponse.json({ error: "Metodo de pagamento invalido" }, { status: 400 });
    }

    const totalAmount = ticket.price * quantity;
    const nameParts = payer.name.trim().split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ") || firstName;

    const basePayment = {
      transaction_amount: totalAmount,
      description: `Ingresso ${ticket.name} - Bereguede & Afins (x${quantity})`,
      payer: {
        email: payer.email,
        first_name: firstName,
        last_name: lastName,
        identification: {
          type: "CPF",
          number: payer.cpf.replace(/\D/g, ""),
        },
      },
    };

    let paymentBody;

    switch (paymentMethod) {
      case "pix":
        paymentBody = {
          ...basePayment,
          payment_method_id: "pix",
        };
        break;

      case "credit_card":
        if (!cardToken) {
          return NextResponse.json({ error: "Token do cartao obrigatorio" }, { status: 400 });
        }
        paymentBody = {
          ...basePayment,
          token: cardToken,
          installments: installments || 1,
        };
        break;

      case "boleto":
        paymentBody = {
          ...basePayment,
          payment_method_id: "bolbradesco",
        };
        break;
    }

    const payment = await paymentClient.create({ body: paymentBody });

    // Build response based on payment method
    const response = {
      id: payment.id,
      status: payment.status,
      statusDetail: payment.status_detail,
      paymentMethod,
      ticketName: ticket.name,
      quantity,
      totalAmount,
    };

    if (paymentMethod === "pix" && payment.point_of_interaction) {
      const txData = payment.point_of_interaction.transaction_data;
      response.pixQrCode = txData.qr_code;
      response.pixQrCodeBase64 = txData.qr_code_base64;
    }

    if (paymentMethod === "boleto" && payment.point_of_interaction) {
      const txData = payment.point_of_interaction.transaction_data;
      response.boletoUrl = txData.ticket_url;
      response.boletoBarcode = txData.barcode?.content;
    }

    return NextResponse.json(response);
  } catch (error) {
    console.error("Payment error:", error);

    const message =
      error?.cause?.length > 0
        ? error.cause[0].description
        : "Erro ao processar pagamento. Tente novamente.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
