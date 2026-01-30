import { Caption, SectionTitle, Text } from "./ContentElements"
import useEmblaCarousel from "embla-carousel-react"

function Carousel({ images, slideClass }) {
    const [emblaRef] = useEmblaCarousel({ loop: false })

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {images.map((src, i) => (
                    <div className={slideClass} key={i}>
                        <img src={src} />
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function MoonshotContent() {
    return (
        <>
            <div className="Container">
                <SectionTitle>Overview</SectionTitle>
                <Text>
                    A commercial hypercasual mobile game developed for a client using Godot, featuring in-app purchases, 
                    ads, an in-game currency, and a progression system with unlockable planets, skins and achievements. 
                    Delivered as a production Android APK with ongoing development for future release.
                </Text>
            </div>
            <div className="Container">
                <SectionTitle>Screenshots</SectionTitle>
                <Text>
                    These screenshots showcase the game’s planets, UI, and core gameplay mechanics, highlighting the design and 
                    features implemented in Godot.
                </Text>
                <Carousel
                    slideClass="embla__slide_mga_gameplay"
                    images={
                        ["/moonshotga/img1.jpg", 
                            "/moonshotga/img2.jpg", 
                            "/moonshotga/img3.jpg", 
                            "/moonshotga/img4.jpg",
                            "/moonshotga/img5.jpg",
                            "/moonshotga/img6.jpg"
                        ]
                    }
                />
                <Caption>Gameplay screenshot</Caption>
            </div>
            <div className="Container">
                <SectionTitle>Description</SectionTitle>
                <Text>
                    Moonshot GA is a hypercasual mobile game developed as a client project, designed around short play sessions, 
                    simple mechanics, and long-term progression. The core gameplay focuses on quick, repeatable runs while gradually 
                    unlocking new planets, upgrades, and cosmetic elements. 
                    The project includes a complete in-game economy with soft currency, progression gating, advertisements, and 
                    in-app purchases, all integrated as part of the overall game design rather than as afterthoughts.
                </Text>
                <Text>
                    Development was carried out in four distinct phases, each building upon the previous one. The initial phase 
                    focused on prototyping the core mechanics and validating the gameplay loop. Subsequent phases expanded the 
                    scope with additional planets, progression systems, UI improvements, and performance optimizations, while 
                    also incorporating client feedback and design changes. Each phase resulted in a playable build, allowing the 
                    project to evolve iteratively while remaining stable and testable throughout development.
                </Text>
            </div>
            <div className="Container">
                <SectionTitle>Client Feedback & Ratings</SectionTitle>
                <Text>
                    This project was developed in close collaboration with the client across multiple delivery phases. 
                    Each phase concluded with a completed build, followed by client review and formal rating. The feedback 
                    consistently reflects strong communication, clear alignment on requirements, and reliable delivery 
                    throughout the project lifecycle, even as scope evolved over time.
                </Text>
                <Carousel 
                    slideClass="embla__slide_mga_review"
                    images={
                        ["/moonshotga/phase1-review.png", 
                            "/moonshotga/phase2-review.png", 
                            "/moonshotga/phase3-review.png",
                            "/moonshotga/phase4-review.png"
                        ]
                    }
                />
                <Caption>Client ratings and feedback across four completed development phases.</Caption>
            </div>
            <div className="Container">
                <SectionTitle>Conclusion</SectionTitle>
                <Text>
                    Moonshot GA represents a long-term client engagement focused on iterative development, scalable systems, 
                    and production-ready delivery. The project demonstrates my ability to take ownership of a commercial game 
                    from early prototyping through multiple delivery phases, while adapting to feedback and evolving requirements. 
                    Ongoing development reflects a stable foundation designed to support future expansion.
                </Text>
            </div>
        </>
    )
}