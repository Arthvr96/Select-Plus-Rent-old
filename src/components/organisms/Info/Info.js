import React, { useEffect, useState } from 'react';
import { FixedBackground, InfoWrapper, Header, Paragraph, InfoBox } from './Info.style';

const infoData = ['Kaucji', 'Za dostawę auta*', 'Odwołanie rezerwacji', 'Minimalny wiek'];

const Info = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showFixedBg = () => {
    if (window.scrollY > window.innerHeight) {
      if (!isVisible) {
        setIsVisible(true);
      }
    } else if (isVisible) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', showFixedBg, true);
  });

  return (
    <>
      <FixedBackground isVisible={isVisible} />
      <InfoWrapper>
        <div>
          <Header>Informacje</Header>
          <Paragraph>* - na terenie Gdańska</Paragraph>
        </div>
        <div className="grid">
          {infoData.map((item) => (
            <InfoBox key={item}>
              <h4>0 zł</h4>
              <h3>{item}</h3>
            </InfoBox>
          ))}
        </div>
      </InfoWrapper>
    </>
  );
};

export default Info;
