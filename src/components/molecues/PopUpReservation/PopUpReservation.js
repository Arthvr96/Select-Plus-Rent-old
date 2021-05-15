import React, { useEffect, useState } from 'react';

import gsap from 'gsap';
import SelectOptions from 'components/atoms/SelectOptions/SelectOptions';
import {
  FilterBox,
  PopUpReservationWrapper,
  Content,
  Header,
  SubTitle,
  Img,
  ButtonsWrapper,
  Button,
} from './PopUpReservation.style';

const data = [];

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
