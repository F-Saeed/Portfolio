import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const HiddenThenShow = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const hideAndShow = css`
  @media only screen and (min-width: 320px) and (max-width: 1024px) {
    display: ${({ menustate }) => (menustate ? 'flex' : 'none')};
  }
`;

export const Navbar = styled.nav`
  animation: 2s ease-out ${HiddenThenShow};
  background-color: #f9f9fc;
  display: flex;
  flex-wrap: wrap;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  height: 100px;
  justify-content: center;
  position: absolute;
  left: 0;
  z-index: 2;
  width: min(100vw, 100%);

  @media only screen and (min-width: 320px) and (max-width: 1024px) {
    animation: 0.75s ease-out ${HiddenThenShow};
    height: ${({ menustate }) => (menustate ? '425px' : '100px')};
    padding-bottom: ${({ menustate }) => (menustate ? '30px' : 'none')};
  }
`;

export const NavItems = styled.div`
  background-color: #f9f9fc;
  font-family: 'Poppins Regular';
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  width: min(100vw, 1440px);

  @media only screen and (min-width: 320px) and (max-width: 1024px) {
    padding: 0;
    flex-direction: column;
    justify-content: center;

    > div {
      display: flex;
      align-self: ${({ menustate }) => (menustate ? 'flex-end' : 'none')};
    }
  }
`;

export const NavLogoTitle = styled(Link)`
  color: #dc2460;
  font-family: 'Poppins SemiBold';
  font-size: 1.25rem;
  text-decoration: none;

  ${hideAndShow}
`;

export const NavLogo = styled.span`
  background-color: #dc2460;
  border-radius: 50%;
  color: #fff;
  font-size: 1rem;
  margin-right: 7px;
  padding: 6.25px 14px;
`;

export const NavLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  list-style-type: none;
  margin: 0;
  width: 500px;

  > li {
    display: inline;
  }

  ${hideAndShow}

  @media only screen and (min-width: 320px) and (max-width: 1024px) {
    flex-direction: column;
    width: 100vw;
  }
`;

export const NavLink = styled(Link)`
  color: #000;
  font-size: 1rem;
  text-decoration: none;
`;

export const NavButton = styled.a`
  background-color: #ea2767;
  border-radius: 30px;
  color: #fff;
  display: flex;
  font-family: 'Poppins Medium';
  padding: 10px 20px;
  text-decoration: none;

  > svg {
    margin-left: 10px;
    height: 22px;
    width: 22px;
  }

  ${hideAndShow}
`;
