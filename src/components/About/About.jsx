import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <Image
            src="/profile-photo.png"
            alt="profile-photo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} style={{fontWeight: "300"}}>
            Hello! My name is Adarsh Bharti, and I’m based in India. While I’m currently a student, my journey in the tech world has been shaped by a strong curiosity and a constant desire to learn and grow. Through various personal and freelance projects, I’ve developed adaptability, communication, and problem-solving skills that I bring to every new challenge.
            </ScrollAnimation>

            <br />
            
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} style={{fontWeight: "300"}}>
            My passion for technology began early, inspiring me to pursue computer science and software development. I’ve always been fascinated by how ideas can be transformed into real, functional products through code. This enthusiasm has driven my growth both academically and through hands-on experience.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeIn" animateOnce={true} style={{fontWeight: "300"}}>
            One of the most rewarding aspects of my journey has been working on high-quality freelance projects on Fiverr. These real-world experiences have allowed me to take on creative and technical challenges, from building apps and games to designing websites. I especially enjoy web and cross-platform app development, where I get to combine logic and creativity to create things people find useful and engaging.
              <div className="tagline2" style={{fontWeight: "400"}}>
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
