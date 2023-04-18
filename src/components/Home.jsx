import { MainDiv } from './styles/general.style';
import * as S from './styles/Home.style';
import { ReactComponent as Ellipse } from './images/ellipse.svg';
import { EnvelopeFill as Envelope } from '@styled-icons/bootstrap/EnvelopeFill';
import pictureStyles from './styles/PictureTag.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Picture from './images/profilepic.png';

const Home = () => {
  return (
    <MainDiv>
      <S.UserSection>
        <div>
          <S.Intro>
            <S.Greeting>Hi, I'm</S.Greeting>
            <S.Name>Faran Saeed</S.Name>
            <S.SmallRectangle />
            <S.IntroTagline>
              Professional Front-End & React Developer
            </S.IntroTagline>
          </S.Intro>
          <S.ContactDiv>
            <S.ContactButton href={'mailto: faransaeed360@yahoo.com'}>
              <Envelope /> CONTACT ME
            </S.ContactButton>
          </S.ContactDiv>
        </div>
        <S.PictureDiv>
          <Ellipse />
          <LazyLoadImage
            alt='Profile'
            className={pictureStyles.pictureTag}
            effect='blur'
            src={Picture}
          />
        </S.PictureDiv>
      </S.UserSection>
    </MainDiv>
  );
};

export default Home;
