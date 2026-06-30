import { EVENT } from "@/lib/constants";

const QUICK_LINKS = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#atracoes", label: "Atrações" },
  { href: "/#ingressos", label: "Ingressos" },
  { href: "/#local", label: "Local" },
  { href: "/#anteriores", label: "Eventos Anteriores" },
  { href: "/#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 pb-6 text-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-10 grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-2 font-heading text-xl font-bold text-yellow">
              Bereguedê & Afins
            </h3>
            <p className="max-w-[280px] text-sm text-white/60">
              {EVENT.description}
            </p>
            <p className="mt-2 text-xs text-white/40">
              Produção independente por{" "}
              <a
                href="https://instagram.com/marcia_bity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-yellow transition-colors"
              >
                @marcia_bity
              </a>
            </p>
            <p className="text-xs text-white/40">Salvador | Bahia</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-bold">Links Rapidos</h4>
            {QUICK_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-1 text-sm text-white/60 transition-colors hover:text-yellow"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-bold">Contato</h4>
            <a
              href={`mailto:${EVENT.contact.email}`}
              className="block py-1 text-sm text-white/60 transition-colors hover:text-yellow"
            >
              {EVENT.contact.email}
            </a>
            <a
              href={`https://wa.me/${EVENT.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-1 text-sm text-white/60 transition-colors hover:text-yellow"
            >
              WhatsApp: {EVENT.contact.whatsappDisplay}
            </a>

            <div className="mt-4 flex gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com/bereguedeeafins"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-pink"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs opacity-50">
          <p>&copy; 2026 Bereguedê & Afins. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
