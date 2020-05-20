import React from 'react';
import styled from 'styled-components';
// import gsap from 'gsap';
const WhyusWrapper = styled.section`
  position: relative;
  margin-top: calc(50vh + 5.6rem);
  width: 100%;
  height: 2000px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px -10px 25px -10px rgba(0, 0, 0, 0.75);
`;

const Whyus = () => {
  return (
    <WhyusWrapper className="whyusSection">
      <h2>HelloWorld</h2>
    </WhyusWrapper>
  );
};

export default Whyus;
