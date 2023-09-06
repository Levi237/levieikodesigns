// HIDE FAQ and FontList for now
// update FAQ, change style to match new style.
// create generic style for all pages (hieght: 80px; etc.)
// replace pageStyle state with designStyle class

import React, { Component }           from 'react';
import { Routes, Route, Link }        from 'react-router-dom';
import styled                         from 'styled-components';

import { ReactComponent as LogoSVG }  from './svg/brand/logo.svg';

import * as routes                    from './constants/routes';
import ModalWindow                    from './components/Modal';
import NavMenu                        from './components/nav/NavMenu';
import NavBar                         from './components/nav/NavBar';

// ==> Pages
import AboutPage                      from './pages/about';
import HomePage                       from './pages/home';
import ServicesPage                   from './pages/services';
import PortfolioPage                  from './pages/portfolio';
import ContactPage                    from './pages/contact';
import EmailConfirmation              from './pages/contact/EmailConfirmation';
// import FAQPage                        from './components/pages/faq';

import { ReactComponent as Mail }     from './svg/icons/iconfinder_mail.svg';
// import FontList                       from './fonts';

export default class App extends Component {
  state = {
    modalType: ``,
    pageStyle: {
      home: {
        title: ``,
        color: `#fff`,
        displayLogo: `none`,
      },
      about: {
        title: ``,
        color: `var(--blue)`,
        displayLogo: `none`,
      },
      portfolio: {
        title: `portfolio`,
        color: `#fff`,
        displayLogo: `inline-block`,
      },
      faq: {
        title: `faq`,
        color: `#181717`,
        displayLogo: `inline-block`,
      },
      services: {
        title: `contact`,
        color: `#fff`,
        displayLogo: `none`,
      },
      mail: {
        title: `contact`,
        color: `#fff`,
        displayLogo: `inline-block`,
      },
      root: {
        title: ``,
        color: `#fff`,
        displayLogo: `none`,
      }
    },
    slideMe: ``,
  };

  setslideMe = async () => {
    this.setState({
      slideMe: 'slideme',
    });
  };

  animateSlideMe = async () => {
    await this.setslideMe();
    setTimeout(() => {
      this.setState({
        slideMe: '',
      });
    }, 1000);
  };

  toggleModal = (e) => {
    const toggle = document.getElementById('modal');
    toggle.classList.toggle('active');
    toggle.classList.toggle('inactive');
    this.setState({
      modalType: e.currentTarget.value
    });
  };
  // Toggle Hamburger Menu
  btnHamburger =() => {
    document.getElementById('hamburger-btn').classList.toggle('hamburger-close');
  }
  toggleMenu = () => {
    const hamburgerMenu = document.getElementById('menu');
    hamburgerMenu.classList.toggle('active');
    hamburgerMenu.classList.toggle('inactive');
  };
  btnScroll = () => {
    const scrollTo = document.getElementById('scroll-to'); 
    scrollTo.scrollIntoView({ behavior: 'smooth'});              
  }; 
  render (){
    const { modalType, pageStyle , slideMe } = this.state;

    return (
      <AppContainer>
        <LogoSVG className="establish-logo" style={{width: '0', height: '0', position: 'absolute'}} />
        <NavMenu btnHamburger={this.btnHamburger} resetslideMe={this.resetslideMe} toggleMenu={this.toggleMenu} animateSlideMe={this.animateSlideMe} />
        <ModalWindow contactType={modalType} toggleModal={this.toggleModal} />
        <Routes>
            <Route path={routes.MAIL} exact element={<>
              <GoblinValleyImageAnimation/>
              </>}/>
            <Route path={routes.CNFM} exact element={<>
              <HeroImageDivAnimation/>
              <ContactMe><Link to={routes.MAIL}><Mail/></Link></ContactMe>
              </>}/>
            <Route path={routes.PORT} exact element={<>
              <ContactMe><Link to={routes.MAIL}><Mail/></Link></ContactMe>
              </>}/>
            <Route path={routes.INFO} exact element={<>
              <ContactMe><Link to={routes.MAIL}><Mail/></Link></ContactMe>
              </>}/>
            {/* <Route path={routes.FAQS} exact element={<>
              <ContactMe><Link to={routes.MAIL}><Mail/></Link></ContactMe>
              </>}/> */}
            <Route path={routes.SERV} exact element={<>
              <ContactMe><Link to={routes.MAIL}><Mail/></Link></ContactMe>
              </>}/>
            <Route path={routes.ROOT} exact element={<>
              <HeroImageDivAnimation/>
              <ContactMe><Link to={routes.MAIL}><Mail/></Link></ContactMe>
              </>}/>
            <Route path={routes.ROOT} element={<>
              <HeroImageDivAnimation/>
              <ContactMe><Link to={routes.MAIL}><Mail/></Link></ContactMe>
              </>}/>
        </Routes>

        <BodyContainer>
          <ContentContainer>
            <Routes>         
              {/* <Route path={routes.FONT} exact element={<FontList/> }/> */}
              <Route path={routes.MAIL} exact element={<>
                <NavBar btnHamburger={this.btnHamburger} toggleMenu={this.toggleMenu} designStyle="white"/>
                <ContactPage contactType={modalType}/>
                </>}/>
              <Route path={routes.CNFM} exact element={<>
                <NavBar btnHamburger={this.btnHamburger} toggleMenu={this.toggleMenu} designStyle="home"/>
                <EmailConfirmation/>
                </>}/>
              <Route path={routes.PORT} exact element={<>
                <NavBar btnHamburger={this.btnHamburger} toggleMenu={this.toggleMenu} designStyle="white"/>
                <PortfolioPage/>
                </>}/>
              <Route path={routes.INFO} exact element={<>
                <NavBar btnHamburger={this.btnHamburger} toggleMenu={this.toggleMenu} designStyle="info"/>
                <AboutPage slideMe={slideMe} animateSlideMe={this.animateSlideMe}/>
                </>}/>
              {/* <Route path={routes.FAQS} exact element={<>
                <NavBar btnHamburger={this.btnHamburger} toggleMenu={this.toggleMenu} designStyle="blue"/>
                <FAQPage/>
                <Footer/>
                </>}/> */}
              <Route path={routes.SERV} exact element={<>
                <NavBar btnHamburger={this.btnHamburger} toggleMenu={this.toggleMenu} designStyle="white"/>
                <ServicesPage pageStyle={pageStyle.portfolio}/>
                </>}/>
              <Route path={routes.ROOT} exact element={<>
                <NavBar btnHamburger={this.btnHamburger} toggleMenu={this.toggleMenu} designStyle="home"/>
                <HomePage btnScroll={this.btnScroll} pageStyle={pageStyle.home}/>
                </>}/>
              <Route path={routes.ROOT} element={<>
                <NavBar btnHamburger={this.btnHamburger} toggleMenu={this.toggleMenu} designStyle="home"/>
                <HomePage btnScroll={this.btnScroll} pageStyle={pageStyle.home}/>
                </>}/>
            </Routes>
          </ContentContainer>
        </BodyContainer>   
      </AppContainer>
    );
  };
};

const ContactMe = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 12px;
  right: 12px;
  width: 48px;
  a svg { 
    fill: var(--blue);
    transition: transform .3s ease;
  }
  a:hover svg {
    transform: scale(1.1);
    transition: transform .1s linear;
  }
  a:active svg {
    transform: scale(1.1) translate(0px,2px);
  }
`;

const ContentContainer = styled.div`
  color: #fff;
  height: 100vh;
  position: relative;
`;

const BodyContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
`;
const AppContainer = styled.div`
  h1 {
    text-align: center;
  }
`;
const HeroImageDiv = styled.div`
  height: 100vh;
  width: 100vw;

  background-image: url(background/header-hero.png);
  background-size: cover;
  
  position: fixed;
  z-index: -100;

  @media screen and (max-width: 900px){
    background-position: 23%;
  }
`;
const HeroImageDivAnimation = styled(HeroImageDiv)`
  background-repeat: repeat-x;
  animation: slideleft 900s infinite linear;
`;
const GoblinValleyImage = styled.div`
  height: 100vh;
  width: 100vw;

  background-image: url(background/goblin-valley.jpg);
  background-size: cover;
  
  position: fixed;
  z-index: -100;

  @media screen and (max-width: 900px){
    background-position: 23%;
  }
`;
const GoblinValleyImageAnimation = styled(GoblinValleyImage)`
  background-repeat: repeat-x;
  animation: slideleft 1200s infinite linear;
`;