"use client";

import { useCheckout } from "@/context/CheckoutContext";

export default function SuccessModal() {
  const { isSuccessOpen, closeSuccess, paymentResult } = useCheckout();

  if (!isSuccessOpen || !paymentResult) return null;

  const methodLabels = {
    pix: "PIX",
    cartao: "Cartao de Credito",
    credit_card: "Cartao de Credito",
    boleto: "Boleto",
  };

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) closeSuccess();
  }

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center overflow-y-auto bg-black/60 backdrop-blur-sm p-5"
      onClick={handleOverlayClick}
    >
      <div className="w-full max-w-[520px] rounded-3xl bg-white p-8 text-center animate-modal-in">
        <div className="mb-4 text-6xl">&#10003;</div>
        <h2 className="mb-3 text-2xl text-purple">Compra Realizada!</h2>
        <p className="mb-6 text-gray-600">
          Seu ingresso foi confirmado. Voce recebera os detalhes no e-mail informado.
        </p>

        <div className="mb-6 rounded-xl bg-gray-100 p-4 text-left text-sm">
          <p className="py-1 text-gray-800">
            <strong>Ingresso:</strong> {paymentResult.ticketName}
          </p>
          <p className="py-1 text-gray-800">
            <strong>Quantidade:</strong> {paymentResult.quantity}
          </p>
          <p className="py-1 text-gray-800">
            <strong>Total:</strong> R$ {paymentResult.totalAmount?.toFixed(2)}
          </p>
          <p className="py-1 text-gray-800">
            <strong>Pagamento:</strong>{" "}
            {methodLabels[paymentResult.paymentMethod] || paymentResult.paymentMethod}
          </p>
          <p className="py-1 text-gray-800">
            <strong>E-mail:</strong> {paymentResult.email}
          </p>
        </div>

        <button
          type="button"
          onClick={closeSuccess}
          className="w-full rounded-2xl bg-linear-to-br from-pink to-purple py-3.5 font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
