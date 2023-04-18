import { MainDiv, Section, Heading, Grid } from './styles/general.style';
import Project from './Project';
import ganvian from './images/ganvian.png';
import cvCreator from './images/cv-creator.png';
import toDoList from './images/to-do-list.png';
import weatherApp from './images/weather-app.png';
import ticTacToe from './images/tic-tac-toe.png';
import restaurantSite from './images/restaurant-page.png';
import calculator from './images/calculator.png';

const Projects = () => {
  return (
    <MainDiv>
      <Section>
        <Heading>Projects</Heading>
        <Grid>
          <Project
            name='Ganvian Landing Page'
            image={ganvian}
            alt='CV Creator App'
            descriptionLink='https://github.com/F-Saeed/ganvian/'
            websiteLink='https://ganvian-prototype.netlify.app/'
            position='left'
          />
          <Project
            name='CV Creator'
            image={cvCreator}
            alt='CV Creator App'
            descriptionLink='https://github.com/F-Saeed/cv-creator-redux/'
            websiteLink='https://f-saeed.github.io/cv-creator-redux/'
            position='center'
          />
          <Project
            name='To Do List'
            image={toDoList}
            alt='To Do List App'
            descriptionLink='https://github.com/F-Saeed/to-do-list/'
            websiteLink='https://f-saeed.github.io/to-do-list/'
            position='right'
          />
          <Project
            name='Weather App'
            image={weatherApp}
            alt='Weather App'
            descriptionLink='https://github.com/F-Saeed/weather-app/'
            websiteLink='https://f-saeed.github.io/weather-app/'
            position='left'
          />
          <Project
            name='Tic Tac Toe'
            image={ticTacToe}
            alt='Tic Tac Toe browser game'
            descriptionLink='https://github.com/F-Saeed/tic-tac-toe/'
            websiteLink='https://f-saeed.github.io/tic-tac-toe/'
            position='center'
          />
          <Project
            name='Calculator'
            image={calculator}
            alt='Calculator App'
            descriptionLink='https://github.com/F-Saeed/calculator/'
            websiteLink='https://f-saeed.github.io/calculator/'
            position='right'
          />
        </Grid>
      </Section>
    </MainDiv>
  );
};

export default Projects;
