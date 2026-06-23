import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Process from "../components/Process/Process";
import Stats from "../components/Stats/Stats";
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

import data from "../data/mockData.json";

const LandingPage = () => {
  return (
    <>
      <Navbar brand={data.brand} nav={data.nav} />

      <Hero data={data.hero} />

      <About data={data.about} />

      <Services data={data.services} />

      <Stats data={data.stats} />

      <FeaturedProjects data={data.projects} />

      <Process data={data.process} />

      <Testimonials data={data.testimonials} />

      <CTA data={data.cta} />

      <Contact data={data.contact} />

      <Footer brand={data.brand} nav={data.nav} footer={data.footer} />
    </>
  );
};

export default LandingPage;
