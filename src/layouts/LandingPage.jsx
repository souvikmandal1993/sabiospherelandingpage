import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Highlights from "../components/Highlights/Highlights";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";
import Principal from "../components/Principal/Principal";
import Budgets from "../components/Budgets/Budgets";
import VideoReview from "../components/VideoReview/VideoReview";
import VirtualTour from "../components/VirtualTour/VirtualTour";
import WhyUs from "../components/WhyUs/WhyUs";
import Solutions from "../components/Solutions/Solutions";
import Process from "../components/Process/Process";
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects";
import Testimonials from "../components/Testimonials/Testimonials";
import BookConsultation from "../components/BookConsultation/BookConsultation";
import Footer from "../components/Footer/Footer";

import data from "../data/mockData.json";

const LandingPage = () => {
  return (
    <>
      <Navbar brand={data.brand} nav={data.nav} />

      <Hero data={data.hero} />

      <Highlights data={data.highlights} />

      <Principal data={data.principal} />

      <Budgets data={data.budgets} />

      <VideoReview data={data.videoReview} />

      <VirtualTour data={data.virtualTour} />

      <WhyUs data={data.whyUs} />

      <Solutions data={data.solutions} />

      <FeaturedProjects data={data.projects} />

      <Process data={data.process} />

      <Testimonials data={data.testimonials} />

      <BookConsultation data={data.bookConsultation} />

      <Footer brand={data.brand} footer={data.footer} />

      <WhatsAppButton
        phone={data.contact.whatsapp}
        message={data.contact.whatsappMessage}
      />
    </>
  );
};

export default LandingPage;
