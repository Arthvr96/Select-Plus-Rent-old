import styled from 'styled-components';
import media from 'utilites/media';

export const CarsInfoSection = styled.section`
  position: relative;
  z-index: 45;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.lightergrey};
`;

export const Header = styled.h3`
  padding-top: 3rem;
  font-size: ${({ theme }) => theme.size.mobile.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.m};
  color: ${({ theme }) => theme.colors.font.primary};
  text-align: center;
`;

export const Paragraph = styled.p`
  width: 80%;
  margin: 1.5rem 0 3rem 0;
  font-size: ${({ theme }) => theme.size.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: ${({ theme }) => theme.lineHeight.s};
  color: ${({ theme }) => theme.colors.font.primary};
  text-align: center;
`;

export const CarsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.lightergrey};

  ${media.desktop`
  display: grid;
  padding: 3rem;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  `}
`;

export const Car = styled.div`
  width: 95%;
  margin-bottom: 3rem;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 0px 12px -1px rgba(0, 0, 0, 0.25);

  img {
    width: 100%;
  }

  ${media.desktop`
  
  width:100%
  `}
`;

export const CarName = styled.h3`
  margin: 2rem 0 1.1rem 2rem;
  font-size: ${({ theme }) => theme.size.mobile.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.m};
  color: ${({ theme }) => theme.colors.font.primary};
`;

export const CarDescription = styled.p`
  margin: 0 0 3rem 2rem;
  font-size: ${({ theme }) => theme.size.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: ${({ theme }) => theme.lineHeight.s};
  color: ${({ theme }) => theme.colors.font.primary};
`;

export const CarTechInfo = styled.ul`
  margin: 0 0 3.2rem 4rem;
  color: ${({ theme }) => theme.colors.secondary};

  li {
    font-size: ${({ theme }) => theme.size.mobile.s};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    line-height: ${({ theme }) => theme.lineHeight.s};
  }

  li span {
    color: ${({ theme }) => theme.colors.font.primary};
  }
`;

export const PriceingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem 2rem 2rem;
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 24%;
  padding: 1.1rem 1rem;
  background: ${({ theme }) => theme.colors.secondary};

  h4 {
    font-size: ${({ theme }) => theme.size.mobile.xs};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    line-height: ${({ theme }) => theme.lineHeight.xs};
    color: ${({ theme }) => theme.colors.font.secondary};
  }
  h3 {
    font-size: ${({ theme }) => theme.size.mobile.s};
    font-weight: ${({ theme }) => theme.fontWeight.heavy};
    line-height: ${({ theme }) => theme.lineHeight.s};
    color: ${({ theme }) => theme.colors.font.secondary};
  }
`;
