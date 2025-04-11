import CallToAction from "@/components/ui/landingPage/CallToAction";
import Demo from "@/components/ui/landingPage/Demo";
import Features from "@/components/ui/landingPage/Features";
import Footer from "@/components/ui/landingPage/Footer";
import Hero from "@/components/ui/landingPage/Hero";
import Pricing from "@/components/ui/landingPage/Pricing";
import Products from "@/components/ui/landingPage/Products";
import Testimonial from "@/components/ui/landingPage/Testimonial";

const Homepage = () => {
  return (
    <div className="bg-white text-black font-sans">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Demo Section */}
      <Demo />

      {/* Products Section */}
      <Products />

      {/* Testimonial */}
      <Testimonial />

      {/* Pricing */}
      <Pricing />

      {/* Call to Action */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;