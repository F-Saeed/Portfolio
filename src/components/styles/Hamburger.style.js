import styled from 'styled-components';

export const MenuIcon = styled.div`
  border: ${({ menustate }) => (menustate ? 'none' : '3px solid #000')};
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 80px;
  min-width: 80px;
  transition: all 0.75s ease-in-out;
`;

export const MenuDash = styled.div`
  background-color: ${({ menustate }) => (menustate ? 'transparent' : '#000')};
  border-radius: 5px;
  height: 6px;
  width: 50px;
  transition: all 0.5s ease-in-out;
  transform: ${({ menustate }) => (menustate ? 'translateX(-50%)' : 'none')};
  &::before,
  &::after {
    content: ' ';
    position: absolute;
    background-color: #000;
    border-radius: 5px;
    height: 6px;
    width: 50px;
    transition: all 0.5s ease-in-out;
  }

  &::before {
    transform: ${({ menustate }) =>
      menustate
        ? 'rotate(45deg) translate(17.5px, -17.5px)'
        : 'translateY(-16px)'};
  }

  &::after {
    transform: ${({ menustate }) =>
      menustate
        ? 'rotate(-45deg) translate(17.5px, 17.5px)'
        : 'translateY(16px)'};
  }
`;
