import React, { Component } from 'react';
import styled               from 'styled-components';

import DisplayService       from '../components/sections/DisplayService';

import AnimateText          from '../components/snippets/AnimateText'; 
import Footer               from '../components/Footer';
// import PricingSection       from './PricingSection';
export default class ServicesPage extends Component {
  state = {
    services: {
      email: {
        title: `Email Marketing`,
        subtitle: `Blasts & Automations`,
        subtext: `Building better relationships through targeted email campaigns.`,
        paragraph: `Emailing your customers is an excellent way to maintain a positive relationship while promoting specials they might be interested in.  It's all about tact.  Knowing what to send to who and when is important.  The better you target you audiences the more effective you can be at driving up sales but now and in the long term.`,
        listName: `What I do:`,
        checklist: [
          `Upgrade your professional look`,
          `Target audiences to promote sales & new products`,
          `Feature custom graphic designs`,
          `Create value-added content to build trust`,
          `Bypass the spam, get into the Inbox`,
        ],
        collage: [
          `coveredperfectly_3.jpg`, 
          `baddie-by-divinity_2.jpg`,
          `bravo-built_3.jpg`,
        ],
        position: {
          text: `right bottom`
        }
      },
      graphics: {
        title: `Graphic Design`,
        subtitle: `DIGITAL CREATIONS`,
        subtext: `It's all about manifesting your style.`,
        paragraph: `I help businesses create interesting, effective imagery for an elevated user experience.  Whether it's making your idea a reality, or coming up with a whole new look, I can help.`,
        listName: `What I do:`,
        checklist: [
          `Graphics / photoshop touchups`,
          `Product imagery & packaging`,
          `Marketing / advertising campaigns`,
          `Logos & brand identity development`,
        ],
        collage: [
          `red5-collection.png`,
          `bravo-video.png`, 
          `divinity-youtube.png`,
        ],
        position: {
          text: `left bottom`
        }
      },
      additions: {
        title: `Custom Additions`,
        subtitle: `BUILD ON YOUR EXISTING PAGE`,
        subtext: ``,
        paragraph: `Maybe you already have a website but your "Current Theme" doesn't have the Section style in your Template you want. Maybe you want a holiday promotional banner set up to capture a little extra revenue this season.`,
        listName: `What I do:`,
        checklist: [
          `Build customer friendly editable & reusable templates`,
          `Custom coded unique sections inserted directly onto a page`,
          `Utilize existing templates to design stylish presentations`,
          `Install, integrate and personalize third party apps`,
        ],
        collage: [
          `custom-red5-section.jpg`, 
          `custom-red5-file.jpg`, 
          `custom-nexus-section.jpg`, 
        ],
        position: {
          text: `right bottom`,
        }
      },
      websites: {
        title: `Web Development`,
        subtitle: `ONLINE BUSINESSES w/ ECOMMERCE`,
        subtext: `and much, much more.`,
        paragraph: `For many small businesses, starting an online store is a big step.  You have a great idea, you have the market, all you need now is to open shop!  Not only do I build websites, but I help get your whole digital storefront up and running.`,
        listName: `What I do:`,
        checklist: [
          `Design & develop eCommerce websites & blogs`,
          `Connect third party accounts, including email`,
          `Assist in product design, cover images, etc.`,
          `Create marketing strategies to capture leads & drive sales`,
        ],
        collage: [
          `divinity-home.png`, 
          `metamorphosis-banner.png`,
          `momo-quiz.png`,
        ],
        position: {
          text: `left bottom`,
        }
      }
    }
  }
  
  render(){
    const { services } = this.state;
    return(
      <div className="index-wrapper">
        <div>  
          <h1 className="header">
            <AnimateText animate="slide" fade="on" speed="fast" text="Services" />
          </h1>
          <Container>
            <DisplayService service={services.websites}/>
            {/* <PricingSection/> */}
            <DisplayService service={services.additions}/>
            <DisplayService service={services.graphics}/>
            <DisplayService service={services.email}/>
          </Container>
          <Footer/>
        </div>
      </div>
    );
  };
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
`;