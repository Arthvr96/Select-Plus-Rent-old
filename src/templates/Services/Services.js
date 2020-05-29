import React from 'react';
import styled from 'styled-components';
import car from 'assets/imgaes/Services/car.svg';
import limusine from 'assets/imgaes/Services/limusine.svg';
// import gsap from 'gsap';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1000;
  width: 100%;
  background: ${({ theme }) => theme.colors.lightergrey};
`;

const Header = styled.h2`
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.size.mobile.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.m};
  color: ${({ theme }) => theme.colors.font.primary};
`;

const Paragraph = styled.p`
  margin-top: 2rem;
  margin-bottom: 3rem;
  font-size: ${({ theme }) => theme.size.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: ${({ theme }) => theme.lineHeight.s};
  color: ${({ theme }) => theme.colors.font.primary};
`;

const ServicesWrapper = styled.section`
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.colors.lightergrey};
  margin-bottom: 2rem;
  div:last-of-type {
    margin-right: 2rem;
  }
`;

const ServicesOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid #ededed;
  margin: 2rem 0 2rem 2rem;
  padding: 3rem 0;
`;

const servicesInfo = [
  { description: 'Auto z kierowcą', img: car },
  { description: 'Auto do ślubu', img: limusine },
];

const Services = () => {
  return (
    <Wrapper id="Section2">
      <Header>Usługi dodatkowe</Header>
      <Paragraph>Sprawdz co jeszcze możemy Ci zaoferować!</Paragraph>
      <ServicesWrapper>
        {servicesInfo.map(({ description, img }) => (
          <ServicesOption key={description}>
            <img alt={description} src={img} />
            <p>{description}</p>
          </ServicesOption>
        ))}
      </ServicesWrapper>
    </Wrapper>
  );
};

export default Services;
