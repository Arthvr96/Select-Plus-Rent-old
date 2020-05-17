import React from 'react';
import styled from 'styled-components';
import Navigation from 'components/Navigation/Navigation';
import { zindex } from 'utilites/zindex';

const ButtonHamburger = styled.button`
  position: ${({ isOpen }) => (isOpen ? 'fixed' : 'relative')};
  right: 1.5rem;
  z-index: ${zindex.lvl8};
  display: inline-block;
  padding: 1rem;
  margin: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const HamburgerBox = styled.span`
  position: relative;
  display: inline-block;
  width: 1.9rem;
  height: 1.2rem;
`;

const HamburgerInner = styled.span`
  position: relative;
  display: block;
  width: 100%;
  height: 0.2rem;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${({ theme, isOpen }) => (isOpen ? 'transparent' : theme.colors.primary)};
  transition: background-color 0.2s ease-in;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    height: 0.2rem;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &::before {
    top: -5px;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(5px) rotate(45deg);' : 'translateY(0px) rotate(0deg);'};
    transition: transform 0.4s 0.1s ease-in;
  }

  &::after {
    top: 5px;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(-5px) rotate(-45deg);' : 'translateY(0px) rotate(0deg);'};
    transition: transform 0.4s 0.1s ease-in;
  }
`;

class HamburgerMenu extends React.Component {
  state = {
    isOpen: false,
  };

  toggleHamburger = () => {
    const { isOpen } = this.state;
    if (isOpen) {
      this.setState({ isOpen: false });
    } else if (!isOpen) {
      this.setState({ isOpen: true });
    }
  };

  render() {
    const { isOpen } = this.state;
    return (
      <>
        <ButtonHamburger isOpen={isOpen} onClick={this.toggleHamburger}>
          <HamburgerBox>
            <HamburgerInner isOpen={isOpen} />
          </HamburgerBox>
        </ButtonHamburger>
        <Navigation linkActived={this.toggleHamburger} isOpen={isOpen} />
      </>
    );
  }
}

export default HamburgerMenu;
