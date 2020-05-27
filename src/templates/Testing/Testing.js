import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.secondary};
`;

const Testing = () => (
  <>
    <Box />
  </>
);

export default Testing;
