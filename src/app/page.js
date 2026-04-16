import { CheckoutProvider } from "@/context/CheckoutContext";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Sobre from "@/components/sections/Sobre";
import CountdownSection from "@/components/sections/CountdownSection";
import Atracoes from "@/components/sections/Atracoes";
import Ingressos from "@/components/sections/Ingressos";
import Local from "@/components/sections/Local";
import Faq from "@/components/sections/Faq";
import EventosAnteriores from "@/components/sections/EventosAnteriores";
import Footer from "@/components/layout/Footer";
import CheckoutModal from "@/components/checkout/CheckoutModal";
import SuccessModal from "@/components/checkout/SuccessModal";

export default function Home() {
  return (
    <CheckoutProvider>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <CountdownSection />
        <Atracoes />
        <Ingressos />
        <Local />
        <Faq />
        <EventosAnteriores />
      </main>
      <Footer />
      <CheckoutModal />
      <SuccessModal />
    </CheckoutProvider>
  );
}
