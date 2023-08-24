import React, { Component } from 'react';
import styled               from 'styled-components';


export default class ServicesPage extends Component {
  render(){
    const { service } = this.props;
    const mapChecklist = service.checklist.map((item, k) => {
      return <section key={k}><div>✔</div><div>{ item }</div></section>
    })
    const mapCollage = service.collage.map((item, k) => {
      return <div key={k}><img src={`./${item}`} alt="collage one"/></div>
    })
    return(
          <GraphicsBanner className={`${service.position.text}`}>
            <div className="title"><h1>{service.title}</h1></div>
            <div className="text">
              <h2>{service.subtitle}</h2>
              <span>{service.subtext}</span>
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

          </GraphicsBanner>
    );
  };
};

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
  color: #fff;

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
      height: 100%;
      object-fit: cover;
    }

    div {
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

  @media screen and (max-width: 749px) {

  }
`;
