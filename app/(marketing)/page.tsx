import { Accordion } from "../components/landing/Faq";
import { Features } from "../components/landing/Features";
import { Footer } from "../components/landing/Footer";
import { Hero } from "../components/landing/Hero";
import { Reviews } from "../components/landing/Reviews";

const Home: React.FC = () => {
  return (
    <main className="bg-hero-bg">
      <Hero />
      <Features />
      <Reviews />
      <Accordion />
      <Footer />
    </main>
  );
};
export default Home;
