import React                from 'react'
import { NavLink }          from 'react-router-dom';
import styled               from 'styled-components';

import * as routes          from '../../constants/routes';

const NavMenu = ({ animateSlideMe, btnHamburger, toggleMenu }) => {
    return(
        <NavContainer id="menu" className="inactive">
            <div>
                <NavLink activeClassName="active" to={routes.ROOT} onClick={() => {toggleMenu(); animateSlideMe(); btnHamburger();}}>HOME</NavLink>
                <NavLink exact activeClassName="active" to={routes.SERV} onClick={() => {toggleMenu(); animateSlideMe(); btnHamburger();}}>SERVICES</NavLink>
                <NavLink exact activeClassName="active" to={routes.PORT} onClick={() => {toggleMenu(); animateSlideMe(); btnHamburger();}}>CLIENTS</NavLink>
                <NavLink exact activeClassName="active" to={routes.INFO} onClick={() => {toggleMenu(); animateSlideMe(); btnHamburger();}}>ABOUT ME</NavLink>
                <NavLink exact activeClassName="active" to={routes.MAIL} onClick={() => {toggleMenu(); animateSlideMe(); btnHamburger();}}>CONTACT</NavLink>
                <NavLink exact activeClassName="active" to={routes.FAQS} onClick={() => {toggleMenu(); animateSlideMe(); btnHamburger();}}>FAQ</NavLink>
            </div>
        </NavContainer>
    );
};

const NavContainer = styled.div`
    text-align: center;
    font-size: 20px;
    right: 0;
    z-index: 111;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(19,17,17,.9);
    color: #FFF;
    position: fixed;

    > div > a {
        text-decoration: none;
        display: block;
        height: 44px;
        padding-top: 20px;
        color: #FFF;
    }
    a:hover {
        color: #29bfff!important;
    }
    div {
        padding-top: 140px;
    }
    button {
        position: absolute;
        top: 5px;
        right: 5px;
        padding: 5px;
        color: #FFF;
        border: none;
        font-size: 14px;
    }
`;

export default NavMenu;