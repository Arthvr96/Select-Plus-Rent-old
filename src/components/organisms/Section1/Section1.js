import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
`;

const Section1 = () => {
  return (
    <Wrapper>
      <h2>HelloWorld</h2>
    </Wrapper>
  );
};

export default Section1;
