import styled from "styled-components";
import {
  slideInFromLeft,
  slideInFromCenter,
  slideInFromRight,
} from "./keyFrames";

export const ContactForm = styled.form`
  color: #141c3a;
  display: grid;
  font-family: "Poppins Medium", monospace;
  font-size: 1.2rem;
  grid-template-columns: 1fr;
  gap: 20px;
  place-items: center;

  @media only screen and (min-width: 320px) and (max-width: 760px) {
    padding: 15px 0;
    gap: 20px;
  }
`;

export const InputDiv = styled.div`
  > p {
    margin: 0 0 12px 30px;
  }

  > input {
    border: 1px solid #e6ecf8;
    border-radius: 10px;
    font-family: "Poppins Regular", monospace;
    font-size: 1rem;
    margin: 0 30px;
    padding: 20px;
    height: 50px;
    width: 20rem;

    @media only screen and (min-width: 320px) and (max-width: 760px) {
      width: 310px;
    }
  }
`;

export const NameInputDiv = styled(InputDiv)`
  animation: 1.25s ease-out 0s 1 ${slideInFromLeft};

  @media only screen and (min-width: 320px) and (max-width: 760px) {
    grid-column: 1 / 2;
  }
`;

export const EmailInputDiv = styled(InputDiv)`
  animation: 1.25s ease-out 0s 1 ${slideInFromRight};

  @media only screen and (min-width: 320px) and (max-width: 760px) {
    grid-column: 1 / 2;
  }
`;

export const TextAreaDiv = styled.div`
  animation: 1.5s ease-out 0s 1 ${slideInFromCenter};
  border-radius: 20px;
  font-family: "Poppins Regular", monospace;
  grid-column: 1 / 3;
  justify-self: center;
  height: 10rem;

  > p {
    margin-bottom: 12px;
  }

  > textarea {
    border: 1px solid #e6ecf8;
    border-radius: 20px;
    font-size: 1rem;
    padding: 20px;
    height: 150px;
    width: 554px;

    @media only screen and (min-width: 320px) and (max-width: 760px) {
      width: 90vw;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 760px) {
    grid-column: 1 / 2;
  }
`;

export const SubmitButton = styled.button`
  animation: 1.5s ease-out 0s 1 ${slideInFromCenter};
  border: none;
  background-color: #5e3bee;
  border-radius: 40px;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  display: flex;
  grid-column: 1 / 3;
  grid-row: 5 / 6;
  justify-content: center;
  padding: 20px 30px;

  > svg {
    margin-right: 11px;
    height: 21px;
    width: 21px;
  }
`;
