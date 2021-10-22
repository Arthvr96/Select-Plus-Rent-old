import React from 'react';
import { useQuery, gql } from '@apollo/client';
import {
  CarsInfoSection,
  Header,
  Paragraph,
  CarsWrapper,
  Car,
  CarName,
  CarDescription,
  CarTechInfo,
  PriceingWrapper,
  PriceBox,
} from './CarsInfo.style';

const query = gql`
  {
    allCars {
      id
      name
      description
      featureList
      prices
      photoMobile {
        url
        alt
      }
    }
  }
`;

const header = 'Flota pojazdów Select + Rent';
const paragraph = 'Zrealizuj swoje marzenia z naszą pomocą !';
const pricesNames = ['Doba', 'Weekend', 'Tydzień', 'Miesiąc'];

const CarsInfo = () => {
  const { loading, error, data } = useQuery(query);

  return (
    <CarsInfoSection id="Section1">
      <Header>{header}</Header>
      <Paragraph>{paragraph}</Paragraph>
      <CarsWrapper>
        {!loading && !error
          ? data.allCars.map(
              ({ photoMobile: { url, alt }, id, name, description, featureList, prices }) => (
                <Car key={id}>
                  <img alt={alt} src={url} />
                  <CarName>{name}</CarName>
                  <CarDescription>{description}</CarDescription>
                  <CarTechInfo>
                    {featureList.map((item) => (
                      <li key={item}>
                        <span>{item}</span>
                      </li>
                    ))}
                  </CarTechInfo>
                  <PriceingWrapper className="priceWrapper">
                    {prices.map((price, i) => (
                      <PriceBox key={price}>
                        <h3>{pricesNames[i]}</h3>
                        <h4>{price}</h4>
                      </PriceBox>
                    ))}
                  </PriceingWrapper>
                </Car>
              ),
            )
          : !error
          ? 'Loading...'
          : 'Bład cmsa'}
      </CarsWrapper>
    </CarsInfoSection>
  );
};

export default CarsInfo;
