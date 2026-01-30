import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import HeroMoonshot from "../components/Hero/HeroMoonshot";
import MoonshotContent from "../components/ProjectContent/MoonshotContent";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";

function MoonshotGA() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

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