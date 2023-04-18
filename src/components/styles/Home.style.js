import styled from 'styled-components';

import { AppearAndRotate, NameTransition, TitleTransition } from './keyFrames';

export const UserSection = styled.section`
  background-color: #f9f9fc;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  width: min(100vw, 1440px);
  max-width: 100%;

  @media only screen and (min-width: 320px) and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const Intro = styled.div`
  display: grid;
  font-family: 'Poppins Bold';
  font-size: 70px;
  text-align: center;

  @media only screen and (min-width: 320px) and (max-width: 570px) {
    font-size: 45px;
    margin-top: 50px;
  }

  @media only screen and (min-width: 571px) and (max-width: 1200px) {
    margin-top: 50px;
  }
`;

export const Greeting = styled.span`
  animation: 1.75s ease-out 0s 1 ${TitleTransition};
`;

export const Name = styled.span`
  animation: 3s ease-out 0s 1 ${NameTransition};
`;

export const SmallRectangle = styled.div`
  animation: 1.75s ease-out 0s 1 ${TitleTransition};
  background-color: rgba(234, 39, 103, 0.75);
  height: 15px;
  position: relative;
  bottom: 142px;
  left: 231px;
  width: 108px;
  z-index: 1;

  @media only screen and (min-width: 320px) and (max-width: 570px) {
    display: none;
    bottom: 93.5px;
    left: 188.4px;
    height: 12px;
    width: 67px;
  }
`;

export const IntroTagline = styled.p`
  animation: 3s ease-out 0s 1 ${TitleTransition};
  font-family: 'Poppins Regular';
  font-size: 1rem;
  line-height: 24px;
  letter-spacing: 0.2rem;
`;

export const ContactDiv = styled.div`
  animation: 1.25s ease-out 0s 1 ${TitleTransition};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins Medium';
  font-size: 12px;
  height: 150px;
`;

export const ContactButton = styled.a`
  background-color: #5e3bee;
  border-radius: 40px;
  color: #fff;
  font-size: 14px;
  display: flex;
  justify-content: center;
  padding: 20px 30px;
  text-decoration: none;

  > svg {
    margin-right: 11px;
    height: 24px;
    width: 24px;
  }

  @media only screen and (min-width: 320px) and (max-width: 570px) {
    padding: 15px 20px;
  }
`;

export const PictureDiv = styled.div`
  margin-top: 150px;
  text-align: center;
  position: relative;

  > svg {
    animation: 1s ease-out 0s 1 ${AppearAndRotate};
    width: 550px;
  }

  @media only screen and (min-width: 320px) and (max-width: 570px) {
    margin-top: 0;

    > svg {
      height: 450px;
      width: 90vw;
    }
  }

  @media only screen and (min-width: 571px) and (max-width: 635px) {
    margin-top: 100px;

    > svg {
      height: 550px;
      width: 90vw;
    }
  }
`;
