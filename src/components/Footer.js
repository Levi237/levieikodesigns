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
        <section ></section>
        <section ></section>
        <section>
          <p>Built by LeviEikoDesigns w/ React</p>
        </section>

      </div>
    </Container>
  );
};

const Container = styled.div`
  scroll-snap-align: end;
  margin-top: 80px;
  width: 100%;
  background-color: var(--hex-black);
  color: #fff;

  position: relative;
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 40px;

    width: calc(100% - 80px);
    margin: 0 auto;
    padding: var(--small-section-padding) 40px 20px;
    @media(max-width: 749px){
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto auto;
      gap: 0;
      width: calc(100vw - 10vw);
      padding: var(--large-section-padding) 5vw 5vw;
    }
    > section {
      height: 100%;
      width: 100%:
      display: flex;
      align-items: start;
      justify-content: start;
      text-align: left;
      &:last-of-type {
        grid-column: 1 / span 2;
        align-items: center;
        justify-content: center;
        text-align: center;
        @media(max-width: 749px){
          margin-top: 10vw;
        }
      }
      a {
        padding: 2px 10px;
      }
    }
  }

`;


// const Container = styled.footer`
//   scroll-snap-align: end;
//   margin-top: 80px;
//   width: 100vw;
//   text-align: center;
//   background-color: var(--black);
//   position: relative;
//   z-index: 3;
//   h2 {
//     margin-bottom: 5px!important;
//   }
//   svg {
//     height: 40px;
//     width: 40px;
//     margin: 15x;
//     fill: white;
//     .cls-1, .cls-2 {
//       stroke: black;
//     }
//     &:hover {
//       fill: var(--lightgrey);
//     }
//   }
//   > div {
//     width: 100vw;
//     > section {
//       width: calc(42vw - 160px);
//       padding: 3vw;
//       display: inline-block;
//       &:first-of-type {
//         text-align: left;
//         padding: 3vw;
//         vertical-align: top;
//       }
//       &:nth-of-type(2) {
//         width: 320px;
//         padding: 6vw 0;
//         vertical-align: middle;
//       }
//       &:last-of-type {
//         text-align: right;
//         padding: 3vw;
//         vertical-align: bottom;
//       }
//     }
//     a {
//       color: #fff;
//       padding: 0 10px;
//     }
//   }
//   @media screen and (max-width: 745px){
//     > div {
//       padding: 20px 0;
//       > section {
//         width: 90vw;
//         padding: 5vw;
//         display: block;
//         margin: 0 auto;
//         &:first-of-type {
//           text-align: left;
//         }
//         &:nth-of-type(2) {
//         }
//         &:last-of-type {
//           text-align: right;
//         }
//       }
//       svg {
//         height: 40px;
//         width: 40px;
//         margin: 10px;
//       }
//     }
//   }
// `;

export default Footer;