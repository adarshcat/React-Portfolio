import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn" >
              <h1>Hi, I'm Adarsh.</h1>
              {
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    1000,
                    "Programmer.",
                    1500,
                    "Building things from the ground up.",
                    1500,
                    "Clean code. Clear logic.",
                    1500,
                    () => setShowScrollDown(true),
                    1500,
                    "There's more to explore below.",
                    500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={0}
                />
              }
            </ScrollAnimation>

          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image
                src="/profile-photo.png"
                alt="profile-photo"
              />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown &&<ScrollAnimation animateIn="flipInX" offset={0}>
        <ScrollDown to="projects" id="scrollDown">
          <ScrollLink>
            Scroll down
            <img
              src="/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
        </ScrollAnimation>}
      </HeroContainer>
    </main>
  );
}

export default Hero;
