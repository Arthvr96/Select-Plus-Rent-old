import styled from 'styled-components';

export const SelectWraper = styled.select`
  margin-top: 1.5rem;
`;

export const Paragraphes = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Paragraph = styled.p`
  margin: 1.5rem 1rem 0 1rem;
  font-size: ${({ theme }) => theme.size.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: ${({ theme }) => theme.lineHeight.s};
  color: ${({ theme }) => theme.colors.font.primary};
`;

export const ChangePrice = styled.div`
  display: flex;
  align-items: center;
`;
