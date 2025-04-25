import React from "react"
import { FaStar } from "react-icons/fa"
import { RxAvatar } from "react-icons/rx";
import { reviewList } from "../../../data/ProjectData"
import {
    Card,
    CardTop,
    CardTopRight,
    CardTopCountry,
    CardContent,
    Star
} from "./ReviewCardElements"
import ScrollAnimation from "react-animate-on-scroll";

export default function ReviewCard() {
    function onReviewClicked() {
        window.open("https://www.fiverr.com/drasticadarsh", '_blank');
    }
    return(
        <>
            {reviewList.map((item, index) => (
                <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} key={index}>
                    <Card onClick={onReviewClicked}>
                        <CardTop>
                            {item.img != "" && <img className="rating-profile" src={item.img}/>}
                            {item.img == "" && <RxAvatar className="rating-profile"/>}
                            <CardTopRight>
                                <h1>{item.name}</h1>
                                <CardTopCountry>
                                    <img src={item.flagImg} />
                                    <p>{item.country}</p>
                                </CardTopCountry>
                            </CardTopRight>
                        </CardTop>

                        <hr />

                        <CardContent>
                            <Star>
                                <FaStar className="star"/><FaStar className="star"/><FaStar className="star"/><FaStar className="star"/><FaStar className="star"/>
                                <h1>5</h1>
                            </Star>
                            <h1>
                                {item.content}
                            </h1>
                        </CardContent>
                    </Card>
                </ScrollAnimation>
            ))}
        </>
    )
}