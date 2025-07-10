import Footer from "../Component/Common/Footer";
import Navbar from "../Component/Common/Navbar";
import RunningText from "../Component/Common/RunningText";
import Contact from "../Component/Home/Contact";
import Faq from "../Component/Home/Faq";
import Features from "../Component/Home/Features";
import HeroSection from "../Component/Home/HeroSection";
import Portfolio from "../Component/Home/Portfolio";
import Testimonials from "../Component/Home/Testimonial";

// 🔥 Add this import
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="">
      {/* 🔔 Toast container (one‑time render) */}
      <Toaster position="top-center" />  

      <div className="relative">
        <div className="absolute inset-0">
          <div className="relative h-full w-full bg-red [&>div]:absolute [&>div]:h-full [&>div]:w-full [&>div]:bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [&>div]:[background-size:16px_16px] [&>div]:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
            <div></div>
          </div>
        </div>

        <div className="relative z-10">
          <div className="container m-auto px-6">
            <Navbar />

            <div className="pt-17">
              <RunningText />
              <HeroSection />
              <Features />
              <Portfolio />
              <Testimonials />
              <Faq />
              <Contact />
            </div>

          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
