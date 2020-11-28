import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import SelectOptions from 'components/SelectOptions/SelectOptions';
import { zindex } from 'utilites/zindex';
import { carsInfo as data } from 'data/carsInfo';

const PopUpReservationWrapper = styled.div`
  visibility: hidden;
  opacity: 0;
  position: fixed;
  z-index: ${zindex.lvl9};
  top: 50vh;
  left: 50vw;
  transform: translateY(-50%) translateX(-50%);
  width: 85vw;
  height: 85vh;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 0px 30px 9px rgba(0, 0, 0, 0.8);
`;

const FilterBox = styled.div`
  visibility: hidden;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${zindex.lvl8};
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Header = styled.h2`
  margin-top: 2rem;
  font-size: ${({ theme }) => theme.size.mobile.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.l};
  color: ${({ theme }) => theme.colors.font.primary};
`;

const SubTitle = styled.h4`
  font-size: ${({ theme }) => theme.size.mobile.m};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.m};
  color: ${({ theme }) => theme.colors.font.primary};
`;

const Img = styled.img`
  width: 80vw;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 85%;
  bottom: 2rem;

  .inaccessible {
    filter: grayscale(100%);
    cursor: default;
  }
`;

const Button = styled.button`
  width: 45%;
  height: 3rem;
  border: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.font.secondary};
  cursor: pointer;
`;

const PopUpReservation = ({ isVisible, cancelPopUpReservation, dataValue }) => {
  const [carNumber, setCarNumber] = useState(0);
  const [priceNumber, setPriceNumber] = useState(0);

  const popUpAnimations = () => {
    const popUp = document.getElementById('popUp');
    const filterBox = document.getElementById('filterBox');
    const tl = gsap.timeline({ defaults: { ease: 'Power3.inOut' } });
    if (isVisible) {
      tl.to(filterBox, { duration: 0.25, autoAlpha: 1 })
        .fromTo(popUp, { autoAlpha: 0 }, { duration: 0.25, autoAlpha: 1 }, '-=0.15')
        .fromTo(popUp, { scale: 0.6 }, { duration: 0.25, scale: 1 }, '-=0.25');
    } else if (!isVisible) {
      tl.to(popUp, { duration: 0.25, autoAlpha: 0 })
        .to(popUp, { duration: 0.25, scale: 0.6 }, '-=0.25')
        .to(filterBox, { duration: 0.25, autoAlpha: 0 }, '-=0.25');
    }
  };

  const getDataValue = () => {
    const carNumber1 = parseInt(dataValue.charAt(4), 10);
    const carNumber2 = parseInt(dataValue.charAt(5), 10);

    setPriceNumber(parseInt(dataValue.charAt(dataValue.length - 1), 10));

    if (dataValue.charAt(5) === 'p') {
      setCarNumber(carNumber1);
    } else {
      setCarNumber(parseInt(`${carNumber1}${carNumber2}`, 10));
    }
  };

  useEffect(() => {
    popUpAnimations();
    if (isVisible) {
      getDataValue();
    }
  });

  return (
    <>
      <FilterBox id="filterBox" />
      <PopUpReservationWrapper id="popUp" isVisible={isVisible}>
        <Content>
          <Header>Rezerwacja auta</Header>
          <SubTitle>{data[carNumber].name}</SubTitle>
          <Img src={data[carNumber].imgm} />
          <SelectOptions carNumber={carNumber} priceNumber={priceNumber} />
          <ButtonsWrapper>
            <Button className="inaccessible">Rezerwuj</Button>
            <Button onClick={cancelPopUpReservation}>Anuluj</Button>
          </ButtonsWrapper>
        </Content>
      </PopUpReservationWrapper>
    </>
  );
};

export default PopUpReservation;
