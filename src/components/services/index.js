import React, { Component } from 'react';
import styled               from 'styled-components';

import Footer               from '../Footer';
import DisplaySection       from './DisplaySection';

import AnimateText          from '../snippets/AnimateText'; 
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
          `Target audiences to promote sales & new products`,
          `Upgrade your professional look`,
          `Feature custom graphic designs`,
          `Bypass the spam, get into the Inbox`,
          `Create value-added content to build trust`
        ],
        collage: [
          `projects/coveredperfectly_3.png`, 
          `projects/baddie-by-divinity_2.jpg`,
          `projects/bravo-built_3.jpg`
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
          `Logos & brand identity development`
        ],
        collage: [
          `services/red5-collection.png`,
          `services/bravo-video.png`, 
          `services/divinity-youtube.png`
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
          `services/custom-red5-section.jpg`, 
          `services/custom-red5-file.jpg`, 
          `services/custom-nexus-section.jpg`, 
        ],
        position: {
          text: `right bottom`
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
          `services/divinity-home.png`, 
          `services/metamorphosis-banner.png`,
          `services/momo-quiz.png`,
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
        <Container>  
          <h1 className="header">
            <AnimateText animate="slide" fade="on" speed="fast" text="Services" />
          </h1>
          <div>
            <DisplaySection service={services.websites}/>
            {/* <PricingSection/> */}
            <DisplaySection service={services.additions}/>
            <DisplaySection service={services.graphics}/>
            <DisplaySection service={services.email}/>
          </div>
          <Footer/>
        </Container>
      </div>
    );
  };
};

const Container = styled.div`
  > div {
    width: 100%;
    margin: 0 auto;
    max-width: 1200px;
  }
`;