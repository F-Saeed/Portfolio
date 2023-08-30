import styled from "styled-components";
import { SlideInFromTop, slideInFromCenter } from "./keyFrames";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 0px;
  padding-top: 100px;
  min-height: 100vh;
  min-width: 100vw;
`;

export const Section = styled.section`
  display: grid;
  place-items: center;
  margin: 75px 0;
  width: min(100vw, 1440px);

  @media only screen and (min-width: 320px) and (max-width: 570px) {
    margin: 50px 0;
  }
`;

// export const TitleDiv = styled.div``;

export const Heading = styled.h1`
  animation: 1.5s ease-out 0s 1 ${SlideInFromTop};
  font-family: "Poppins SemiBold";
  font-size: 44px;
  line-height: 66px;
  margin-bottom: 123px;
  text-align: center;
  width: 500px;

  @media only screen and (min-width: 320px) and (max-width: 1200px) {
    animation: 1.25s ease-out 0s 1 ${slideInFromCenter};
    font-size: 36px;
    margin-bottom: 70px;
    width: 90vw;
  }
`;

/* export const TitleTagline = styled.p`
  color: rgba(18, 18, 18, 0.7);
  font-family: 'Poppins Regular';
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.04em;
`; */

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  place-items: center;

  @media only screen and (min-width: 320px) and (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  @media only screen and (min-width: 801px) and (max-width: 1240px) {
    grid-template-columns: 1fr 1fr;
  }
`;
