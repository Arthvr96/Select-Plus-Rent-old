import styled from 'styled-components';
import { zindex } from 'utilites/zindex';

export const PopUpReservationWrapper = styled.div`
  visibility: hidden;
  opacity: 0;
  position: fixed;
  z-index: ${zindex.lvl9};
  top: 50vh;
  left: 50vw;
  transform: translateY(-50%) translateX(-50%);
  width: 85vw;
  height: 85vh;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 0px 30px 9px rgba(0, 0, 0, 0.8);
`;

export const FilterBox = styled.div`
  visibility: hidden;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${zindex.lvl8};
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const Header = styled.h2`
  margin-top: 2rem;
  font-size: ${({ theme }) => theme.size.mobile.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.l};
  color: ${({ theme }) => theme.colors.font.primary};
`;

export const SubTitle = styled.h4`
  font-size: ${({ theme }) => theme.size.mobile.m};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.m};
  color: ${({ theme }) => theme.colors.font.primary};
`;

export const Img = styled.img`
  width: 80vw;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 85%;
  bottom: 2rem;

  .inaccessible {
    filter: grayscale(100%);
    cursor: default;
  }
`;

export const Button = styled.button`
  width: 45%;
  height: 3rem;
  border: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.font.secondary};
  cursor: pointer;
`;
