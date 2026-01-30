import { Caption, SectionTitle, Text, Image } from "./ContentElements"
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

export default function WaffleKingContent() {
    return (
        <>
            <div className="Container">
                <SectionTitle>Overview</SectionTitle>
                <Text>
                    Waffle King is a client-commissioned 2D platformer built in Godot as part of a promotional campaign. 
                    The project involved full-cycle development, transforming an initial concept into a complete, 
                    production-ready game. I handled gameplay systems, UI, level design, and art adaptation to ensure a 
                    cohesive visual style and responsive player experience.
                </Text>
            </div>
            <div className="Container">
                <SectionTitle>Screenshots</SectionTitle>
                <Text>
                    The following screenshots showcase core gameplay, level design, animations, and UI elements implemented 
                    throughout development, highlighting the game’s polished presentation and responsive platforming mechanics.
                </Text>
                <Carousel
                    slideClass="embla__slide_wk_gameplay"
                    images={
                        ["/waffleking/img1.png", 
                            "/waffleking/img2.png", 
                            "/waffleking/img3.png", 
                            "/waffleking/img4.png"
                        ]
                    }
                />
                <Caption>Gameplay from the completed client build.</Caption>
            </div>
            <div className="Container">
                <SectionTitle>Description</SectionTitle>
                <Text>
                    Waffle King is a 2D platformer developed as a client project for a promotional campaign, with a strong 
                    focus on visual polish, responsive controls, and player-friendly level design. The game was built end-to-end 
                    in Godot, covering gameplay mechanics, enemy behavior, collectibles, animations, UI, and menu systems, all 
                    tailored to the client’s theme.
                </Text>
                <Text>
                    In addition to core gameplay, the project included integration of a secure online leaderboard to support 
                    competitive play and replayability. Art assets were adapted and refined to match the campaign’s visual 
                    direction, while levels were designed to balance accessibility with engagement. Development was carried 
                    out iteratively with regular client updates, ensuring alignment with expectations and smooth progression 
                    from concept to final delivery.
                </Text>
            </div>
            <div className="Container">
                <SectionTitle>Client Feedback & Ratings</SectionTitle>
                <Text>
                    This project was delivered with close client collaboration and iterative feedback throughout development. 
                    The client highlighted clear communication, strong understanding of requirements, attention to detail, and 
                    professional delivery. The final result exceeded initial expectations and led to positive feedback and a 
                    voluntary client tip upon completion.
                </Text>
                <Image src="/waffleking/review.png" />
                <Caption>5-star client feedback reflecting communication, quality, and delivery of the final build.</Caption>
            </div>
            <div className="Container">
                <SectionTitle>Conclusion</SectionTitle>
                <Text>
                    Waffle King highlights my capability to deliver a complete, client-focused game within defined timelines and 
                    requirements. The project reflects strong ownership of both technical and creative aspects, effective client 
                    communication, and a consistent focus on quality and usability. It serves as a clear example of professional, 
                    end-to-end game development for commercial and promotional use.
                </Text>
            </div>
        </>
    )
}