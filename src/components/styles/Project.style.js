import styled from "styled-components";
import {
  slideInFromLeft,
  slideInFromCenter,
  slideInFromRight,
} from "./keyFrames";

export const StyledProject = styled.figure`
  animation: 1.5s ease-out 0s 1
    ${(props) =>
      props.position === "center"
        ? slideInFromCenter
        : props.position === "left"
        ? slideInFromLeft
        : slideInFromRight};
  border-radius: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  height: 240px;
  text-align: center;
  width: 384px;

  img {
    border-radius: 1.2rem;
    height: 240px;
    width: 384px;
    object-fit: cover;
    position: relative;
    left: 0;
  }

  @media only screen and (min-width: 320px) and (max-width: 570px) {
    height: calc(240px * (90vw / 384px));
    width: 90vw;

    img {
      height: calc(240px * (90vw / 384px));
      width: 90vw;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 1240px) {
    animation: 1.25s ease-out 0s 1 ${slideInFromCenter};
  }
`;

export const ProjectCaption = styled.figcaption`
  background-color: rgb(52, 56, 58);
  border-radius: 1.2rem;
  opacity: 0;
  height: 100%;
  width: 100%;
  position: relative;
  bottom: 101.75%;
  transition: 0.45s ease-in-out;

  &:hover {
    opacity: 1;
    transition: 0.45s ease-in-out;
  }

  > h2 {
    color: rgb(220, 218, 215);
    font-family: "Poppins SemiBold", monospace;
    padding: 35px 0 15px 0;
  }

  @media only screen and (min-width: 320px) and (max-width: 1100px) {
    background-color: rgb(52, 56, 58, 0.8);
    opacity: 1;
  }
`;

export const ProjectLink = styled.a`
  background-color: transparent;
  border-radius: 80px;
  border: solid 2px rgb(116, 60, 189);
  color: rgb(220, 218, 215);
  cursor: pointer;
  display: block;
  font-family: "Poppins Medium", monospace;
  font-size: 16px;
  margin: 0 110px 20px 110px;
  padding: 0.5rem 1.2rem;
  text-decoration: none;

  &:hover {
    background-color: rgb(116, 60, 189);
    transform: scale(115%);
    transition: transform 0.3s linear, background-color 0.3s linear;
  }

  @media only screen and (min-width: 320px) and (max-width: 570px) {
    margin: 0 70px 20px 70px;
  }
`;

// export const LeftProject = styled(Project, ProjectCaption)`
//   animation: 1.25s ease-out 0s 1 ${slideInFromLeft};

//   @media only screen and (min-width: 320px) and (max-width: 1240px) {
//     animation: 1.25s ease-out 0s 1 ${slideInFromCenter};
//   }
// `;

// export const CenterProject = styled(Project, ProjectCaption)`
//   animation: 1.5s ease-out 0s 1 ${slideInFromCenter};

//   @media only screen and (min-width: 320px) and (max-width: 1240px) {
//     animation: 1.25s ease-out 0s 1 ${slideInFromCenter};
//   }
// `;

// export const RightProject = styled(Project, ProjectCaption)`
//   animation: 1.25s ease-out 0s 1 ${slideInFromRight};

//   @media only screen and (min-width: 320px) and (max-width: 1240px) {
//     animation: 1.25s ease-out 0s 1 ${slideInFromCenter};
//   }
// `;
