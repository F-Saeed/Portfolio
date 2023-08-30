import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const HiddenThenShow = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const FooterStyled = styled.div`
  animation: 2s ease-out ${HiddenThenShow};
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: #333333;
  display: flex;
  justify-content: center;
  min-width: 100vw;
`;

export const FooterItems = styled.div`
  color: #fff;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  place-items: center;
  min-height: 400px;
  max-width: min(90vw, 1440px);

  @media only screen and (min-width: 320px) and (max-width: 570px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
`;

export const FooterLogoDiv = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;

  @media only screen and (min-width: 320px) and (max-width: 570px) {
    grid-column: none;
    grid-row: 1 / 2;
    margin-top: 30px;
    text-align: center;
  }
`;

export const FooterLogoTitle = styled(Link)`
  color: #fff;
  font-family: "Poppins SemiBold";
  font-size: 1.25rem;
  text-decoration: none;
`;

export const FooterLogo = styled.span`
  background-color: #fff;
  border-radius: 50%;
  color: #000;
  font-size: 1rem;
  margin-right: 7px;
  padding: 6.25px 14px;
`;

export const FooterTagline = styled.p`
  font-family: "Poppins Regular";
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.04em;
  padding-top: 30px;
  width: 330px;

  @media only screen and (min-width: 320px) and (max-width: 570px) {
    font-size: 15px;
    width: 73vw;
  }

  @media only screen and (min-width: 570px) and (max-width: 700px) {
    width: 40vw;
  }
`;

export const FooterInfo = styled.div`
  display: grid;
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  font-family: "Poppins Regular";

  @media only screen and (min-width: 320px) and (max-width: 570px) {
    grid-column: none;
    grid-row: 2 / 3;
    padding-top: 30px;
    padding-bottom: 20px;
  }
`;

export const InfoComponent = styled.div`
  display: flex;
  height: 40px;

  > svg {
    height: 24px;
    width: 24px;
    margin-right: 20px;
  }
`;

export const SocialList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  > svg {
    cursor: pointer;
    height: 24px;
    width: 24px;
  }
`;

export const SocialLink = styled.a`
  > svg {
    color: #fff;
    cursor: pointer;
    height: 24px;
    width: 24px;
  }

  & > svg:hover {
    color: #0a66c2;
    transform: scale(120%);
    transition: transform 0.5s ease-in-out, color 0.5s ease-in-out;
  }
`;

export const Copyright = styled.p`
  border-top: 1px solid #404040;
  color: rgba(255, 255, 255, 0.6);
  font-family: "Poppins Medium";
  font-size: 16px;
  grid-column: 1 / 4;
  grid-row: 3 / 4;
  line-height: 24px;
  padding-top: 50px;
  text-align: center;
  width: calc(0.85 * min(1440px, 100vw));

  @media (min-width: 320px) and (max-width: 570px) {
    grid-column: none;
    grid-row: 3 / 4;
    padding-top: 40px;
    width: calc(0.65 * min(1440px, 100vw));
  }
`;
