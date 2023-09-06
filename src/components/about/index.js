import React                            from 'react';
import styled                           from 'styled-components';
import { NavLink }                      from 'react-router-dom';
import * as routes                      from '../../constants/routes';

import NavIcons                         from '../snippets/NavIcons';
//=====================================>                                     
const AboutPage = ({ slideMe }) => { 
  return(
    <AboutContainer>
      <Container>
        <div className={slideMe}>
          <h2>Meet Levi</h2>
          <p>
            <b>Who am I?</b>
            &emsp;A web developer, of the great outdoors & photographer of random things...{" "}
            with a creative spirit. I'd like to think I have the eye of an artist{" "}
            & the mind of an engineer.
          </p>
          <p>
            <b>What I do:</b>
            &emsp;I help businesses enhance their online presence.{" "}
            E-commerce stores, blogs, email automations, photoshop,{" "}
            <u>yes</u>.{" "}
            I can build/enhance your website for that extra digital edge.
          </p>
          <p>
            <b>Why me??</b>
            &emsp;If you have a project you want to come{" "}
            to life, an existing page that needs upgrades,{" "}
            some graphic design or email marketing assitance I'm your person. <br/><br/>
            <NavLink to={routes.MAIL}>Schedule your complimentary consultation today ➡</NavLink>
          </p>
          <NavIcons/>
        </div>
      </Container>
    </AboutContainer>
  );
};

const Container = styled.div`
  color: var(--black);
  font-size: 14px;
  position: relative;
  z-index: 10;
  margin-left: 5%;  
  display: inline-block;
  width: 50%;
  max-width: 50%;
  vertical-align: top;

  a {
    font-weight: 500;
    transition: .3s ease;
    color: var(--blue)!important;
  }
  a:hover {
    color: var(--darkblue)!important;
  }
  div {
    background-color: rgba(250,250,250,1);
    padding: 30px 0;
    transition: transform 2s ease;
    transform: translateX(0)
  }
  > div.slideme {
    transform: translateX(-100vw)
  }
  h2 {
    margin: 0 10%;
    font-size: 36px;
    text-align: center;
    color: var(--blue);
  }
  p {
    margin: 15px 15%;
    font-size: 15px;
    font-weight: 300;
    line-height: 120%;
    b {
      font-weight: 500;
    }
  }
  @media screen and (max-width: 900px) {
    width: 80%;
    max-width: 80%;
  }
`;
const AboutContainer = styled.div`
  width: 100%;
  height: 90vh;
  padding-top: 10vh;
  overflow: scroll;

  background-attachment: fixed;
  background-color: #fff;
  background-image: url(background/about.png);
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;

  @media screen and (max-width: 900px) {
      height: 100vh;
      background-size: cover!important;
      background-position: 70% center;
  }
  .name-svg {
    height: 32px!important;
    display: inline-block;
    &:first-of-type {
      margin-right: 16px;
    }
  }
`;

export default AboutPage;