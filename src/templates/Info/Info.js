import React from 'react';
import styled from 'styled-components';
import fixedBg from 'assets/imgaes/InfoAndAbout/funfact-bg.jpg';

const FixedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  display: block;
  width: 100%;
  height: 100vh;
  background: url(${fixedBg}) no-repeat 40% 10%;
  background-size: auto 100%;
`;

const InfoWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(17, 46, 59, 0.7);

  div.grid {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: grid;
    margin: 2rem 1rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
`;

const Header = styled.h3`
  margin-top: 2rem;
  font-size: ${({ theme }) => theme.size.mobile.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.l};
  color: ${({ theme }) => theme.colors.font.secondary};
`;

const Paragraph = styled.h3`
  font-size: ${({ theme }) => theme.size.mobile.xs};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: ${({ theme }) => theme.lineHeight.xs};
  color: ${({ theme }) => theme.colors.font.secondary};
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem 0;
  h4 {
    font-size: ${({ theme }) => theme.size.mobile.l};
    font-weight: ${({ theme }) => theme.fontWeight.heavy};
    line-height: ${({ theme }) => theme.lineHeight.l};
    color: ${({ theme }) => theme.colors.font.secondary};
    text-align: center;
  }
  h3 {
    width: 90%;
    font-size: ${({ theme }) => theme.size.mobile.s};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    line-height: ${({ theme }) => theme.lineHeight.s};
    color: ${({ theme }) => theme.colors.font.secondary};
    text-align: center;
    text-transform: uppercase;
  }
`;

const infoData = ['Kaucji', 'Za dostawę auta*', 'Odwołanie rezerwacji', 'Minimalny wiek'];

const Info = () => {
  return (
    <>
      <FixedBackground />
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
