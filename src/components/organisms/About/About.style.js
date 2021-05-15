import styled from 'styled-components';

export const AboutWrapper = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.tertiary};
`;

export const Header = styled.h3`
  margin-left: 1rem;
  padding-top: 1rem;
  font-size: ${({ theme }) => theme.size.mobile.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.m};
  color: ${({ theme }) => theme.colors.font.secondary};
`;

export const Logo = styled.img`
  width: 45%;
  margin: 1rem 0 1rem 0.5rem;
`;

export const Paragraph = styled.p`
  span {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  margin: 0 2rem 1rem 1rem;
  font-size: ${({ theme }) => theme.size.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: ${({ theme }) => theme.lineHeight.s};
  color: ${({ theme }) => theme.colors.font.secondary};
`;

export const SocialIcon = styled.img`
  margin-left: 1rem;
`;

export const ContactWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  li {
    position: relative;
    display: flex;
    align-items: center;
    margin: 2rem 0 2rem;
  }

  li .iconWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
  }

  li p {
    margin-left: 1rem;
    font-size: ${({ theme }) => theme.size.mobile.s};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    line-height: ${({ theme }) => theme.lineHeight.s};
    color: ${({ theme }) => theme.colors.font.secondary};
  }
  li h4 {
    margin-left: 1rem;
    font-size: ${({ theme }) => theme.size.mobile.s};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: ${({ theme }) => theme.lineHeight.s};
    color: ${({ theme }) => theme.colors.font.secondary};
  }
`;

export const Footer = styled.footer`
  margin-top: 2rem;
  padding: 1rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const FooterContent = styled.p`
  margin-left: 1rem;
  font-size: ${({ theme }) => theme.size.mobile.xs};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: ${({ theme }) => theme.lineHeight.xs};
  color: ${({ theme }) => theme.colors.font.secondary};
`;
