import { MainDiv, Section, Heading, Grid } from './styles/general.style';
import Skill from './Skill';
import {
  ReactLogo,
  Redux,
  Sass,
  Javascript,
  Css3 as CSS,
  Python,
  Html5 as HTML,
  Firebase,
} from '@styled-icons/simple-icons';

const Skills = () => {
  return (
    <MainDiv>
      <Section>
        <Heading>Skills & Expertise</Heading>
        <Grid>
          <Skill name='ReactJS' Logo={ReactLogo} position='left' />
          <Skill name='JavaScript' Logo={Javascript} position='center' />
          <Skill name='Redux' Logo={Redux} position='right' />
          <Skill name='CSS' Logo={CSS} position='left' />
          <Skill name='SASS' Logo={Sass} position='center' />
          <Skill name='HTML' Logo={HTML} position='right' />
          <Skill name='Python' Logo={Python} position='left' />
          <Skill name='Firebase' Logo={Firebase} position='center' />
        </Grid>
      </Section>
    </MainDiv>
  );
};

export default Skills;
