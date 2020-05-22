import React from 'react';
import styled from 'styled-components';
import { zindex } from 'utilites/zindex';
import { NavigationLinks as data } from 'data/navigationLinks';
import { Link } from 'react-scroll';

const NavigationSection = styled.nav`
  display: block;
  position: fixed;
  z-index: ${zindex.lvl2};
  top: 0;
  right: -100vw;
  width: 100vw;
  height: 100vh;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(-100vw);' : 'translateX(0);')};
  background-color: ${({ theme }) => theme.colors.tertiary};
  transition: transform 1s ease-in-out;
`;

const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  list-style: none;

  li {
    margin-bottom: 4rem;
  }

  li a {
    font-size: ${({ theme }) => theme.size.mobile.m};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.font.secondary};
    text-decoration: none;
    text-transform: uppercase;
  }
`;

const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #0c212a;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0%);' : 'translateY(100%);')};
  transition: transform 0.8s 0.8s ease-out;
  p {
    font-size: ${({ theme }) => theme.size.mobile.s};
    line-height: ${({ theme }) => theme.lineHeight.s};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    color: ${({ theme }) => theme.colors.font.secondary};
  }

  p span {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

const Navigation = ({ isOpen, linkActived }) => {
  return (
    <NavigationSection isOpen={isOpen}>
      <NavigationList>
        {data.map((item, i) => (
          <li key={item}>
            <Link onClick={linkActived} to={`Section${i}`} smooth delay={1000} duration={2500}>
              {item}
            </Link>
          </li>
        ))}
      </NavigationList>
      <ContactBox isOpen={isOpen}>
        <p>
          <span>Telefon:</span> 690-000-213
        </p>
        <p>
          <span>Mail:</span> kontakt@selectplusrent.pl
        </p>
      </ContactBox>
    </NavigationSection>
  );
};

export default Navigation;
