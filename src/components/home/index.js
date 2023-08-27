import React from 'react';
import styled               from 'styled-components';
import { NavLink }          from 'react-router-dom';
import * as routes          from '../../constants/routes';

// import FeaturedBanner       from '../FeaturedBanner';
import Definition           from '../Definition';
import EmailMarketing       from '../EmailMarketing';
import WireframeBanner      from '../WireframeBanner';
import MobileFirstBanner    from '../MobileFirstBanner';
import Footer               from '../Footer';

import { ReactComponent as LogoSVG } from '../../svg/brand/logo.svg';
const HomePage = ({ pageStyle, btnScroll }) => {
  return(
    <HomeWrapper>

      <HomeHeroWrapper>
        <NavLink to={routes.PORT}>
          <LogoSVG className="" style={{fill: pageStyle.color, display: pageStyle.display}}/>
        </NavLink>
        <div id="down-arrow-container" onClick={() => btnScroll()}>
          LEARN MORE
          <br/><br/>
          <div id="down-arrow"></div>
        </div>
      </HomeHeroWrapper>

      <HomeSecondNav id="scroll-to">
        <LogoSVG/>
        {/* <h1>Levi Eiko Designs</h1> */}
      </HomeSecondNav>

      <HomeBodyWrapper>  
        {/* <FeaturedBanner/> */}
        <Definition />
        <MobileFirstBanner/>
        <EmailMarketing/>
        <WireframeBanner/>
        <Footer/>
        {/* <div className="down-arrow-class"></div> */}
      </HomeBodyWrapper>

    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  scroll-snap-type: y mandatory;
  height: 100vh;
  width: 100vw;
  overflow: scroll;
`;
const HomeSecondNav = styled.nav`
  height: 80px;
  z-index: 2;
  background-color: var(--blue);
  -webkit-scroll-snap-align: start;
  -moz-scroll-snap-align: start;
  -ms-scroll-snap-align: start;
  scroll-snap-align: start;
  position: relative;
  > h1 {
    // margin: calc(5vw + 2px)!important;
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

const HomeHeroWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  -webkit-scroll-snap-align: start;
  -moz-scroll-snap-align: start;
  -ms-scroll-snap-align: start;
  scroll-snap-align: start;
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

const HomeBodyWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 5vw - 50px);
  background-color: var(--background-color);
  color: white;
  overflow: scroll;
  position: relative;
  .down-arrow-class {
    position: fixed;
    bottom: 2vw;
    left: calc(50vw - 51px);
  }
  // scroll-snap-type: y mandatory;
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