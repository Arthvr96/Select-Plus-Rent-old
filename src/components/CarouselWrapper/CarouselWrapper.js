import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import media from 'utilites/media';
import { slider as data } from 'data/slider';

const Wrapper = styled.section`
  ul.animated {
    transition-delay: 0.5s !important;
  }

  .slide .contentWrapper {
    animation: slideOut 1.5s ease-in-out both;
  }

  @keyframes slideOut {
    from {
      transform: translateY(0px);
      opacity: 1;
    }

    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
  .slide.selected .contentWrapper {
    animation: slidein 1.5s 0.5s ease-in-out both;
  }

  @keyframes slidein {
    from {
      transform: translateY(30px);
      opacity: 0;
    }

    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

const Slide = styled.div`
  width: 100%;
  height: 50vh;
  background: url(${({ img }) => img}) center;
  background-size: cover;

  ${media.desktop`
    height:100vh;
  `}
`;

const ColoredFilter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 50vh;
  background-color: rgba(15, 41, 52, 0.4);

  ${media.desktop`
    height:100vh;
  `}
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 50vh;

  ${media.desktop`
    align-items: center;
    height:100vh;
  `}
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.size.mobile.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.m};
  color: ${({ theme }) => theme.colors.font.secondary};
  margin: 0 3rem;

  ${media.desktop`
    font-size: ${({ theme }) => theme.size.desktop.xxxl};
    font-weight: ${({ theme }) => theme.fontWeight.heavy};
    line-height: ${({ theme }) => theme.lineHeight.xxl};
  `}
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.size.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.s};
  color: ${({ theme }) => theme.colors.font.secondary};
  margin: 0 3rem;
  margin-top: 0.8rem;

  ${media.desktop`
    width: 50%;
    max-width: 800px;
    font-size: ${({ theme }) => theme.size.desktop.m};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    line-height: ${({ theme }) => theme.lineHeight.m};
  `}
`;

const CarouselWrapper = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const deviceChecker = () => {
    if (window.innerWidth > 1100) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };

  useEffect(() => {
    deviceChecker();
  });

  return (
    <Wrapper>
      <Carousel
        emulateTouch
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        autoPlay
        interval="6000"
        transitionTime="1500"
      >
        {data.map(({ name, img, imgm, title, paragraph }) => (
          <div key={name}>
            <Slide img={isDesktop ? img : imgm} />
            <ColoredFilter className="coloredFilter" />
            <ContentWrapper className="contentWrapper">
              <Title className="title">{title}</Title>
              <Paragraph className="paragraph">{paragraph}</Paragraph>
            </ContentWrapper>
          </div>
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default CarouselWrapper;
