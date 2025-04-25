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
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            Hello! My name is <strong>Adarsh Bharti</strong>, and I’m based in India. My journey in the professional world has been shaped by a deep curiosity and a drive to continually learn and grow. Over time, I've taken on various roles that strengthened my adaptability, communication, and problem-solving skills — qualities that I carry with me into every new challenge.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            My passion for technology sparked early on, leading me to pursue a path in computer science and software development. I’ve always been fascinated by how ideas can be brought to life through code. This passion has fueled my growth both academically and personally, especially during hands-on projects that allowed me to experiment, learn from mistakes, and collaborate with others.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            Among the highlights of my journey so far have been the creative and technical challenges of building apps, games, and websites — each one pushing me to become better. I find particular excitement in web development and cross-platform app development, where I can blend creativity with logic to build something people actually use.
              <div className="tagline2">
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
