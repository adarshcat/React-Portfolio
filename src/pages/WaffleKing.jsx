import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import HeroWaffleKing from "../components/Hero/HeroWaffleKing";
import WaffleKingContent from "../components/ProjectContent/WaffleKingContent";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";

function WaffleKing() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    return(
        <>
            <HeroWaffleKing />
            <WaffleKingContent />
            <Contact />
            <FixSocialIcon />
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default WaffleKing