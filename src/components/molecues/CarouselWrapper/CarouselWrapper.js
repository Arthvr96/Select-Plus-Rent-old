import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { slider as data } from 'data/slider';
import {
  Wrapper,
  Slide,
  ColoredFilter,
  ContentWrapper,
  Title,
  Paragraph,
} from './CarouselWrapper.style';

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
