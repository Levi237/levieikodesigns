import React, { Component } from 'react';
import styled               from 'styled-components';

import Footer               from '../Footer';
import DisplaySection               from './DisplaySection';
export default class ServicesPage extends Component {
  state = {
    services: {
      email: {
        title: `Email Marketing`,
        subtitle: `Blasts & Automations`,
        subtext: `Building better relationships through targeted email campaigns.`,
        paragraph: `Email marketing is an excellent way to strengthen your relationship with your customers. `,
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
          'services/bravo-video.png', 
          'services/divinity-youtube.png',
          'services/red5-collection.png'
        ],
        position: {
          text: 'right bottom'
        }
      },
      websites: {
        title: `Online Businesses`,
        subtitle: `WEB DEVELOPMENT`,
        subtext: `and much, much more.`,
        paragraph: `For many small businesses, starting an online store is a big step.  You have a great idea, you have the market, all you need is to open shop!  Not only do I build websites, but I help get your whole digital storefront up and running.`,
        listName: `What I do:`,
        checklist: [
          'Design & develop eCommerce websites',
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

        <BarNav id="scroll-to">
          <h1>LEVI EIKO DESIGNS</h1>
        </BarNav>

        <LocalBodyWrapper>  
          <DisplaySection service={services.websites}/>
          <DisplaySection service={services.graphics}/>
          <DisplaySection service={services.email}/>
          <Footer/>
        </LocalBodyWrapper>

      </LocalWrapper>
    );
  };
}

// const Checklist = styled.div`

// > section {
//   width: 100%;
//   display: flex;
//   > div {
//     margin-bottom: 6px;
//     &:first-of-type {
//       width: 10px;
//       padding-left: 40px;
//       color: var(--blue);
//     }
//     &:last-of-type {
//       width: calc(100% - 10px);
//       padding-left: 20px;
//     }
//   }
// }
// `;
// const GraphicsBanner = styled.div`
//   color: var(--darkgrey);

//   display: grid;
//   grid-template-rows: auto auto auto;
//   grid-template-columns: 30px 1fr 1fr 30px;
//   column-gap: 10px;
//   row-gap: 10px;
//   grid-template-areas: '. title title .' '. text collage .' '. gallery gallery .';
//   @media screen and (max-width: 749px) {
//     grid-template-rows: auto auto auto auto;
//     grid-template-columns: 100%;
//     grid-template-areas: ' title ' ' text ' ' collage ' ' gallery ';
//   }

//   .title {
//     grid-area: title;
//     // background-color: lightgray;
//   }
//   .text {
//     grid-area: text;
//     // background-color: #fff;
//     }
//   }
//   .collage {
//     grid-area: collage;
//     display: inline-grid;
//     grid-template-areas: 'main main' 'second third';
//     grid-template-rows: auto auto;
//     grid-template-columns: 1fr 1fr;
//     column-gap: 10px;
//     row-gap: 10px;
    
//     img { 
//       width: 100%; 
//     }

//     .main {
//       grid-area: main;
//       background-color: blue;
//     }
//     .second {
//       grid-area: second;
//       background-color: yellow;
//     }
//     .third {
//       grid-area: third;
//       background-color: red;
//     }
//   }
//   .gallery {
//     grid-area: gallery;
//     background-color: pink;
//     display: inline-grid;
//     grid-template-rows: 1fr;
//     grid-template-columns: repeat(6, 1fr);
//     text-align: center;
//     button {
//       background: transparent;
//       border: none;
//       padding: 0;
//     }

//     .left-btn {
//       grid-area: left-btn;
//       background-color: green;
//     }
//     .right-btn {
//       grid-area: right-btn;
//       background-color: red;
//     }
//     .scroll {
//       grid-area: scroll;
//       background-color: blue;
//       overflow-x: scroll;
//       height: 120px;
//       width: 100%;
//       > div { 
//         section {
//           min-height: 100px; 
//           min-width: 100px;
//           display: inline-block;
//         }
//       }
//     }
//   }

//   h1 {
//     // margin: 0!important;
//   }
//   @media screen and (max-width: 749px) {

//   }
// `;

const LocalWrapper = styled.div`
  scroll-snap-type: y mandatory;
  height: 100vh;
  width: 100vw;
  overflow: scroll;
`;
const BarNav = styled.nav`
  height: calc(50px + 5vw);
  z-index: 2;
  background-color: var(--blue);
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

  // .down-arrow-class {
  //   position: fixed;
  //   bottom: 2vw;
  //   left: calc(50vw - 51px);
  // }

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