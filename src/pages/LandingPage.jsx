import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";


export default function LandingPage() {
  return (
    <div className="min-h-screen body-css">
        <Navbar/>
        <HeroSection />
        <ServicesSection />
        <CTASection />
        <Footer />
    </div>
  );
}
