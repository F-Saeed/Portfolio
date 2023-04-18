import * as S from './styles/Footer.style';
import { PhoneFill as Phone } from '@styled-icons/bootstrap/PhoneFill';
import { EnvelopeFill as Envelope } from '@styled-icons/bootstrap/EnvelopeFill';
import { Github } from '@styled-icons/bootstrap/Github';
import { Linkedin } from '@styled-icons/bootstrap/Linkedin';

const Footer = () => {
  return (
    <S.FooterStyled>
      <S.FooterItems>
        <S.FooterLogoDiv>
          <S.FooterLogoTitle to='/'>
            <S.FooterLogo>F</S.FooterLogo>
            Faran Saeed
          </S.FooterLogoTitle>
          <S.FooterTagline>
            A passionate web developer, striving to be better one step at a time
          </S.FooterTagline>
        </S.FooterLogoDiv>
        <S.FooterInfo>
          <S.InfoComponent>
            <Envelope />
            faransaeed360@yahoo.com
          </S.InfoComponent>
          <S.InfoComponent>
            <Phone />
            (+92) 303 0045195
          </S.InfoComponent>
          <S.SocialList>
            <S.SocialLink href='https://github.com/f-saeed' target='_blank'>
              <Github />
            </S.SocialLink>
            <S.SocialLink
              href='https://www.linkedin.com/in/faran-saeed/'
              target='_blank'
            >
              <Linkedin />
            </S.SocialLink>
          </S.SocialList>
        </S.FooterInfo>
        <S.Copyright>Faran Saeed © All Right Reserved</S.Copyright>
      </S.FooterItems>
    </S.FooterStyled>
  );
};

export default Footer;
