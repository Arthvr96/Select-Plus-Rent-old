import React from 'react';
import logo from 'assets/imgaes/HeroSection/logo2.png';
import { aboutInfo as data } from 'data/aboutInfo';
import {
  AboutWrapper,
  Header,
  Logo,
  Paragraph,
  SocialIcon,
  ContactWrapper,
  Footer,
  FooterContent,
} from './About.style';

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
        {data.contact.map(({ title, icon, content, contentcd }) => (
          <li key={title}>
            <div className="iconWrapper">
              <img src={icon} alt={title} />
            </div>
            <div>
              <h4>{title}</h4>
              <p>{content}</p>
              <p>{contentcd}</p>
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
