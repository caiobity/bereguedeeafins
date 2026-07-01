"use client";

import { useState } from "react";
import { Ticket, ArrowUpRight } from "lucide-react";
import { EVENT, TICKETS, TICKET_CATEGORIES } from "@/lib/constants";
import { useCheckout } from "@/context/CheckoutContext";
import { cn } from "@/lib/cn";

function QtyControl({ value, onChange }) {
  return (
    <div className="flex items-center overflow-hidden rounded-lg border border-white/20">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, value - 1))}
        className="flex size-9 items-center justify-center bg-white/10 text-lg text-white transition-colors hover:bg-white/20"
      >
        −
      </button>
      <span className="w-12 text-center font-bold text-white tabular-nums">{value}</span>
      <button
        type="button"
        onClick={() => onChange(Math.min(10, value + 1))}
        className="flex size-9 items-center justify-center bg-white/10 text-lg text-white transition-colors hover:bg-white/20"
      >
        +
      </button>
    </div>
  );
}

function TicketCard({ ticket }) {
  const [qty, setQty] = useState(1);
  const { openCheckout } = useCheckout();

  const price = ticket.price;
  const priceInt = Math.floor(price);
  const priceDec = ((price % 1) * 100).toFixed(0).padStart(2, "0");

  return (
    <div
      className={cn(
        "relative rounded-2xl p-7 text-center text-white transition-all duration-200",
        "bg-white/[0.08] backdrop-blur-sm border-2",
        ticket.featured
          ? "border-pink bg-white/[0.14]"
          : "border-white/15",
        "hover:-translate-y-1 hover:bg-white/[0.12] hover:border-white/30"
      )}
    >
      {ticket.tag && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-linear-to-r from-pink to-yellow px-5 py-1 text-[0.65rem] font-extrabold uppercase text-purple-dark">
          {ticket.tag}
        </div>
      )}

      <h3 className="text-lg font-bold">{ticket.name}</h3>
      <div className="mb-4 text-xs uppercase tracking-wider opacity-60">{ticket.lote}</div>

      <div className="mb-5 flex items-start justify-center">
        <span className="mt-1 mr-1 text-sm font-bold">R$</span>
        <span className="text-5xl leading-none">{priceInt}</span>
        <span className="mt-1 text-sm font-bold">,{priceDec}</span>
      </div>

      <div className="mb-4 flex items-center justify-center gap-3">
        <span className="text-xs opacity-80">Qtd:</span>
        <QtyControl value={qty} onChange={setQty} />
      </div>

      <a
        href="https://shotgun.live/pt-br/events/curumin-cabuloso-gil-dj-roger-n-roll"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full rounded-xl bg-linear-to-br from-pink to-cyan py-3 text-sm font-bold text-white shadow-[0_4px_20px_rgba(230,38,122,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_30px_rgba(230,38,122,0.5)]"
      >
        Comprar
      </a>
    </div>
  );
}

export default function Ingressos() {
  const [activeCategory, setActiveCategory] = useState("meia");

  const filteredTickets = TICKETS.filter(
    (ticket) => ticket.category === activeCategory
  );

  const hasLocalTickets = TICKETS.length > 0;
  const hasExternalTickets = !hasLocalTickets && !!EVENT.ticketUrl;

  return (
    <section id="ingressos" className="bg-linear-to-br from-purple-dark to-purple py-20 text-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-2 text-center text-4xl text-white md:text-5xl text-balance">
          Ingressos
        </h2>
        <p className="mb-10 text-center text-white/70 text-pretty">
          {hasLocalTickets
            ? "Escolha o tipo e o lote ideal para você"
            : hasExternalTickets
            ? "Garanta seu ingresso pelo PIX ou pelo site Shotgun"
            : "Vendas em breve"}
        </p>

        {hasLocalTickets ? (
          <>
            {/* Category Tabs */}
            <div className="mb-10 flex flex-wrap justify-center gap-3">
              {TICKET_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-200",
                    activeCategory === cat.id
                      ? "bg-white text-purple shadow-md scale-105"
                      : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Category description */}
            <p className="mb-6 text-center text-sm text-white/50">
              {TICKET_CATEGORIES.find((c) => c.id === activeCategory)?.description}
            </p>

            {/* Ticket Cards Grid */}
            <div className="mx-auto mb-10 grid max-w-[420px] gap-6 md:max-w-none md:grid-cols-2 lg:grid-cols-3">
              {filteredTickets.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
            </div>
          </>
        ) : hasExternalTickets ? (
          <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
            {/* PIX */}
            <a
              href={`https://wa.me/${EVENT.contact.whatsapp}?text=${encodeURIComponent(
                "Olá! Tenho interesse em garantir meu ingresso para Bereguedê & Afins via PIX."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-3xl border-2 border-white/20 bg-white/[0.08] p-7 text-center shadow-lg backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-yellow/60 hover:bg-white/[0.12] hover:shadow-xl"
            >
              <div className="mb-3 text-cyan">
                <svg width="44" height="44" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
                  <path d="M242.4 292.5C247.8 287.1 257.1 287.1 262.5 292.5L339.5 369.5C353.7 383.7 372.6 391.5 392.6 391.5H407.7L310.6 488.6C280.3 518.1 231.2 518.1 200.8 488.6L103.3 391.2H112.6C132.6 391.2 151.5 383.4 165.7 369.2L242.4 292.5zM262.5 218.9C256.1 224.4 247.9 224.4 242.5 218.9L165.7 142.2C151.5 127.1 132.6 120.2 112.6 120.2H103.3L200.7 22.76C231.1-7.586 280.3-7.586 310.6 22.76L407.8 119.9H392.6C372.6 119.9 353.7 127.7 339.5 141.9L262.5 218.9zM112.6 142.7C126.4 142.7 139.1 148.3 149.7 158.1L226.5 234.8C233.4 241.7 242.5 245.2 251.5 245.2C260.5 245.2 269.6 241.7 276.4 234.8L353.5 157.8C363.2 148.1 376.8 142.5 390.7 142.5H429.6L488.6 201.4C518.9 231.8 518.9 280.9 488.6 311.2L429.6 370.2H390.7C376.8 370.2 363.2 364.6 353.5 354.9L276.5 277.9C263.1 264.6 239.9 264.6 226.6 277.9L149.7 354.8C139.1 364.6 126.4 370.2 112.6 370.2H78.81L22.76 314.2C-7.586 283.8-7.586 234.7 22.76 204.4L78.81 148.3L112.6 142.7z"/>
                </svg>
              </div>
              <h3 className="mb-1 text-xl font-bold text-white">
                Pagar com PIX
              </h3>
              <p className="mb-5 text-sm text-white/70 text-pretty">
                Fale com a gente no Whatsapp para efetuar o pagamento
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 rounded-2xl bg-linear-to-br from-cyan to-purple px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-lg">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.6 6.3a7.7 7.7 0 00-5.6-2.3 7.7 7.7 0 00-5.6 2.3 7.7 7.7 0 00-2.3 5.6c0 1.5.4 2.9 1.1 4.1L4 20.8l4.9-1.3a7.7 7.7 0 003.1.6 7.7 7.7 0 005.6-2.3 7.7 7.7 0 002.3-5.6c0-2.1-.8-4.1-2.3-5.6zm-5.6 12.3c-1 0-2-.3-2.9-.7l-.2-.1-3 .8.8-2.9-.1-.2a6.4 6.4 0 01-1-3.5 6.5 6.5 0 016.4-6.4c1.7 0 3.3.7 4.5 1.9a6.4 6.4 0 011.9 4.5 6.5 6.5 0 01-6.4 6.6z"/>
                </svg>
                WhatsApp
              </span>
            </a>

            {/* Shotgun */}
            <a
              href={EVENT.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-3xl border-2 border-white/20 bg-white/[0.08] p-7 text-center shadow-lg backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-pink/60 hover:bg-white/[0.12] hover:shadow-xl"
            >
              <div className="mx-auto mb-3 flex size-14 items-center justify-center rounded-2xl bg-linear-to-br from-pink to-yellow text-purple-dark shadow-md">
                <Ticket size={28} strokeWidth={2.2} aria-hidden="true" />
              </div>
              <h3 className="mb-1 text-xl font-bold text-white">
                Comprar no Shotgun
              </h3>
              <p className="mb-5 text-sm text-white/70 text-pretty">
                Plataforma oficial de venda online com cartão de crédito.
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 rounded-2xl bg-linear-to-br from-pink to-yellow px-5 py-2.5 text-sm font-bold text-purple-dark shadow-md transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-lg">
                Ir para Shotgun
                <ArrowUpRight size={16} strokeWidth={2.5} aria-hidden="true" />
              </span>
            </a>
          </div>
        ) : (
          <div className="mx-auto max-w-xl rounded-3xl border-2 border-dashed border-white/25 bg-white/[0.06] px-8 py-12 text-center backdrop-blur-sm">
            <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-linear-to-br from-pink to-yellow text-purple-dark shadow-md">
              <Ticket size={30} strokeWidth={2.2} aria-hidden="true" />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-white">
              Vendas em breve
            </h3>
            <p className="text-white/70 text-pretty">
              Os ingressos para o próximo evento serão liberados em breve. Siga{" "}
              <a
                href="https://instagram.com/bereguedeeafins"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-yellow underline-offset-2 hover:underline"
              >
                @bereguedeeafins
              </a>{" "}
              para ser avisado assim que abrirem.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
