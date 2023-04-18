import { useState } from 'react';
import Hamburger from './Hamburger';
import * as S from './styles/Header.style';
import { EnvelopeFill as Envelope } from '@styled-icons/bootstrap/EnvelopeFill';

const Header = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <S.Navbar menustate={menuState ? 1 : 0}>
      <S.NavItems menustate={menuState ? 1 : 0}>
        <Hamburger menustate={menuState} setMenuState={setMenuState} />
        <S.NavLogoTitle
          to='/'
          menustate={menuState ? 1 : 0}
          onClick={() => setMenuState(!menuState)}
        >
          <S.NavLogo>F</S.NavLogo>Faran Saeed
        </S.NavLogoTitle>
        <S.NavLinksList menustate={menuState ? 1 : 0}>
          {/* <li>
            <S.NavLink
              to='/Portfolio/about-me'
              onClick={() => setMenuState(!menuState)}
            >
              ABOUT ME
            </S.NavLink>
          </li> */}
          <li>
            <S.NavLink to='/skills' onClick={() => setMenuState(!menuState)}>
              SKILLS
            </S.NavLink>
          </li>
          <li>
            <S.NavLink to='/projects' onClick={() => setMenuState(!menuState)}>
              PROJECTS
            </S.NavLink>
          </li>
          <li>
            <S.NavLink to='/contact' onClick={() => setMenuState(!menuState)}>
              CONTACT
            </S.NavLink>
          </li>
        </S.NavLinksList>
        <S.NavButton
          menustate={menuState ? 1 : 0}
          href={'mailto: faransaeed360@yahoo.com'}
        >
          HIRE ME <Envelope />
        </S.NavButton>
      </S.NavItems>
    </S.Navbar>
  );
};

export default Header;
