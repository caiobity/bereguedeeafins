"use client";

import { useState, useEffect } from "react";
import { EVENT, TICKETS } from "@/lib/constants";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { href: "/#home", label: "Início" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#atracoes", label: "Atrações" },
  { href: "/#ingressos", label: "Ingressos" },
  { href: "/#local", label: "Local" },
  { href: "/#anteriores", label: "Eventos Anteriores" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ticketsAvailable = TICKETS.length > 0 || !!EVENT.ticketUrl;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        "bg-white/95 backdrop-blur-md",
        scrolled && "border-b border-gray-200 shadow-sm"
      )}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 h-[72px]">
        <a href="/" className="shrink-0 font-brand text-2xl leading-tight tracking-tight md:text-3xl">
          <span className="text-purple drop-shadow-[2px_2px_0_rgba(59,189,224,0.6)]">Bereguedê</span>{" "}
          <span className="text-pink drop-shadow-[2px_2px_0_rgba(59,189,224,0.6)]">& Afins</span>
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-[5px] p-2 md:hidden z-[1001]"
          aria-label="Abrir menu"
        >
          <span
            className={cn(
              "block h-[2.5px] w-6 rounded bg-gray-800 transition-all duration-300",
              menuOpen && "translate-y-[7.5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-[2.5px] w-6 rounded bg-gray-800 transition-all duration-300",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-[2.5px] w-6 rounded bg-gray-800 transition-all duration-300",
              menuOpen && "-translate-y-[7.5px] -rotate-45"
            )}
          />
        </button>

        <ul
          className={cn(
            "flex items-center gap-2 list-none",
            "max-md:fixed max-md:top-0 max-md:right-0 max-md:h-dvh max-md:w-[280px]",
            "max-md:flex-col max-md:items-stretch max-md:bg-white max-md:px-6 max-md:pt-20 max-md:pb-8",
            "max-md:shadow-xl max-md:transition-transform max-md:duration-300",
            menuOpen ? "max-md:translate-x-0" : "max-md:translate-x-full"
          )}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-gray-800 font-semibold text-sm rounded-lg transition-colors duration-200 hover:text-purple hover:bg-purple/5 max-md:py-3.5 max-md:text-base"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/#ingressos"
              onClick={handleLinkClick}
              className="block bg-linear-to-br from-pink to-purple text-white font-bold text-sm px-6 py-2.5 rounded-2xl transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 text-center max-md:mt-2"
            >
              {ticketsAvailable ? "Comprar Ingresso" : "Em breve"}
            </a>
          </li>
        </ul>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
