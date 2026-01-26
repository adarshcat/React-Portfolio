import { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Reviews from "../components/Reviews/Reviews";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";
import { useLocation, useNavigate } from 'react-router';
import { scroller } from 'react-scroll';

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const section = location.state?.scrollTo;
    if (section) {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 600,
      });
    }
  }, [location]);
  return (
    <>
      <Hero />
      <Projects />
      <Reviews />
      <About />
      <Contact />
      <FixSocialIcon />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
