import React  from 'react';
import styled from 'styled-components';

import { NavLink }                      from 'react-router-dom';
import * as routes                      from './../constants/routes';

// import NavIcons from './NavIcons';

const Footer = () => {
  return(
    <Container>
      <div>

        <section>
          <h2>Quick Links</h2>
          <NavLink to={routes.ROOT}>
            Home
          </NavLink> 
          <NavLink to={routes.SERV}>
            Services
          </NavLink>    
          <NavLink to={routes.PORT}>
            Portfolio
          </NavLink>   
          {/* <NavLink to={routes.FAQS}>
            FAQ
          </NavLink>  */}
          <NavLink to={routes.MAIL}>
            Contact
          </NavLink>             
        </section>
        {/* <NavIcons/> */}
        <section>
          <p>Built with React, by LeviEikoDesigns</p>
        </section>

      </div>
    </Container>
  );
};



const Container = styled.footer`
  scroll-snap-align: end;
  margin-top: 120px;
  width: 100vw;
  text-align: center;
  background-color: var(--black);
  position: relative;
  z-index: 3;
  h2 {
    margin-bottom: 5px!important;
  }
  svg {
    height: 40px;
    width: 40px;
    margin: 15x;
    fill: white;
    .cls-1, .cls-2 {
      stroke: black;
    }
    &:hover {
      fill: var(--lightgrey);
    }
  }
  > div {
    width: 100vw;
    > section {
      width: calc(42vw - 160px);
      padding: 3vw;
      display: inline-block;
      &:first-of-type {
        text-align: left;
        padding: 3vw;
        vertical-align: top;
      }
      &:nth-of-type(2) {
        width: 320px;
        padding: 6vw 0;
        vertical-align: middle;
      }
      &:last-of-type {
        text-align: right;
        padding: 3vw;
        vertical-align: bottom;
      }
    }
    a {
      color: #fff;
      padding: 0 10px;
    }
  }
  @media screen and (max-width: 745px){
    > div {
      padding: 20px 0;
      > section {
        width: 90vw;
        padding: 5vw;
        display: block;
        margin: 0 auto;
        &:first-of-type {
          text-align: left;
        }
        &:nth-of-type(2) {
        }
        &:last-of-type {
          text-align: right;
        }
      }
      svg {
        height: 40px;
        width: 40px;
        margin: 10px;
      }
    }
  }
`;

export default Footer;