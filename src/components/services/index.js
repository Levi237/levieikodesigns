import React, { Component } from 'react';
import styled               from 'styled-components';

import Footer               from '../Footer';
import DisplaySection       from './DisplaySection';
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
          'Target audiences to promote sales & new products',
          'Upgrade your professional look',
          'Feature custom graphic designs',
          'Bypass the spam, get into the Inbox',
          'Create value-added content to build trust'
        ],
        collage: [
          'clients/coveredperfectly_3.png', 
          'clients/baddie-by-divinity_2.jpg',
          'clients/bravo-built_3.jpg'
        ],
        position: {
          text: 'left bottom'
        }
      },
      graphics: {
        title: `Graphic Design`,
        subtitle: `DIGITAL CREATIONS`,
        subtext: `It's all about manifesting your style.`,
        paragraph: `I help businesses create interesting, effective imagery for an elevated user experience.  Whether it's making your idea a reality, or coming up with a whole new look, I can help.`,
        listName: `What I do:`,
        checklist: [
          'Graphics / photoshop touchups',
          'Product imagery & packaging',
          'Marketing / advertising campaigns',
          'Logos & brand identity development'
        ],
        collage: [
          'services/red5-collection.png',
          'services/bravo-video.png', 
          'services/divinity-youtube.png'
        ],
        position: {
          text: 'right bottom'
        }
      },
      websites: {
        title: `Web Development`,
        subtitle: `ONLINE BUSINESSES w/ ECOMMERCE`,
        subtext: `and much, much more.`,
        paragraph: `For many small businesses, starting an online store is a big step.  You have a great idea, you have the market, all you need now is to open shop!  Not only do I build websites, but I help get your whole digital storefront up and running.`,
        listName: `What I do:`,
        checklist: [
          'Design & develop eCommerce websites & blogs',
          'Connect third party accounts, including email',
          'Assist in product design, cover images, etc.',
          'Create marketing strategies to capture leads & drive sales'
        ],
        collage: [
          'services/divinity-home.png', 
          'services/metamorphosis-banner.png',
          'services/momo-quiz.png'
        ],
        position: {
          text: 'left bottom'
        }
      }
    }
  }
  
  render(){
const { services } = this.state;
    return(
      <LocalWrapper>


        <LocalBodyWrapper>  
          <div>
          <DisplaySection service={services.websites}/>
          <DisplaySection service={services.graphics}/>
          <DisplaySection service={services.email}/>
          </div>
          <Footer/>
        </LocalBodyWrapper>

      </LocalWrapper>
    );
  };
}

const LocalWrapper = styled.div`
  scroll-snap-type: y mandatory;
  height: 100vh;
  width: 100vw;
  background-color: rgba(var(--color-white) / 100%);
  overflow: scroll;
`;
const BarNav = styled.nav`
  height: calc(50px + 5vw);
  z-index: 2;
  background-color: rgba(var(--color-blue) / 100%);
  -webkit-scroll-snap-align: start;
  -moz-scroll-snap-align: start;
  -ms-scroll-snap-align: start;
  scroll-snap-align: start;
  > h1 {
    margin: calc(5vw + 2px)!important;
    display: inline-block;
    font-size: 32px;
    line-height: 100%;
  }
  @media screen and (min-width: 945px) {
    height: 80px;
    > h1 {
      margin: 24px!important;
    }
  }
`;

const LocalBodyWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 5vw - 50px);
  background-color: #fff;
  overflow: scroll;
  position: relative;
  
  > div {
    width: 100%;
    margin: 0 auto;
    max-width: 1200px;
  }
  > h1 {
    color: var(--darkblue);
    font-size: 32px;
  }
  > section {
    width: 100%;
  }

  @media screen and (min-width: 945px) {
    height: calc(100vh - 80px);
  }
`;