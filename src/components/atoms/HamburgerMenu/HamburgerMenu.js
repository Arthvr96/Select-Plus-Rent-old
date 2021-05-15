import React from 'react';
import Navigation from 'components/molecues/Navigation/Navigation';
import { ButtonHamburger, HamburgerBox, HamburgerInner } from './HamburgerMenu.styles';

let countOpenHamburger = 0;
let hamburgerScrollPos = 0;

class HamburgerMenu extends React.Component {
  state = {
    isOpen: false,
  };

  toggleHamburger = () => {
    const { isOpen } = this.state;
    const { isVisable } = this.props;

    countOpenHamburger += 1;
    if (isOpen) {
      this.setState({ isOpen: false });
    } else if (!isOpen) {
      this.setState({ isOpen: true });
    }
    isVisable();

    if (countOpenHamburger % 2 > 0) {
      hamburgerScrollPos = window.scrollY;
    } else {
      window.scrollTo(0, hamburgerScrollPos);
    }
  };

  render() {
    const { isOpen } = this.state;
    return (
      <>
        <ButtonHamburger
          aria-label="hamburger"
          className="hamburger"
          isOpen={isOpen}
          onClick={this.toggleHamburger}
        >
          <HamburgerBox>
            <HamburgerInner isOpen={isOpen} />
          </HamburgerBox>
        </ButtonHamburger>
        <Navigation
          linkActived={window.innerWidth < 1100 ? this.toggleHamburger : ''}
          isOpen={isOpen}
        />
      </>
    );
  }
}

export default HamburgerMenu;
