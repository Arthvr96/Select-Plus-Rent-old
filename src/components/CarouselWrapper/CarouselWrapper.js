import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import './carouselStyle.css';
import { slider as data } from 'data/slider';
import media from 'utilites/media';

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
  background-color: rgba(15, 41, 52, 0.4);
`;

const ContentWrapper = styled.div``;

const Title = styled.h3`
  font-size: 2.4rem;
  margin: 0 3rem;
`;

const Paragraph = styled.p`
  font-size: 1.6rem;
  margin: 0 3rem;
  margin-top: 0.8rem;
`;

const CarouselWrapper = () => {
  return (
    <Carousel
      emulateTouch
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      autoPlay
      interval="6000"
      transitionTime="1500"
    >
      {data.map((item) => (
        <div key={item.name}>
          <Slide img={item.img} />
          <ColoredFilter className="coloredFilter" />
          <ContentWrapper className="contentWrapper">
            <Title className="title">{item.title}</Title>
            <Paragraph className="paragraph">{item.paragraph}</Paragraph>
          </ContentWrapper>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselWrapper;
