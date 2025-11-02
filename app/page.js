import HeroSection from "../components/HeroSection"
import BookingSection from "../components/BookingSection"
import HmoSection from "../components/HmoSection"
import ServicesSection from "../components/ServicesSection"
import DoctorsSection from "../components/DoctorsSection"
import TestsSection from "../components/TestsSection"
import RiskFactorsSection from "../components/RiskFactorsSection"
import FaqSection from "../components/FaqSection"
import ContactSection from "@/components/ContactSection"
import BranchesSection from "@/components/BranchesSection"
import FramesGallery from "@/components/FramesGallery"
import Ecommerce from "@/components/Ecommerce"

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

       {/* Booking Section */}
      <section id="ecommerce" className="bg-blue-50">
        <Ecommerce />
      </section>

       {/* Booking Section */}
      <section id="gallery" className="bg-blue-50">
        <FramesGallery />
      </section>


       {/* Booking Section */}
      <section id="booking" className="bg-blue-50">
        <BookingSection />
      </section>
    


       {/* Services Section */}
      <section id="services" className="bg-gray-50">
        <ServicesSection />
      </section>

      
      {/* FAQ Section */}
      <section id="faq" className="bg-gray-50">
        <FaqSection />
      </section>



      {/* HMOs Section */}
      <section id="hmos" className="bg-white">
        <HmoSection />
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="bg-white">
        <DoctorsSection />
      </section>

      {/* Tests Section */}
      <section id="tests" className="bg-gray-50">
        <TestsSection />
      </section>

      {/* Risk Factors Section */}
      <section id="risk-factors" className="bg-white">
        <RiskFactorsSection />
      </section>

        {/* Booking Section */}
      <section id="branches" className="bg-blue-50">
        <BranchesSection />
      </section>

       {/* CONTACTS */}
      <section id="contact" className="bg-white">
        <ContactSection />
      </section>

     
    </main>
  )
}
