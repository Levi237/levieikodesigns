import React, { Component }     from 'react';
import styled      from 'styled-components';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

export default class FeaturedBanner extends Component {
  state = {
    featuredProject: {
      heroImage: ``,
      name: ``,
      title: ``,
      titleFont: `Rufina`,
      bodyFont: `Roboto`,
      technologies: [
        `Shopify`,
        `Liquid`,
        `Photoshop `,
        `FIGMA`,
        `SVG`,
        `VanillaJs`,
        `HTML5`,
        `CSS3`,
        `JavaScript`,
      ],
      link: ``
    }
  }
  render(){
    const { featuredProject } = this.state;

    const listTech = featuredProject.technologies.map((item, key) => {
      return <li key={key}>{item}</li>
    })

    return(
      <FeaturedWrapper>
        <video autoPlay="autoplay" muted="muted" preload="auto" src="https://cdn.shopify.com/s/files/1/0580/4199/1317/files/big_city_1.mp4?v=1629495526" playsInline="playsinline" title="life coach"></video>
        <div>
          <h1>FEATURED PROJECT</h1>
          <div className="two-box-container">
            <section className="left-side">
              <div className="info-box">
                <img className="logo-image" src="https://cdn.shopify.com/s/files/1/0580/4199/1317/files/Sathi_Roy_Logo_540x.png?v=1628695665" />
                <h2 style={{fontFamily: `${featuredProject.titleFont}`}}>Life Coach</h2>
                <a style={{fontFamily: `${featuredProject.bodyFont}`}} target="_blank" href="https://sathiroy.com">Checkout SathiRoy.com →</a>
              </div>
            </section>
            <section className="right-side">
              <div className="gradient-box" style={{fontFamily: `${featuredProject.bodyFont}`}} >
                <div>
                  <h3>Technologies:</h3>
                  <ul>
                    {listTech}
                  </ul>
                  <Link to={routes.PORT}>View My Portfolio →</Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </FeaturedWrapper>
    );
  };
}

const FeaturedWrapper = styled.section`
  height: calc(100vh - 50px - 5vw);
  overflow: hidden;
  position: relative;
  .logo-image {
    width: 52vw;
  }
  .two-box-container {
    margin: 0 auto;
    width: 100%;
    display: grid;
    height: calc(100vh - 165px - 17vw);
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    grid-template-areas: 'left-side' 'right-side';
    > section {
    }
  }
  .info-box {
    padding: 0 30px;
  }
  .gradient-box {
    background-image: linear-gradient(0deg, rgba(0,0,0,.9),rgba(0,0,0,.5) 80%, transparent);
    padding: 0;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
    height: 100%;
    position: relative;
    > div {
      padding: 30px;
      width: calc(100vw - 60px);
      position: absolute;
      bottom: 0;
    }
    ul {
      -webkit-column-count: 3;
      -moz-column-count: 3;
      column-count: 3;
      margin: 20px auto;
      li {
        margin: 5px 0;
      }
    }
  }

  a {
    font-size: 5vw;
    color: #fff!important;
    &:hover {
      color: grey!important;
    }
  }
  h2 {
    font-size: 12vw;
    margin: -8vw 0 5vw 48px;
  }
  h3 {
    font-size: 7.2vw;
  }

  > video {
    position: absolute;
    z-index: 1;
    width: 176vh;
    min-width: 100vw;
    min-height: 100vh;
    top: -5px;
  }
  > div {
    position: absolute;
    z-index: 2;
    width: 100%;

    > h1 {
      font-size: 12vw;
      padding: 20px 0;
      background-image: linear-gradient(to right, rgba(0,0,0,.8), transparent);
      width: 100%;
    }
  }
  @media screen and (min-width: 640px) {
    height: calc(100vh - 80px);

    h2 {
      font-size: 48px;
      margin: -36px 48px 48px;
    }
    h3 {
      font-size: 24px;
    }
  > div {
    > h1 {
      font-size: 38px;
      padding: 20px 0;
      background-image: linear-gradient(to right, transparent, transparent, rgba(0,0,0,.9), transparent, transparent);
    }
  }
  a {
    font-size: 18px;
  }
  .logo-image {
    width: 50%;
  }
  .gradient-box {
    margin-top: calc(100vh - 60vh - 200px);
    background-image: linear-gradient(rgba(0,0,0,.9),rgba(0,0,0,.5) 80%, transparent);
    padding: 0;
    > div {
      padding: 30px;
      width: auto;
      position: relative;
    }
    ul {
      -webkit-column-count: 3;
      -moz-column-count: 3;
      column-count: 3;
      margin: 20px auto;
      li {
        margin: 5px 0;
      }
    }
  }

  .two-box-container {
    margin: 0px auto;
    width: 80%;
    height: calc(100vh - 400px);
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'left-side right-side';
    > section {
      display: flex;
      align-items: center;
    }
  }
  .left-side {
    grid-area: left-side;
  }
  .right-side {
    grid-area: right-side;
  }
  .info-box {
    padding: 0px 30px 133px;
  }
}
`;