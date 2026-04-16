"use client";

import { useState } from "react";
import { useCheckout } from "@/context/CheckoutContext";
import { cn } from "@/lib/cn";
import {
  formatCPF,
  formatPhone,
  formatCardNumber,
  formatCardExpiry,
  validateEmail,
  validatePhone,
} from "@/lib/validators";

const PAYMENT_METHODS = [
  { value: "pix", icon: "📱", label: "PIX", desc: "Aprovacao instantanea" },
  { value: "cartao", icon: "💳", label: "Cartao de Credito", desc: "Ate 3x sem juros" },
  { value: "boleto", icon: "📄", label: "Boleto", desc: "Vence em 3 dias" },
];

export default function CheckoutModal() {
  const { isCheckoutOpen, closeCheckout, selectedTicket, quantity, openSuccess } = useCheckout();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [metodo, setMetodo] = useState("pix");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [parcelas, setParcelas] = useState("1");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isCheckoutOpen || !selectedTicket) return null;

  const total = selectedTicket.price * quantity;

  const btnLabels = {
    pix: "Pagar com PIX",
    cartao: "Pagar com Cartao",
    boleto: "Gerar Boleto",
  };

  function parcelasOptions() {
    return [1, 2, 3].map((n) => ({
      value: String(n),
      label: n === 1
        ? `1x de R$ ${total.toFixed(2)} (sem juros)`
        : `${n}x de R$ ${(total / n).toFixed(2)} (sem juros)`,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!nome.trim() || !email.trim() || !cpf.trim() || !telefone.trim()) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    if (!validateEmail(email)) {
      setError("E-mail invalido.");
      return;
    }

    if (cpf.replace(/\D/g, "").length !== 11) {
      setError("CPF invalido. Digite os 11 digitos.");
      return;
    }

    if (!validatePhone(telefone)) {
      setError("Telefone invalido.");
      return;
    }

    if (metodo === "cartao") {
      if (!cardNumber || !cardExpiry || !cardCvv || !cardHolder) {
        setError("Por favor, preencha todos os dados do cartao.");
        return;
      }
      if (cardNumber.replace(/\s/g, "").length < 13) {
        setError("Numero do cartao invalido.");
        return;
      }
    }

    setLoading(true);

    try {
      const payload = {
        ticketType: selectedTicket.id,
        quantity,
        paymentMethod: metodo === "cartao" ? "credit_card" : metodo,
        payer: {
          name: nome,
          email,
          cpf: cpf.replace(/\D/g, ""),
          phone: telefone.replace(/\D/g, ""),
        },
        ...(metodo === "cartao" && {
          cardToken: "tok_simulated",
          installments: parseInt(parcelas),
        }),
      };

      const res = await fetch("/api/payment/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erro ao processar pagamento.");
        return;
      }

      resetForm();
      openSuccess({
        ...data,
        ticketName: selectedTicket.name,
        quantity,
        totalAmount: total,
        paymentMethod: metodo,
        email,
      });
    } catch {
      setError("Erro ao processar o pagamento. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  function resetForm() {
    setNome("");
    setEmail("");
    setCpf("");
    setTelefone("");
    setMetodo("pix");
    setCardNumber("");
    setCardExpiry("");
    setCardCvv("");
    setCardHolder("");
    setParcelas("1");
    setError("");
  }

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) closeCheckout();
  }

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center overflow-y-auto bg-black/60 backdrop-blur-sm p-5"
      onClick={handleOverlayClick}
    >
      <div className="relative w-full max-w-[520px] rounded-3xl bg-white p-8 text-gray-900 animate-modal-in max-h-[90vh] overflow-y-auto max-sm:p-5">
        <button
          type="button"
          onClick={closeCheckout}
          className="absolute top-4 right-5 text-3xl leading-none text-gray-600 transition-colors hover:text-gray-900"
          aria-label="Fechar modal"
        >
          &times;
        </button>

        <h2 className="mb-5 text-2xl text-purple">Finalizar Compra</h2>

        {/* Order summary */}
        <div className="mb-5 rounded-xl bg-gray-100 px-5 py-4 text-sm">
          <div className="flex justify-between py-1">
            <span>Ingresso:</span>
            <strong className="text-purple">{selectedTicket.name}</strong>
          </div>
          <div className="flex justify-between py-1">
            <span>Valor unitario:</span>
            <strong className="text-purple">R$ {selectedTicket.price.toFixed(2)}</strong>
          </div>
          <div className="flex justify-between py-1">
            <span>Quantidade:</span>
            <strong className="text-purple">{quantity}</strong>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Personal info */}
          <div className="mb-4">
            <label className="mb-1.5 block text-sm font-semibold text-gray-800">Nome Completo</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome completo"
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-base transition-colors focus:border-purple focus:ring-2 focus:ring-purple/10 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1.5 block text-sm font-semibold text-gray-800">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-base transition-colors focus:border-purple focus:ring-2 focus:ring-purple/10 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1.5 block text-sm font-semibold text-gray-800">CPF</label>
            <input
              type="text"
              value={cpf}
              onChange={(e) => setCpf(formatCPF(e.target.value))}
              placeholder="000.000.000-00"
              maxLength={14}
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-base transition-colors focus:border-purple focus:ring-2 focus:ring-purple/10 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1.5 block text-sm font-semibold text-gray-800">Telefone</label>
            <input
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(formatPhone(e.target.value))}
              placeholder="(71) 99999-9999"
              maxLength={15}
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-base transition-colors focus:border-purple focus:ring-2 focus:ring-purple/10 focus:outline-none"
            />
          </div>

          {/* Payment method */}
          <h3 className="mt-5 mb-3 text-lg font-bold text-purple">Metodo de Pagamento</h3>
          <div className="mb-4 flex flex-col gap-2">
            {PAYMENT_METHODS.map((pm) => (
              <label key={pm.value} className="cursor-pointer">
                <input
                  type="radio"
                  name="metodo"
                  value={pm.value}
                  checked={metodo === pm.value}
                  onChange={() => setMetodo(pm.value)}
                  className="peer sr-only"
                />
                <div className="flex items-center gap-3 rounded-xl border-2 border-gray-200 px-4 py-3.5 font-semibold transition-colors peer-checked:border-purple peer-checked:bg-purple/[0.04]">
                  <span className="text-xl">{pm.icon}</span>
                  <span>{pm.label}</span>
                  <span className="ml-auto text-xs font-normal text-gray-600 max-sm:hidden">
                    {pm.desc}
                  </span>
                </div>
              </label>
            ))}
          </div>

          {/* Card fields */}
          {metodo === "cartao" && (
            <div className="mb-4 space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-gray-800">Numero do Cartao</label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                  placeholder="0000 0000 0000 0000"
                  maxLength={19}
                  className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-base transition-colors focus:border-purple focus:ring-2 focus:ring-purple/10 focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-gray-800">Validade</label>
                  <input
                    type="text"
                    value={cardExpiry}
                    onChange={(e) => setCardExpiry(formatCardExpiry(e.target.value))}
                    placeholder="MM/AA"
                    maxLength={5}
                    className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-base transition-colors focus:border-purple focus:ring-2 focus:ring-purple/10 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-gray-800">CVV</label>
                  <input
                    type="text"
                    value={cardCvv}
                    onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                    placeholder="123"
                    maxLength={4}
                    className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-base transition-colors focus:border-purple focus:ring-2 focus:ring-purple/10 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-gray-800">Nome no Cartao</label>
                <input
                  type="text"
                  value={cardHolder}
                  onChange={(e) => setCardHolder(e.target.value)}
                  placeholder="Como esta no cartao"
                  className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-base transition-colors focus:border-purple focus:ring-2 focus:ring-purple/10 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-gray-800">Parcelas</label>
                <select
                  value={parcelas}
                  onChange={(e) => setParcelas(e.target.value)}
                  className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-base transition-colors focus:border-purple focus:ring-2 focus:ring-purple/10 focus:outline-none bg-white"
                >
                  {parcelasOptions().map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Total */}
          <div className="my-5 flex items-center justify-between rounded-xl bg-linear-to-br from-purple to-purple-dark px-5 py-4 text-lg font-bold text-white">
            <span>Total:</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>

          {error && (
            <p className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={cn(
              "flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-lg font-bold text-white transition-all duration-200",
              "bg-linear-to-br from-pink to-purple shadow-[0_4px_20px_rgba(230,38,122,0.35)]",
              loading ? "opacity-70 cursor-not-allowed" : "hover:-translate-y-0.5 hover:shadow-[0_6px_30px_rgba(230,38,122,0.5)]"
            )}
          >
            {loading ? (
              <div className="size-5 rounded-full border-3 border-white/30 border-t-white animate-spin" />
            ) : (
              btnLabels[metodo]
            )}
          </button>

          <p className="mt-3 text-center text-xs text-gray-600">
            🔒 Pagamento 100% seguro processado pelo Mercado Pago
          </p>
        </form>
      </div>
    </div>
  );
}
