import React from 'react';
import styled from 'styled-components';
import media from 'utilites/media';
import { guarantees as data } from 'data/guarantees';

// import gsap from 'gsap';
const WhyusWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: calc(50vh + 5.6rem);
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px -10px 25px -10px rgba(0, 0, 0, 0.75);

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
`;

const Paragraph = styled.p`
  width: 80%;
  margin: 3rem 0;
  font-size: ${({ theme }) => theme.size.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: ${({ theme }) => theme.lineHeight.s};
  color: ${({ theme }) => theme.colors.font.primary};
  text-align: center;
`;

const Wrapperguarantees = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Guarantee = styled.div`
  margin-bottom: 3rem;
  border: 2px solid ${({ theme }) => theme.colors.lightgrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 34.5rem;
  height: 25rem;

  img {
    margin-top: 3.2rem;
  }
`;

const GuaranteeHeader = styled.h4`
  font-size: ${({ theme }) => theme.size.mobile.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.m};
  color: ${({ theme }) => theme.colors.font.primary};
`;
const GuaranteeParagraph = styled.p`
  width: 80%;
  margin-bottom: 3.2rem;
  font-size: ${({ theme }) => theme.size.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: ${({ theme }) => theme.lineHeight.s};
  color: ${({ theme }) => theme.colors.font.primary};
  text-align: center;
`;

const header = 'Dlaczego warto wybrać nas ?';
const paragraph = 'Postaw na sprawdzoną firmę z indywidualnym podejściem do klienta.';

const Whyus = () => {
  return (
    <WhyusWrapper className="whyusSection">
      <Header>{header}</Header>
      <Paragraph>{paragraph}</Paragraph>
      <Wrapperguarantees>
        {data.map((item) => (
          <Guarantee key={item.header}>
            <img alt={item.header} src={item.img} />
            <GuaranteeHeader>{item.header}</GuaranteeHeader>
            <GuaranteeParagraph>{item.paragraph}</GuaranteeParagraph>
          </Guarantee>
        ))}
      </Wrapperguarantees>
    </WhyusWrapper>
  );
};

export default Whyus;
