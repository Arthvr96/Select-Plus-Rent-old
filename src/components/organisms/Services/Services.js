import React from 'react';
import car from 'assets/imgaes/Services/car.svg';
import limusine from 'assets/imgaes/Services/limusine.svg';
import { Wrapper, Header, Paragraph, ServicesWrapper, ServicesOption } from './Services.style';

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
