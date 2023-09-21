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
import EmailConfirmation              from './components/sections/email/EmailConfirmation';
// import FAQPage                        from './components/pages/faq';

import { ReactComponent as Mail }     from './svg/icons/iconfinder_mail.svg';
// import FontList                       from './fonts';

export default class App extends Component {
  state = {
    projects: [{
  //     name: ``,
  //     active_site: true,
  //     active_project: true,
  //     startDate: 2023,
  //     endDate: null,
  //     image: `.jpg`,
  //     image2: `.jpg`,
  //     link: `.com`,
  //     type: [`build, contract, remodel, update, upgrade, maintain`],
  //     statement: ``,
  //     tasks: [`Shopify store`, `MailChimp campaigns`, `Photoshop, graphics design`, `Digital product design & development`, `Marketing strategic planning`],
  //     technologies: [`Shopify`, `Liquid`, `MailChimp`, `Photoshop`, `FIGMA`]
  // },{
      name: `Flawed™️`,
      active_site: true,
      active_project: true,
      startDate: 2023,
      endDate: null,
      image: `flawed.jpg`,
      image2: `flawed_2.jpg`,
      link: `dateflawed.com`,
      statement: `Flawed™ is the first dating app where you can find what you want by eliminating what you don’t.`,
      work: [`remodel, upgrade`],
      tasks: [`WordPress website remodel`, `Update match-making quiz`],
      technologies: [`WordPress`, `PHP`,  `DateBook`]
  },{
      name: `Red5 Performance`,
      active_site: true,
      active_project: true,
      startDate: 2021,
      endDate: null,
      image: `red5performance.jpg`,
      image2: `red5performance_2.jpg`,
      link: `red5performance.com`,
      statement: `THE EQUATION IS SIMPLE: PHYSICS + DISCIPLINE + RED5 = HAPPIER, HEALTHIER, STRONGER YOU`,
      work: [`build`, `maintain`],
      tasks: [`Shopify store`, `MailChimp campaigns`, `Photoshop, graphics design`, `Digital product design & development`, `Marketing strategic planning`],
      technologies: [`Shopify`, `Liquid`, `MailChimp`, `Photoshop`, `FIGMA`]
  },{
      name: `Momo[Muscle]`,
      active_site: true,
      active_project: true,
      startDate: 2020,
      endDate: null,
      image: `momomuscle-meta.jpg`,
      image2: `momomuscle-meta_2.jpg`,
      link: `momomuscle.com`,
      statement: `Basically, I design tools to teach women & AFAB babes to see sustainable results in less time.`,
      work: [`build`, `update`],
      tasks: [`Shopify store`, `Custom quiz w/ Klaviyo data capture`, `User friendly editable template`, `Graphic design & Photoshop`],
      technologies: [`Shopify`, `Liquid`, `Photoshop`, `FIGMA`, `MailChimp`, `Klaviyo`]
  },{
      name: `Nexus Housing`,
      active_site: true,
      active_project: true,
      startDate: 2023,
      endDate: null,
      image: `nexushousing.jpg`,
      image2: `nexushousing_2.jpg`,
      link: `nexushousing.com`,
      statement: `Sustainable modular housing.`,
      work: [`build`, `update`],
      tasks: [`Shopify website`, `Custom editable Liquid sections`],
      technologies: [`Shopify`, `Liquid`, `Photoshop`, `FIGMA`]
  },{
      name: `Covered Perfectly`,
      active_site: true,
      active_project: true,
      startDate: 2022,
      endDate: null,
      image: `coveredperfectly.jpg`,
      image2: `coveredperfectly_2.jpg`,
      link: `coveredperfectly.com`,
      statement: `Because looking beautiful never gets old.`,
      work: [`remodel`, `update`],
      tasks: [`Re-design Shopify store & logo`, `MailChimp email marketing`, `Social media graphic design`],
      technologies: [`Shopify`, `Liquid`, `Photoshop`, `FIGMA`]
  },{
      name: `Scared But Alive`,
      active_site: true,
      active_project: true,
      startDate: 2021,
      endDate: null,
      image: `scaredbutalive.jpg`,
      image2: `scaredbutalive_2.jpg`,
      link: `scaredbutalive.com`,
      statement: `Where street meets fitness. Unisex clothing with specific fit for AFAB, non-binary + women.`,
      work: [`build`, `update`],
      tasks: [`Shopify store`, `Customized sections & blocks`, `Photoshop`],
      technologies: [`Shopify`, `Liquid`, `Photoshop`, `FIGMA`, `Klaviyo`]
  },{
      name: `D I V I N I T Y`,
      active_site: true,
      active_project: true,
      startDate: 2021,
      endDate: null,
      image: `divinity-ray.jpg`,
      image2: `divinity-ray_2.jpg`,
      link: `divinityray.com`,
      statement: `With a passion for beauty, fashion and mental health, Divinity offers a refreshing approach to the world of social media.`,
      work: [`build`, `update`],
      tasks: [`Shopify website`, `Graphic design`, `Dropshipping integration`],
      technologies: [`Shopify`, `Liquid`, `Photoshop`, `FIGMA`, `MailChimp`]
  },{
      name: `Metamorphosis Medical Center`,
      active_site: true,
      active_project: true,
      startDate: 2021,
      endDate: null,
      image: `metamorphosis.jpg`,
      image2: ``,
      link: `metatranshormone.com`,
      statement: `Our MISSION is to provide a safe, nurturing environment in which patients may access personalized therapies delivered at the highest standard of care, enabling them to heal and transform into their full potential for health and well-being.`,
      work: [`build`],
      tasks: [`Custom single-page website`],
      technologies: [`Shopify`, `Liquid`, `SVG`, `Photoshop`, `MailChimp`, `FIGMA`],
  },{
      name: `Our Highest Mantra`,
      active_site: true,
      active_project: true,
      startDate: 2023,
      endDate: null,
      image: `ourhighestmantra.jpg`,
      image2: `ourhighestmantra_2.jpg`,
      link: `ourhighestmantra.com`,
      statement: `Find your higher self.`,
      work: [`build`],
      tasks: [`Shopify landing page`, `Customized Product page`, `Integrated 3rd part App`, `Photoshop Edits to Logo`],
      technologies: [`Shopify`, `Liquid`, `Photoshop`, `FIGMA`]
  },{
      name: `Prana Wellness`,
      active_site: true,
      active_project: true,
      startDate: 2019,
      endDate: null,
      image: `prana-wellness.jpg`,
      image2: `prana-wellness_2.jpg`,
      link: `pranawellnessworks.com`,
      statement: `Prana is Sanskrit for breath, considered as a life-giving force.  Prana is seen as a universal energy, which flows in currents in and around the body.`,
      work: [`build`, `update`],
      tasks: [`React/Firebase website & blog`, `MailChimp email automation`, `Photoshop`],
      technologies: [`React`, `Firebase`, `Photoshop`, `FIGMA`, `MailChimp`],
  },{
      name: `Levi Eiko Designs`,
      active_site: true,
      active_project: true,
      startDate: 2019,
      endDate: null,
      image: `levieikodesigns.jpg`,
      image2: `levieikodesigns_2.jpg`,
      link: `levieikodesigns.com`,
      statement: `Build your new website or upgrade an existing one.`,
      work: [`build`, `maintain`],
      tasks: [`Fully coded website`, `Built with React`, `Firebase Platform`],
      technologies: [`React`, `Firebase`, `Photoshop`, `FIGMA`, `MailChimp`]
  },{
      name: `Dizzy with Excitement`,
      active_site: true,
      active_project: true,
      startDate: 2023,
      endDate: null,
      image: `dizzywithexcitement.jpg`,
      image2: `dizzywithexcitement_2.jpg`,
      link: `dizzywithexcitement.com`,
      statement: `Endless options printed on demand.`,
      work: [`upgrades`],
      tasks: [`Create custom tools on purchaed template`,`Wallpaper size/price calculator`,`Color swatch tool in Collections`,`Color matching display on Products`],
      technologies: [`Shopify`,`Liquid`,`JS`,`CSS`,`SVG`,`Photoshop`,`MailChimp`,`FIGMA`]
  },{
      name: `Sathi Roy`,
      active_site: false,
      active_project: false,
      startDate: 2021,
      endDate: 2023,
      image: `sathiroy.jpg`,
      image2: `sathiroy_2.jpg`,
      link: `sathiroy.com`,
      statement: `I help people reach their highest potential every day by taking a holistic and customized approach involving their mind, body, soul, and spirit.`,
      work: [`build`],
      tasks: [`Shopify website`, `Graphic design`, `Vector/digital graphics animations`],
      technologies: [`Shopify`, `Liquid`, `SVG`, `Photoshop`, `FIGMA`],
  },{
      name: `Baddie by Divinity`,
      active_site: false,
      active_project: false,
      startDate: 2021,
      endDate: 2022,
      image: `baddie-by-divinity.jpg`,
      image2: `baddie-by-divinity_2.jpg`,
      link: `baddiebydivinity.com`,
      statement: `Baddie By Divinity is here to help us find and embrace our badassery, no matter what form it takes and no matter how we show it to the world.`,
      work: [`build`],
      tasks: [`Custom built Shopify website`,`Graphic design & touchups`,`Email marketing & automation`],
      technologies: [`Shopify`,`Liquid`,`JS`,`CSS`,`SVG`,`Photoshop`,`MailChimp`,`FIGMA`]
  },{
      name: `Bravo Built`,
      active_site: true,
      active_project: true,
      startDate: 2021,
      endDate: null,
      image: `bravo-built.jpg`,
      image2: `bravo-built_2.jpg`,
      link: `bravobuiltfit.com`,
      statement: `Within these programs you will find a constant changing routine that helps build a brick by brick foundation.`,
      work: [`build`],
      tasks: [`Custom built Shopify website`, `MailChimp email automation`, `Photoshop/graphic design`, `Marketing strategic planning`, `Merch/product design`],
      technologies: [`Shopify`,`Liquid`, `JS`, `CSS`, `SVG`, `Photoshop`, `FIGMA`, `MailChimp`]
  },{
      name: `Andrea Sells Maui`,
      active_site: false,
      active_project: false,
      startDate: 2020,
      endDate: 2021,
      image: `andreasellsmaui2.jpg`,
      image2: ``,
      link: `andreasellsmaui.com`,
      statement: `Maui real estate agent serving her local community`,
      work: [`build`],
      tasks: [`Wordpress real estate website`, `Graphic design`, `Ad creation` ],
      technologies: [`WordPress`, `JS`, `CSS`, `Photoshop`, `FIGMA`, `IDX Broker`]
  },{          
      name: `FITPLAN`,
      active_site: true,
      active_project: false,
      startDate: 2019,
      endDate: 2020,
      link: `fitplanapp.com`,
      image: `fitplan-giftcard.jpg`,
      image2: ``,
      statement: `Workout with elite personal trainers.`,
      work: [`contract`, `update`],
      tasks: [`Custom email: design & marketing`,`Web development, design & troubleshooting`,`Graphic design`],
      technologies: [`React`,`Shopify`,`Liquid`,`CSS`,`JS`,`WordPress`,`Photoshop`,`Figma`,`MailChimp`]
  },{
      name: `IT After Hours`,
      active_site: false,
      active_project: false,
      startDate: 2019,
      endDate: 2020,
      link: `it-afterhours.com`,
      image: `it-afterhours.jpg`,
      image2: ``,
      statement: `Professional, affordable computer service company`,
      work: [`remodel`],
      tasks: [`Streamline WordPress & resolve bugs`,`Customize CSS code`,`Mobile friendly upgrade`],
      technologies: [`WordPress`,`CSS`,`JS`]
  },{
      name: `HeatSeeker Hot Sauce`,
      active_site: false,
      active_project: false,
      startDate: 2019,
      endDate: 2020,
      link: `heatseekersauce.com`,
      image: `heatseeker.jpg`,
      image2: ``,
      statement: `Bold and minimal, pure and simple... That's what we do.`,
      work: [`remodel`, `upgrade`],
      tasks: [`Re-design Shopify website`,`Streamline content & UX`, `Add wholesale accounts`],
      technologies: [`Shopify`,`Liquid`,`CSS`,`JS`,`Photoshop`,`Figma`]
  },{
      name: `La Madre is Watching`,
      active_site: false,
      active_project: false,
      startDate: 2007,
      endDate: 2009,
      image: `lamadreiswatching-ongina.jpg`,
      image2: ``,
      link: `lamadreiswatching.com`,
      statement: `Photographing the edgy side of the Los Angeles night scene.`,
      work: [`build`, `maintain`],
      tasks: [`Build custom social media website`,`Party events shareable photo gallery`,`Graphic design`],
      technologies: [`HTML`,`CSS`,`Javascript`,`Photoshop`]
  }],
    modalType: ``,   
    pageStyle: {
      home: {
        title: ``,
        color: `#fff`,
        displayLogo: `none`,
      },
      about: {
        title: ``,
        color: `var(--hex-blue)`,
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
    const { modalType, pageStyle, projects, slideMe } = this.state;

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
                <PortfolioPage projects={projects}/>
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
                <HomePage btnScroll={this.btnScroll} pageStyle={pageStyle.home} projects={projects}/>
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
    fill: var(--hex-blue);
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