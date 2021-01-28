import React from 'react';
import styled from 'styled-components';
import media from 'utilites/media';
import { guarantees as data } from 'data/guarantees';

const WhyusWrapper = styled.section`
  position: relative;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: calc(50vh + 5.6rem);
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px -10px 25px 0px rgba(0, 0, 0, 0.75);

  ${media.desktop`
    margin-top: calc(100vh + 5.6rem);
  `}
`;

const Header = styled.h3`
  margin-top: 3rem;
  font-size: ${({ theme }) => theme.size.mobile.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.m};
  color: ${({ theme }) => theme.colors.font.primary};
  text-align: center;

  ${media.desktop`
    font-size: ${({ theme }) => theme.size.desktop.xl};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: ${({ theme }) => theme.lineHeight.xxl};
  `}
`;

const Paragraph = styled.p`
  width: 80%;
  margin: 1.5rem 0 3rem 0;
  font-size: ${({ theme }) => theme.size.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: ${({ theme }) => theme.lineHeight.s};
  color: ${({ theme }) => theme.colors.font.primary};
  text-align: center;

  ${media.desktop`
    font-size: ${({ theme }) => theme.size.desktop.m};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    line-height: ${({ theme }) => theme.lineHeight.s};
  `}
`;

const Wrapperguarantees = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;

  .guaratnee:last-of-type {
    margin-bottom: 2.4rem;
  }

  ${media.desktop`
    display: grid;
    max-width: 1500px;
    height: 100%;
    margin-bottom: 4rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 3rem 3rem;
    grid-template-areas:
    ". . ."
    ". . .";

    .guaratnee:last-of-type {
    margin-bottom: 0;
  }
  `}
`;

const Guarantee = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  padding: 2rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.lightgrey};

  div {
    display: flex;
    justify-content: center;
    width: 6.4rem;
  }

  ${media.desktop`
    flex-direction: column;
    min-height: 23rem;
    margin-bottom: 0rem;
  `}
`;

const GuaranteeHeader = styled.h4`
  max-width: 95%;
  margin-left: 2rem;
  font-size: ${({ theme }) => theme.size.mobile.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.m};
  color: ${({ theme }) => theme.colors.font.primary};

  ${media.desktop`
    margin: 1.5rem 0 1.5rem 0;
    font-size: ${({ theme }) => theme.size.desktop.m};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: ${({ theme }) => theme.lineHeight.m};
  `}
`;

const GuaranteeParagraph = styled.p`
  display: none;

  ${media.desktop`
    display: block;
    width: 80%;
    font-size: ${({ theme }) => theme.size.desktop.s};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    line-height: ${({ theme }) => theme.lineHeight.s};
    color: ${({ theme }) => theme.colors.font.primary};
    text-align: center;
  `}
`;

const headerOne = 'Dlaczego warto wybrać nas ?';
const paragraphOne = 'Postaw na sprawdzoną firmę z indywidualnym podejściem do klienta.';

const Whyus = () => {
  return (
    <WhyusWrapper className="whyusSection">
      <Header>{headerOne}</Header>
      <Paragraph>{paragraphOne}</Paragraph>
      <Wrapperguarantees>
        {data.map(({ header, img, paragraph }) => (
          <Guarantee className="guaratnee" key={header}>
            <div>
              <img alt={header} src={img} />
            </div>
            <GuaranteeHeader>{header}</GuaranteeHeader>
            <GuaranteeParagraph>{paragraph}</GuaranteeParagraph>
          </Guarantee>
        ))}
      </Wrapperguarantees>
    </WhyusWrapper>
  );
};

export default Whyus;
