import React                            from 'react';
import styled                           from 'styled-components';
import { NavLink }                      from 'react-router-dom';
import * as routes                      from '../../constants/routes';

import NavIcons                         from '../NavIcons';


const AboutPage = ({ slideMe }) => { 
  return(
    <AboutContainer>
      <Container>
        <div className={slideMe}>
          <h2> Meet Levi</h2>
          <p>
            <b>Who am I?</b>
            &emsp;A web developer, LEGO enthusaist, camping{" "}
            guru & photographer of random things... with a{" "}
            green thumb. I'd like to think I have the eye{" "}
            of an artist & the mind of an engineer, and my{" "}
            <NavLink to={routes.PORT}>clients</NavLink>{" "}
            seem to agree, so that's nice! 🤗
          </p>
          <p>
            <b>What I do:</b>
            &emsp;I help businesses enhance their online presence.{" "}
            E-commerce stores, blogs, email automations, photoshop,{" "}
            <u>yes</u>.{" "}
            I can build/enhance your website for that extra digital edge.
          </p>
          <p>
            <b>WHY??</b>
            &emsp;If you have a project you want to come{" "}
            to life, an existing page that needs upgrades,{" "}
            some graphic design or email marketing assitance,{" "}
            <NavLink to={routes.MAIL}>contact</NavLink>{" "}
            me by clicking the envelope below!
          </p>
          {/* <section>
            <a target="_blank" rel="noreferrer" href="https://github.com/Levi237">
              <Github className="svg-about-link"/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/leviwinans">
              <Linkedin className="svg-about-link"/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/levi_eiko/">
              <Instagram className="svg-about-link"/>
            </a>
            <NavLink to={routes.MAIL}>
              <Mail className="svg-about-link"/>
            </NavLink>
          </section> */}
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
  // svg.svg-about-link {
  //   width: 40px;
  //   height: 40px;
  //   margin: 2.5%;
  // }
  a {
    font-weight: 500;
    transition: .3s ease;
    &:hover {
      // > svg.svg-about-link * {
      //   fill: var(--blue)!important;
      // }
    }
  }
  div {
    background-color: rgba(250,250,250,.8);
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
    // font-family: "Big Shoulders Stencil Text";
    text-align: center;
  }
  p {
    margin: 15px 15%;
    font-size: 15px;
    font-weight: 100;
    line-height: 160%;
    b {
      font-weight: 500;
    }
  }
  // section {
  //   text-align: center;
  //   img {
  //     width: 15%;
  //     max-width: 40px;
  //     margin: 2.5%;
  //   }
  //   > span {
  //     width: 15%;
  //     max-height: 40px;
  //     max-width: 40px;
  //     margin: 2.5%;
  //     transition: .3s ease;
  //     &:hover {
  //       cursor: pointer;
  //     }
  //   }
  // }
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