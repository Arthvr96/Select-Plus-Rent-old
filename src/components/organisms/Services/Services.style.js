import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1000;
  width: 100%;
  background: ${({ theme }) => theme.colors.lightergrey};
`;

export const Header = styled.h2`
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.size.mobile.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.m};
  color: ${({ theme }) => theme.colors.font.primary};
`;

export const Paragraph = styled.p`
  margin: 2rem 0 3rem;
  font-size: ${({ theme }) => theme.size.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: ${({ theme }) => theme.lineHeight.s};
  color: ${({ theme }) => theme.colors.font.primary};
`;

export const ServicesWrapper = styled.section`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.colors.lightergrey};

  div:last-of-type {
    margin-right: 2rem;
  }
`;

export const ServicesOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 2rem 0 2rem 2rem;
  padding: 3rem 0;
  border: 1px solid #ededed;

  p {
    margin-top: 1rem;
  }
`;
