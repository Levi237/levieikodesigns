import React from 'react';
import styled               from 'styled-components';
import { NavLink }          from 'react-router-dom';
import * as routes          from '../constants/routes';

// import FeaturedBanner       from '../sections/FeaturedBanner';
import Definition           from '../components/sections/Definition';
import EmailMarketing       from '../components/sections/EmailMarketing';
import Gallery              from '../components/sections/Gallery';
import MobileFirstBanner    from '../components/sections/MobileFirstBanner';
import Skills               from '../components/sections/Skills';
import WebsitePreview       from '../components/sections/WebsitePreview';

import Footer               from '../components/Footer';

import { ReactComponent as LogoSVG } from '../svg/brand/logo.svg';
const HomePage = ({ pageStyle, btnScroll }) => {
  return(
    <div>

      <HomeHeroWrapper className="scroll-snap-start">
        <NavLink to={routes.PORT}>
          <LogoSVG className="" style={{fill: pageStyle.color, display: pageStyle.display}}/>
        </NavLink>
        <div id="down-arrow-container" onClick={() => btnScroll()}>
          LEARN MORE
          <br/><br/>
          <div id="down-arrow"></div>
        </div>
      </HomeHeroWrapper>

      <HomeSecondNav id="scroll-to" className="scroll-snap-start">
        <LogoSVG/>
        {/* <h1>Levi Eiko Designs</h1> */}
      </HomeSecondNav>

      <HomeBodyWrapper>  
        {/* <FeaturedBanner/> */}
        <Definition />
        {/* <Gallery id='bottom-home' width="20" height="10" gap="2" /> */}
        <Skills />
        <Gallery id='top-home' width="24" height="13" gap="2" seconds="6"/>
        <MobileFirstBanner />
        <EmailMarketing />
        <WebsitePreview />
        <Footer />
        {/* <div className="down-arrow-class"></div> */}
      </HomeBodyWrapper>

    </div>
  );
};
const HomeHeroWrapper = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  overflow: scroll;
  > a {
    height: 150px!important;
    width: 150px!important;
  } 
`;

const HomeSecondNav = styled.nav`
  height: 80px;
  z-index: 2;
  background-color: var(--blue);

  position: relative;
  > h1 {
    display: inline-block;
    font-size: 32px;
    line-height: 100%;
  }
  > svg {
    position: absolute;
    z-index: 999;
    top: 24px;
    left: 5vw;
    width: 36px;
    height: 36px;
    fill: #fff;
  }
  @media screen and (min-width: 945px) {
    height: 80px;
    > h1 {
      margin: 24px!important;
    }
  }
`;

const HomeBodyWrapper = styled.div`
  position: relative;
  width: 100vw;
  background-color: var(--background-color);
  color: white;
  overflow: scroll;
  position: relative;
  .down-arrow-class {
    position: fixed;
    bottom: 2vw;
    left: calc(50vw - 51px);
  }
  > h1 {
    color: var(--blue);
    font-size: 32px;
  }
  > section {
    width: 100%;
  }
  @media screen and (min-width: 945px) {
    height: calc(100vh - 80px);
  }
`;

export default HomePage;