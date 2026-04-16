import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    console.log("Webhook received:", JSON.stringify(body, null, 2));

    // In production, validate the webhook signature using MERCADO_PAGO_WEBHOOK_SECRET
    // and fetch the full payment details to update your database

    if (body.type === "payment") {
      const paymentId = body.data?.id;
      console.log(`Payment notification for ID: ${paymentId}`);
      // TODO: Fetch payment details and update order status in database
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ received: true }, { status: 200 });
  }
}
