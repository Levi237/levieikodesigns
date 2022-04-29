import React, { Component } from 'react';
import styled               from 'styled-components';


export default class ServicesPage extends Component {
  render(){

    const { service } = this.props;
    
    const mapChecklist = service.checklist.map((item, k) => {
      return <section key={k}><div>✔</div><div>{ item }</div></section>
    })
    const mapCollage = service.collage.map((item, k) => {
      return <div key={k}><img src={`./services/${item}`} alt="collage one"/></div>
    })
    return(
          <GraphicsBanner className={`${service.position.text}`}>
            <div className="title"><h1>{service.title}</h1></div>
            <div className="text">
              <h2>{service.subtitle}</h2>
              <i>{service.subtext}</i>
              <p>{service.paragraph}</p>
              <br/>
              <h4>{service.listName}</h4>
              <br/>
              <Checklist className="checklist">
                { mapChecklist }
              </Checklist>
            </div>
            <div className="collage">
              { mapCollage }
            </div>
            <div className="gallery">
              {/* <section>0</section>
              <section>0</section>
              <section>0</section>
              <section>0</section>
              <section>0</section>
              <section>0</section> */}
            </div>
          </GraphicsBanner>
    );
  };
}

const Checklist = styled.div`

> section {
  width: 100%;
  display: flex;
  > div {
    margin-bottom: 6px;
    &:first-of-type {
      width: 10px;
      padding-left: 40px;
      color: var(--blue);
    }
    &:last-of-type {
      width: calc(100% - 10px);
      padding-left: 20px;
    }
  }
}
`;
const GraphicsBanner = styled.div`
  color: var(--darkgrey);

  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: 30px 1fr 1fr 30px;
  column-gap: 10px;
  row-gap: 10px;
  &.left {
    grid-template-areas: '. title title .' '. text collage .' '. gallery gallery .';
  }
  &.right {
    grid-template-areas: '. title title .' '. collage text .' '. gallery gallery .';
  }
  @media screen and (max-width: 749px) {
    grid-template-rows: auto auto auto auto;
    grid-template-columns: 1fr;
    &.right.top,
    &.left.top {
      grid-template-areas: ' title ' ' text ' ' collage ' ' gallery'!important;
    }
    &.right.bottom,
    &.left.bottom {
      grid-template-areas: ' title ' ' collage ' ' text ' ' gallery'!important;
    }
  }

  .title {
    grid-area: title;
  }
  .text {
    grid-area: text;
    padding: 10px;
    }
  }
  .collage {
    grid-area: collage;
    display: inline-grid;
    grid-template-areas: 'main main' 'second third';
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    row-gap: 10px;
    padding: 10px;
    img { 
      width: 100%; 
    }

    div {
      border: 1px solid rgba(0,0,0,.1);
      // box-shadow: 0 0 200px rgb(0 0 0 / 12.5%);
      &:first-of-type {
        grid-area: main;
      }
      &:nth-of-type(2) {
        grid-area: second;
      }
      &:nth-of-type(3) {
        grid-area: third;
      }
    }
  }
  .gallery {
    grid-area: gallery;
    display: inline-grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(6, 1fr);
    text-align: center;
    button {
      background: transparent;
      border: none;
      padding: 0;
    }

    .left-btn {
      grid-area: left-btn;
    }
    .right-btn {
      grid-area: right-btn;
    }
    .scroll {
      grid-area: scroll;
      overflow-x: scroll;
      height: 120px;
      width: 100%;
      > div { 
        section {
          min-height: 100px; 
          min-width: 100px;
          display: inline-block;
        }
      }
    }
  }

  h1 {
    // margin: 0!important;
  }
  @media screen and (max-width: 749px) {

  }
`;

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