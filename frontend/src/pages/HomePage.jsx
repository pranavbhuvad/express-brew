import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Intro from "../components/Intro";
import SignaturePicks from "../components/SignaturePicks";
import FoodExperience from "../components/FoodExperience";
import MenuSection from "../components/MenuSection";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import LocationSection from "../components/LocationSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import MobileCTABar from "../components/MobileCTABar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <Intro />
        <SignaturePicks />
        <FoodExperience />
        <MenuSection />
        <Gallery />
        <Reviews />
        <LocationSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
