/* eslint-disable prefer-destructuring */
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { slider as data } from 'data/slider';
import leftArrow from 'assets/imgaes/HeroSection/arrowLeft.svg';
import rightArrow from 'assets/imgaes/HeroSection/arrowRight.svg';

const SliderBox = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
`;

const SliderImages = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

let position = 0;
let photoNumber = 0;

const SliderImg = styled.div`
  position: absolute;
  top: 0;
  left: ${() => {
    if (photoNumber === 0) {
      position = -100;
      photoNumber += 1;
    } else if (photoNumber === 1) {
      position = 0;
      photoNumber += 1;
    } else if (photoNumber > 1) {
      position = 100;
    }
    return `${position}vw`;
  }};
  width: 100%;
  height: 100%;
  background: url(${({ img }) => img}) 60% 50%;
  background-size: cover;
`;

const ColoredFiltr = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100vw;
  height: 50vh;
  background-color: rgba(15, 41, 52, 0.4);
  z-index: 500;
`;

const ArrowRight = styled.button`
  z-index: 1000;
  display: block;
  background: url(${rightArrow}) no-repeat;
  background-color: transparent;
  background-size: 100%;
  border: 0;
  width: 20px;
  height: 35px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;
  opacity: 0.7;
`;

const HideArrowRight = styled.div`
  z-index: 999;
  display: block;
  background: transparent;
  width: 20px;
  height: 35px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;
`;

const ArrowLeft = styled.button`
  z-index: 1000;
  display: block;
  background: url(${leftArrow}) no-repeat;
  background-color: transparent;
  background-size: 100%;
  border: 0;
  width: 20px;
  height: 35px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5px;
  opacity: 0.7;
`;

const HideArrowLeft = styled.div`
  z-index: 999;
  display: block;
  background: transparent;
  width: 20px;
  height: 35px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5px;
`;

let imgNumber = 1;

const Slider = () => {
  let sliderImages = useRef(null);
  let rightArroww = useRef(null);
  let leftArroww = useRef(null);

  const switchImgRight = () => {
    const images = sliderImages.querySelectorAll('.slide');

    const tl = gsap.timeline({ defaults: { ease: 'Power3.easeInOut' } });
    let visible;
    let last;
    let next;
    if (imgNumber === 1) {
      visible = images[1];
      last = images[0];
      next = images[2];
      imgNumber = 2;
    } else if (imgNumber === 2) {
      visible = images[2];
      last = images[1];
      next = images[0];
      imgNumber = 0;
    } else if (imgNumber === 0) {
      visible = images[0];
      last = images[2];
      next = images[1];
      imgNumber = 1;
    }

    tl.addLabel('animation')
      .to(visible, { duration: 1, x: '-100vw' }, 'animation')
      .to(next, { duration: 1, x: '-100vw' }, 'animation')
      .set(visible, { x: 0, left: '-100vw' })
      .set(next, { x: 0, left: 0 })
      .set(last, { x: 0, left: '100vw' });
  };

  const switchImgLeft = () => {
    const images = sliderImages.querySelectorAll('.slide');

    const tl = gsap.timeline({ defaults: { ease: 'Power3.easeInOut' } });
    let visible;
    let last;
    let next;
    if (imgNumber === 1) {
      visible = images[1];
      last = images[2];
      next = images[0];
      imgNumber = 0;
    } else if (imgNumber === 2) {
      visible = images[2];
      last = images[0];
      next = images[1];
      imgNumber = 1;
    } else if (imgNumber === 0) {
      visible = images[0];
      last = images[1];
      next = images[2];
      imgNumber = 2;
    }

    tl.addLabel('animation')
      .to(visible, { duration: 1, x: '100vw' }, 'animation')
      .to(next, { duration: 1, x: '100vw' }, 'animation')
      .set(visible, { x: 0, left: '100vw' })
      .set(next, { x: 0, left: 0 })
      .set(last, { x: 0, left: '-100vw' });
  };

  const switchRight = () => {
    const tl = gsap.timeline();
    gsap.set(rightArroww, { zIndex: 1001 });
    gsap.set(leftArroww, { zIndex: 1001 });
    switchImgRight();
    tl.set(rightArroww, { delay: 1, zIndex: 999 }).set(leftArroww, { delay: 1, zIndex: 999 });
  };

  const switchLeft = () => {
    const tl = gsap.timeline();
    gsap.set(rightArroww, { zIndex: 1001 });
    gsap.set(leftArroww, { zIndex: 1001 });
    switchImgLeft();
    tl.set(rightArroww, { delay: 1, zIndex: 999 }).set(leftArroww, { delay: 1, zIndex: 999 });
  };

  function myLoop() {
    setTimeout(function x() {
      switchRight();
      if (true) {
        myLoop();
      }
    }, 5000);
  }

  useEffect(() => {
    myLoop();
  });

  return (
    <SliderBox>
      <ColoredFiltr />
      <ArrowRight onClick={switchRight} />
      <HideArrowRight
        ref={(el) => {
          rightArroww = el;
        }}
      />
      <ArrowLeft onClick={switchLeft} />
      <HideArrowLeft
        ref={(el) => {
          leftArroww = el;
        }}
      />
      <SliderImages
        ref={(el) => {
          sliderImages = el;
        }}
      >
        {data.map(({ name, img }, i) => (
          <SliderImg key={name} img={img} className={`nr${i} slide`} />
        ))}
        <div className="dupa" />
      </SliderImages>
    </SliderBox>
  );
};

export default Slider;
