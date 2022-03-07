import React from 'react';
import { Link } from 'react-scroll';
import { NavigationLinks as data } from 'data/navigationLinks';
import {
  NavigationSection,
  NavigationList,
  ContactBox,
  AdditionalBgContactBox,
} from './Navigation.style';

const Navigation = ({ isOpen, linkActived }) => {
  return (
    <NavigationSection isOpen={isOpen}>
      <NavigationList>
        {data.map((item, i) => (
          <li key={item}>
            <Link onClick={linkActived} to={`Section${i}`} smooth delay={100} duration={1500}>
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
      <AdditionalBgContactBox />
    </NavigationSection>
  );
};

export default Navigation;
