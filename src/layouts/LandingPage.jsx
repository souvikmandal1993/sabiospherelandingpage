import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Highlights from "../components/Highlights/Highlights";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";
import About from "../components/About/About";
import Principal from "../components/Principal/Principal";
import Budgets from "../components/Budgets/Budgets";
import VideoReview from "../components/VideoReview/VideoReview";
import VirtualTour from "../components/VirtualTour/VirtualTour";
import Solutions from "../components/Solutions/Solutions";
import Services from "../components/Services/Services";
import Process from "../components/Process/Process";
import Stats from "../components/Stats/Stats";
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects";
import Testimonials from "../components/Testimonials/Testimonials";
import VideoTestimonials from "../components/VideoTestimonials/VideoTestimonials";
import CTA from "../components/CTA/CTA";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

import data from "../data/mockData.json";

const LandingPage = () => {
  return (
    <>
      <Navbar brand={data.brand} nav={data.nav} />

      <Hero data={data.hero} />

      <Highlights data={data.highlights} />

      {/* <About data={data.about} /> */}

      <Principal data={data.principal} />

      <Budgets data={data.budgets} />

      <VideoReview data={data.videoReview} />

      <VirtualTour data={data.virtualTour} />

      <Solutions data={data.solutions} />

      <FeaturedProjects data={data.projects} />

      <Process data={data.process} />

      <Testimonials data={data.testimonials} />

      <VideoTestimonials data={data.videoTestimonials} />

      <Footer brand={data.brand} nav={data.nav} footer={data.footer} />

      <WhatsAppButton
        phone={data.contact.whatsapp}
        message={data.contact.whatsappMessage}
      />
    </>
  );
};

export default LandingPage;
