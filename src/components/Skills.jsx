import { MainDiv, Section, Heading, Grid } from "./styles/general.style";
import Skill from "./Skill";
import {
  ReactLogo,
  Redux,
  Sass,
  Javascript,
  Css3 as CSS,
  Tailwindcss,
  Python,
  Html5 as HTML,
  Bootstrap,
  Firebase,
} from "@styled-icons/simple-icons";

const skills = [
  { name: "React JS", logo: ReactLogo, postion: "left" },
  { name: "JavaScript", logo: Javascript, postion: "center" },
  { name: "Redux", logo: Redux, postion: "right" },
  { name: "HTML", logo: HTML, postion: "left" },
  { name: "CSS", logo: CSS, postion: "center" },
  { name: "SASS", logo: Sass, postion: "right" },
  { name: "Tailwind CSS", logo: Tailwindcss, postion: "left" },
  { name: "Bootstrap", logo: Bootstrap, postion: "center" },
  { name: "Python", logo: Python, postion: "right" },
  { name: "Firebase", logo: Firebase, postion: "center" },
];

const Skills = () => {
  return (
    <MainDiv>
      <Section>
        <Heading>Skills & Expertise</Heading>
        <Grid>
          {skills.map((skill) => (
            <Skill
              name={skill.name}
              Logo={skill.logo}
              position={skill.postion}
            />
          ))}
        </Grid>
      </Section>
    </MainDiv>
  );
};

export default Skills;
