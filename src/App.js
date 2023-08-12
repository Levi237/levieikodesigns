import React, { Component }           from 'react';
import { Routes, Route, Link }              from 'react-router-dom';
import styled                         from 'styled-components';

import { ReactComponent as LogoSVG }  from './svg/brand/logo.svg';

import * as routes                    from './constants/routes';
import ModalWindow                    from './components/Modal';
import NavMenu                        from './components/nav/NavMenu';
import NavBar                         from './components/nav/NavBar';
import Footer                         from './components/Footer';

import AboutPage                      from './components/about';
import FAQPage                        from './components/faq';
import HomePage                       from './components/home';
import ServicesPage                   from './components/services';
import PortfolioPage                  from './components/clients';
import ContactPage                    from './components/contact';
import EmailConfirmation              from './components/contact/EmailConfirmation';

import { ReactComponent as Mail }       from './svg/icons/iconfinder_mail.svg';

import FontList                       from './fonts';

export default class App extends Component {
  state = {
    modalType: '',
    pageStyle: {
      home: {
        title: '',
        color: '#fff',
        displayLogo: 'none',
      },
      about: {
        title: '',
        color: 'var(--blue)',
        displayLogo: 'none',
      },
      portfolio: {
        title: 'portfolio',
        color: '#fff',
        displayLogo: 'inline-block',
      },
      faq: {
        title: 'faq',
        color: '#181717',
        displayLogo: 'inline-block',
      },
      services: {
        title: 'contact',
        color: '#fff',
        displayLogo: 'none',
      },
      mail: {
        title: 'contact',
        color: '#fff',
        displayLogo: 'inline-block',
      },
      root: {
        title: '',
        color: '#fff',
        displayLogo: 'none',
      }
    },
    slideMe: ''
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
        <LogoSVG className="establish-logo" style={{width: '0', height: '0', position: 'absolute'}}/>
        <NavMenu btnHamburger={this.btnHamburger} resetslideMe={this.resetslideMe} toggleMenu={this.toggleMenu} animateSlideMe={this.animateSlideMe}/>
        <ModalWindow contactType={modalType} toggleModal={this.toggleModal}/>
        <Routes>
            <Route path={routes.MAIL} exact element={ <></> }/>
            <Route path={routes.CNFM} exact element={ <ContactMe><Link to={routes.MAIL}><Mail/></Link></ContactMe> }/>
            <Route path={routes.PORT} exact element={ <ContactMe><Link to={routes.MAIL}><Mail/></Link></ContactMe> }/>
            <Route path={routes.INFO} exact element={ <ContactMe><Link to={routes.MAIL}><Mail/></Link></ContactMe> }/>
            <Route path={routes.FAQS} exact element={ <ContactMe><Link to={routes.MAIL}><Mail/></Link></ContactMe> }/>
            <Route path={routes.SERV} exact element={ <ContactMe><Link to={routes.MAIL}><Mail/></Link></ContactMe> }/>
            <Route path={routes.ROOT} exact element={ <ContactMe><Link to={routes.MAIL}><Mail/></Link></ContactMe> }/>
            <Route path={routes.ROOT} element={ <ContactMe><Link to={routes.MAIL}><Mail/></Link></ContactMe> }/>
          
        </Routes>

        <Routes>
          <Route path={routes.MAIL} exact element={<GoblinValleyImageAnimation/>}/>
          <Route path={routes.CNFM} exact element={<HeroImageDivAnimation/>}/>
          <Route path={routes.PORT} exact element={<></>}/>
          <Route path={routes.SERV} exact element={<HeroImageDiv/>}/>
          <Route path={routes.ROOT} exact element={<HeroImageDivAnimation/>}/>
          <Route path={routes.ROOT} element={<HeroImageDivAnimation/>}/>
        </Routes>

        <BodyContainer>
          <Routes>         
            <Route path={routes.MAIL} exact element={<NavBar btnHamburger={this.btnHamburger} toggleMenu={this.toggleMenu} pageStyle={pageStyle.mail}/> }/>
            <Route path={routes.CNFM} exact element={<NavBar btnHamburger={this.btnHamburger} toggleMenu={this.toggleMenu} pageStyle={pageStyle.home}/> }/>
            <Route path={routes.PORT} exact element={<NavBar btnHamburger={this.btnHamburger} toggleMenu={this.toggleMenu} pageStyle={pageStyle.portfolio}/> }/>
            <Route path={routes.INFO} exact element={<NavBar btnHamburger={this.btnHamburger} toggleMenu={this.toggleMenu} pageStyle={pageStyle.portfolio}/> }/>
            <Route path={routes.FAQS} exact element={<NavBar btnHamburger={this.btnHamburger} toggleMenu={this.toggleMenu} pageStyle={pageStyle.faq}/> }/>
            <Route path={routes.SERV} exact element={<NavBar btnHamburger={this.btnHamburger} toggleMenu={this.toggleMenu} pageStyle={pageStyle.faq}/> }/>
            <Route path={routes.ROOT} exact element={<NavBar btnHamburger={this.btnHamburger} toggleMenu={this.toggleMenu} pageStyle={pageStyle.home}/> }/>
            <Route path={routes.ROOT} element={<NavBar btnHamburger={this.btnHamburger} toggleMenu={this.toggleMenu} pageStyle={pageStyle.root}/> }/>
          </Routes>
          <ContentContainer>
            <Routes>         
              <Route path={routes.FONT} exact element={<FontList/> }/>
              <Route path={routes.MAIL} exact element={<ContactPage contactType={modalType}/> }/>
              <Route path={routes.CNFM} exact element={<EmailConfirmation/> }/>
              <Route path={routes.PORT} exact element={<PortfolioPage/> }/>
              <Route path={routes.INFO} exact element={<AboutPage slideMe={slideMe} animateSlideMe={this.animateSlideMe}/> }/>
              <Route path={routes.FAQS} exact element={<><FAQPage/><Footer/></> }/>
              <Route path={routes.SERV} exact element={<ServicesPage pageStyle={pageStyle.portfolio}/> }/>
              <Route path={routes.ROOT} exact element={<HomePage btnScroll={this.btnScroll} pageStyle={pageStyle.home}/> }/>
              <Route path={routes.ROOT} element={<HomePage btnScroll={this.btnScroll} pageStyle={pageStyle.home}/> }/>
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
  }
  a:hover svg var(--darkblue);
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
    // text-transform: uppercase;
  }
  a {
    color: var(--darkblue);
    &:hover {
      color: var(--blue);
    }
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