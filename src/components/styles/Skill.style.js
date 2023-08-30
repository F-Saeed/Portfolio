import styled from "styled-components";
import {
  slideInFromLeft,
  slideInFromCenter,
  slideInFromRight,
} from "./keyFrames";

// Skills
const StyledSkill = styled.figure`
  animation: 1.5s ease-out 0s 1
    ${(props) =>
      props.position === "center"
        ? slideInFromCenter
        : props.position === "left"
        ? slideInFromLeft
        : slideInFromRight};
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  min-height: 286px;
  padding: 0 10px;
  width: 376px;
  text-align: center;

  > svg {
    color: #5e3bee;
    margin: 80px 0 25px 0;
    height: 70px;
    width: 70px;
  }

  > h3 {
    font-family: "Poppins Medium", monospace;
    font-size: 30px;
  }

  @media only screen and (min-width: 320px) and (max-width: 571px) {
    min-height: 250px;
    padding: 0 7.5px;
    width: 90vw;

    > svg {
      margin: 65px 0 25px 0;
    }

    > h3 {
      line-height: 24px;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 1240px) {
    animation: 1.25s ease-out 0s 1 ${slideInFromCenter};
  }
`;

export default StyledSkill;
