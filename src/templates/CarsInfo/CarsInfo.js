import React from 'react';
import styled from 'styled-components';
import { carsInfo as data } from 'data/carsInfo';

const CarsInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  transform: translateY(-3px);
  background: ${({ theme }) => theme.colors.primary};
`;

const Header = styled.h3`
  padding-top: 3rem;
  font-size: ${({ theme }) => theme.size.mobile.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.m};
  color: ${({ theme }) => theme.colors.font.primary};
  text-align: center;
`;

const Paragraph = styled.p`
  width: 80%;
  margin: 1.5rem 0 3rem 0;
  font-size: ${({ theme }) => theme.size.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: ${({ theme }) => theme.lineHeight.s};
  color: ${({ theme }) => theme.colors.font.primary};
  text-align: center;
`;

const CarsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.lightergrey};
`;

const Car = styled.div`
  width: 95%;
  margin-bottom: 3rem;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 0px 12px -1px rgba(0, 0, 0, 0.25);
  img {
    width: 100%;
  }
`;

const CarName = styled.h3`
  margin: 2rem 0 1.1rem 2rem;
  font-size: ${({ theme }) => theme.size.mobile.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.m};
  color: ${({ theme }) => theme.colors.font.primary};
`;

const CarDescription = styled.p`
  margin: 0 0 3rem 2rem;
  font-size: ${({ theme }) => theme.size.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: ${({ theme }) => theme.lineHeight.s};
  color: ${({ theme }) => theme.colors.font.primary};
`;

const CarTechInfo = styled.ul`
  margin: 0 0 3.2rem 4rem;
  color: ${({ theme }) => theme.colors.secondary};
  li {
    font-size: ${({ theme }) => theme.size.mobile.s};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    line-height: ${({ theme }) => theme.lineHeight.s};
  }
  li span {
    color: ${({ theme }) => theme.colors.font.primary};
  }
`;

const PriceingWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  margin: 0 2rem 2rem 2rem;
`;

const PriceBox = styled.div`
  display: flex;
  width: 24%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.1rem 1rem;
  background: ${({ theme, isHide }) => (isHide ? 'transparent' : theme.colors.secondary)};

  h4 {
    font-size: ${({ theme }) => theme.size.mobile.xs};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    line-height: ${({ theme }) => theme.lineHeight.xs};
    color: ${({ theme }) => theme.colors.font.secondary};
  }
  h3 {
    font-size: ${({ theme }) => theme.size.mobile.s};
    font-weight: ${({ theme }) => theme.fontWeight.heavy};
    line-height: ${({ theme }) => theme.lineHeight.s};
    color: ${({ theme }) => theme.colors.font.secondary};
  }
`;

const header = 'Flota pojazdów Select + Rent';
const paragraph = 'Zrealizuj swoje marzenia z naszą pomocą !';

const CarsInfo = () => {
  return (
    <CarsInfoSection>
      <Header>{header}</Header>
      <Paragraph>{paragraph}</Paragraph>
      <CarsWrapper>
        {data.map(({ img, name, description, techInfo, priceingInfo }) => (
          <Car key={name}>
            <img alt={name} src={img} />
            <CarName>{name}</CarName>
            <CarDescription>{description}</CarDescription>
            <CarTechInfo>
              {techInfo.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </CarTechInfo>
            <PriceingWrapper>
              {priceingInfo.map(({ priceName, price, hide }, i) => (
                <PriceBox isHide={hide} key={`pricebox${i}`}>
                  <h4>{priceName}</h4>
                  <h3>{price}</h3>
                </PriceBox>
              ))}
            </PriceingWrapper>
          </Car>
        ))}
      </CarsWrapper>
    </CarsInfoSection>
  );
};

export default CarsInfo;
