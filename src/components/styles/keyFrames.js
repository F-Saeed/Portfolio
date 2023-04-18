import { keyframes } from 'styled-components';

export const slideInFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const slideInFromCenter = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideInFromRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AppearAndRotate = keyframes`
  0% {
    opacity: 0.2;
    transform: rotate(300deg);
  }
  100% {
    opacity: 1;
    transform: rotate(360deg);
  }
`;

export const slideInAndOverShoot = keyframes`
  0% {
    opacity: 0.2;
    transform: translateX(100%);
  }
  75%{
    opacity: 1;
    transform: translateX(-5%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Home
export const NameTransition = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  50%{    
    opacity: 0;
    transform: translateX(-100%);
  }
  90%{
    opacity: 1;
    transform: translateX(10%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const TitleTransition = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  30%{
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Skills
export const SlideInFromTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const exportVariable = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;
