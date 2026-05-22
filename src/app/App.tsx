import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Credentials } from "./components/Credentials";
import { Comparison } from "./components/Comparison";
import { Pricing } from "./components/Pricing";
import { Reviews } from "./components/Reviews";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#06402B] via-[#06402B]/50 via-30% to-black dark">
      <Navbar />
      <Hero />
      <Credentials />
      <Comparison />
      <Pricing />
      <Reviews />
      <Footer />
    </div>
  );
}
