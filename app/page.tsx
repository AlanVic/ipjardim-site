import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Cultos from "@/components/Cultos";
import Eventos from "@/components/Eventos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sobre />
      <Cultos />
      <Eventos />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
