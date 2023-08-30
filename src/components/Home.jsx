import { useState } from "react";
import { MainDiv } from "./styles/general.style";
import * as S from "./styles/Home.style";
import { ReactComponent as Ellipse } from "./images/ellipse.svg";
import { EnvelopeFill as Envelope } from "@styled-icons/bootstrap/EnvelopeFill";
import Picture from "./images/profilepic.png";
import pictureStyles from "./styles/PictureTag.module.css";
import { TypeAnimation } from "react-type-animation";
import styles from "./styles/typeWriter.module.css";
import Reveal from "./Reveal";

const Home = () => {
  return (
    <MainDiv>
      <S.UserSection>
        <div>
          <S.Intro>
            <S.Greeting>Hi, I'm</S.Greeting>
            <S.Name>Faran Saeed</S.Name>
            <S.SmallRectangle />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Professional React Developer",
                3000,
                "Professional Front-End Developer",
                1000,
                "Professional Front-End & React Developer",
              ]}
              className={styles.introTagline}
              preRenderFirstString={true}
              cursor={false}
              speed={50}
              wrapper="p"
            />
          </S.Intro>
          <S.ContactDiv>
            <S.ContactButton href={"mailto: faransaeed360@yahoo.com"}>
              <Envelope /> CONTACT ME
            </S.ContactButton>
          </S.ContactDiv>
        </div>
        <S.PictureDiv>
          <Ellipse />
          <img
            className={pictureStyles.pictureTag}
            rel="preload"
            src={Picture}
            alt="Profile Picture"
          />
        </S.PictureDiv>
      </S.UserSection>
      <S.AboutSection>
        <Reveal width="100%">
          <S.AboutHeading>About me</S.AboutHeading>
          <TypeAnimation
            sequence={[
              500,
              "I'm Faran Saeed, a Front-End Developer with over 2 years of hands-on experience in the industry. My journey into the world of programming began during the COVID-19 pandemic when I started learning Python through Coursera. Since then, I've been on an exciting path of self-discovery and growth.\nI hold a BSc in Economics from Lahore University of Management Sciences (LUMS), where I acquired valuable analytical and problem-solving skills that I now apply to my development work.\nMy passion for programming is what drives me. I find joy in crafting seamless and visually appealing web experiences. I'm proficient in a range of technologies, including React JS, JavaScript, CSS, HTML, Tailwind CSS, and Bootstrap. I also have a strong grasp of Git Version Control to ensure efficient collaboration on projects.",
              1000,
            ]}
            className={styles.aboutContent}
            cursor={false}
            speed={85}
            wrapper="p"
          />
        </Reveal>
      </S.AboutSection>
    </MainDiv>
  );
};

export default Home;
