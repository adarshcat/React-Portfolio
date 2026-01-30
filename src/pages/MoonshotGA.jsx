import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import HeroMoonshot from "../components/Hero/HeroMoonshot";
import MoonshotContent from "../components/ProjectContent/MoonshotContent";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";

function MoonshotGA() {
    return(
        <>
            <HeroMoonshot />
            <MoonshotContent />
            <Contact />
            <FixSocialIcon />
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default MoonshotGA