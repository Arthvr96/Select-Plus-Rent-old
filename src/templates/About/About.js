import React from 'react';
import styled from 'styled-components';
import logo from 'assets/imgaes/HeroSection/logo2.png';
import { aboutInfo as data } from 'data/aboutInfo';
// import gsap from 'gsap';

const AboutWrapper = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.tertiary};
`;

const Header = styled.h3`
  margin-left: 1rem;
  padding-top: 1rem;
  font-size: ${({ theme }) => theme.size.mobile.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.m};
  color: ${({ theme }) => theme.colors.font.secondary};
`;

const Logo = styled.img`
  width: 45%;
  margin: 1rem 0 1rem 0.5rem;
`;

const Paragraph = styled.p`
  span {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  margin: 0 2rem 1rem 1rem;
  font-size: ${({ theme }) => theme.size.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: ${({ theme }) => theme.lineHeight.s};
  color: ${({ theme }) => theme.colors.font.secondary};
`;

const SocialIcon = styled.img`
  margin-left: 1rem;
`;

const ContactWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  li {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  li .iconWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
  }

  li p {
    margin-left: 1rem;
    font-size: ${({ theme }) => theme.size.mobile.s};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    line-height: ${({ theme }) => theme.lineHeight.s};
    color: ${({ theme }) => theme.colors.font.secondary};
  }
  li h4 {
    margin-left: 1rem;
    font-size: ${({ theme }) => theme.size.mobile.s};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: ${({ theme }) => theme.lineHeight.s};
    color: ${({ theme }) => theme.colors.font.secondary};
  }
`;

const Footer = styled.footer`
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 0;
`;

const FooterContent = styled.p`
  margin-left: 1rem;
  font-size: ${({ theme }) => theme.size.mobile.xs};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: ${({ theme }) => theme.lineHeight.xs};
  color: ${({ theme }) => theme.colors.font.secondary};
`;

const About = () => {
  return (
    <AboutWrapper id="Section3">
      <Header>O nas</Header>
      <Logo src={logo} alt="Select + rent" />
      <Paragraph>
        <span>{data.boldtext}</span>
        {data.paragraphOne}
      </Paragraph>
      <Paragraph>{data.paragraphTwo}</Paragraph>
      <SocialIcon src={data.facebookIcon} alt="facebookIcon" />
      <SocialIcon src={data.instagramIcon} alt="instragramIcon" />
      <Header>Kontakt</Header>
      <ContactWrapper>
        {data.contact.map((item) => (
          <li key={item.title}>
            <div className="iconWrapper">
              <img src={item.icon} alt={item.title} />
            </div>
            <div>
              <h4>{item.title}</h4>
              <p>{item.content}</p>
              <p>{item.contentcd}</p>
            </div>
          </li>
        ))}
      </ContactWrapper>
      <Footer>
        <FooterContent>{data.footer}</FooterContent>
      </Footer>
    </AboutWrapper>
  );
};

export default About;
