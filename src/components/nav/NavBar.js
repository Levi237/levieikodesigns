import React       from 'react';
import styled      from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as routes from '../../constants/routes';

import { ReactComponent as LogoSVG }      from '../../svg/brand/logo.svg';
// import { ReactComponent as HamburgerSVG } from '../../svg/icons/hamburger.svg';

const NavBar = ({ btnHamburger, toggleMenu, designStyle }) => {
  return(<div>
    <Logo name="logo" className={"nav-bar " + (designStyle)}>
      <NavLink to={routes.ROOT}>
        <LogoSVG/>
      </NavLink>
    </Logo>
    <Hamburger name="toggleMenu" className={"nav-bar " + (designStyle)} onClick={(e) => {toggleMenu(e); btnHamburger(); }}>
      <nav id="hamburger-btn"><section></section><section></section></nav>
    </Hamburger>
  </div>);
};

const GlobalDiv = styled.div`
  position: absolute;
  z-index:999;
  top: 24px;
  width: 36px;
  height: 36px;
  &:hover{
    cursor: pointer;
  }
  @media screen and (max-width: 945px) {
    top: 5vw;
  }
`;
const Logo = styled(GlobalDiv)`
  left: 5vw;
`;
const Hamburger = styled(GlobalDiv)`
  right: 5vw;
`;

export default NavBar;