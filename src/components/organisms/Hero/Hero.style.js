import styled from 'styled-components';
import media from 'utilites/media';

export const HeroSection = styled.section`
  position: fixed;
  top: 5.6rem;
  width: 100%;
  height: 50vh;
  margin-top: ${({ position }) => position}px;

  ${media.desktop`
    height:100vh;
    top:0;
  `}
`;
