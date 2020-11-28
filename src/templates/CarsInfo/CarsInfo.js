import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PopUpReservation from 'components/PopUpReservation/PopUpReservation';
import { carsInfo as data } from 'data/carsInfo';

const CarsInfoSection = styled.section`
  position: relative;
  z-index: 45;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.lightergrey};
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
  display: flex;
  justify-content: space-between;
  margin: 0 2rem 2rem 2rem;
`;

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 24%;
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
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [getPriceButton, setGetPriceButton] = useState();
  const deviceChecker = () => {
    if (window.innerWidth > 1100) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };
  const getPopUpReservation = (e) => {
    setIsVisible(true);
    window.scrollTo(0, window.scrollY + 2);
    document.body.classList.add('disableScroll');
    setGetPriceButton(e.target.id);
  };

  const cancelPopUpReservation = () => {
    setIsVisible(false);
    document.body.classList.remove('disableScroll');
  };

  useEffect(() => {
    deviceChecker();
  });

  return (
    <CarsInfoSection id="Section1">
      <Header>{header}</Header>
      <Paragraph>{paragraph}</Paragraph>
      <CarsWrapper>
        {data.map(({ img, imgm, name, description, techInfo, priceingInfo }) => (
          <Car key={name}>
            <img alt={name} src={isDesktop ? img : imgm} />
            <CarName>{name}</CarName>
            <CarDescription>{description}</CarDescription>
            <CarTechInfo>
              {techInfo.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </CarTechInfo>
            <PriceingWrapper className="priceWrapper">
              {priceingInfo.map(({ numberOfCar, priceName, price, hide }, i) => (
                <PriceBox
                  id={`carN${numberOfCar}priceN${i}`}
                  onClick={getPopUpReservation}
                  isHide={hide}
                  key={`pricebox${i}`}
                >
                  <h4 id={`carN${numberOfCar}priceN${i}`}>{priceName}</h4>
                  <h3 id={`carN${numberOfCar}priceN${i}`}>{price}</h3>
                </PriceBox>
              ))}
            </PriceingWrapper>
          </Car>
        ))}
      </CarsWrapper>
      <PopUpReservation
        cancelPopUpReservation={cancelPopUpReservation}
        isVisible={isVisible}
        dataValue={getPriceButton}
      />
    </CarsInfoSection>
  );
};

export default CarsInfo;
