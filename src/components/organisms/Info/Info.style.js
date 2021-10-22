import styled from 'styled-components';
import fixedBg from 'assets/imgaes/InfoAndAbout/funfact-bg.jpg';

export const FixedBackground = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  width: 100%;
  height: 100vh;
  background: url(${fixedBg}) no-repeat 40% 10%;
  background-size: auto 100%;
`;

export const InfoWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(17, 46, 59, 0.7);

  div.grid {
    position: absolute;
    top: 50%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin: 2rem 1rem;
    transform: translateY(-50%);
  }
`;

export const Header = styled.h3`
  margin-top: 2rem;
  font-size: ${({ theme }) => theme.size.mobile.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.l};
  color: ${({ theme }) => theme.colors.font.secondary};
`;

export const Paragraph = styled.h3`
  font-size: ${({ theme }) => theme.size.mobile.xs};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: ${({ theme }) => theme.lineHeight.xs};
  color: ${({ theme }) => theme.colors.font.secondary};
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  background: rgba(255, 255, 255, 0.1);

  h4 {
    font-size: ${({ theme }) => theme.size.mobile.l};
    font-weight: ${({ theme }) => theme.fontWeight.heavy};
    line-height: ${({ theme }) => theme.lineHeight.l};
    color: ${({ theme }) => theme.colors.font.secondary};
    text-align: center;
  }

  h3 {
    width: 90%;
    font-size: ${({ theme }) => theme.size.mobile.s};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    line-height: ${({ theme }) => theme.lineHeight.s};
    color: ${({ theme }) => theme.colors.font.secondary};
    text-align: center;
    text-transform: uppercase;
  }
`;
