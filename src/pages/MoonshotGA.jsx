import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import HeroMoonshot from "../components/Hero/HeroMoonshot";
import Projects from "../components/Projects/Projects";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";

function MoonshotGA() {
    return(
        <>
            <HeroMoonshot />
            
            <Contact />
            <FixSocialIcon />
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default MoonshotGA