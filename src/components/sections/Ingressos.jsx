"use client";

import { useState } from "react";
import { TICKETS, TICKET_CATEGORIES } from "@/lib/constants";
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

  return (
    <section id="ingressos" className="bg-linear-to-br from-purple-dark to-purple py-20 text-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-2 text-center text-4xl text-white md:text-5xl text-balance">
          Ingressos
        </h2>
        <p className="mb-8 text-center text-white/70 text-pretty">
          Escolha o tipo e o lote ideal para você
        </p>

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

      </div>
    </section>
  );
}
