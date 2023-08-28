import React    from 'react';
import styled   from 'styled-components';

const MobileFirstBanner = () => {
  return(
    <LocalSection className="scroll-snap-start">
      <section>
        <div></div>
        <img src="/pranawellnessworks-mobile-small.png" alt="mobile example"/>
        <section></section>
      </section>
      <section>
        <div>
          <h1>Mobile-First Web</h1>
          <h3>So.. you actually <u>don't</u> need an app for that..</h3>
          <p>
            There are a lot of things a website can do that apps can do, but there are big perks when it comes to building a website that is mobile friendly first.
          </p>
          <ul>
            <li>Accessible to a larger audience</li>
            <li>No downloads required for user</li>
            <li>Cheaper to start</li>
            <li>Test UX/UI before App development</li>
            <li>You'll still need a website</li>
          </ul>
        </div>
      </section>
      <div></div>
    </LocalSection>
  );
};

const LocalSection = styled.section`
  position: relative;
  max-width: 100vw;
  // height: 100%;
  margin: 0 auto;
  padding-top: 20px;
  > div {
    position: absolute;
    width: 80vw;
    height: 80vw;
    border: 1px solid #fff;
    z-index: 0;
    top: calc(80vw + 20px);
    left: calc(10vw - 1px);
  }

  > section {
    position: relative;
    height: 90vw;
    width: 90vw;
    border: none;
    font-size: 0;
    z-index: 1;
    color: #fff;

    &:first-of-type {
      margin: 5vw 0 0 5vw;

      > div {
        height: 85%;
        width: 85%;
        position: absolute;
        left: 0;
        top: 0;
        background-image: url(https://pranawellnessworks.com/home-meet.png);
        background-size: cover;
      }
      > img {
        width: 36%;
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
    &:last-of-type {
      margin: 0 0 5vw 5vw;
      display: flex;
      align-items: start;
      justify-content: center;

      > div {
        width: 100%;
        display: inline-block;
        vertical-align: middle;
        padding: 0% 15% 0% 10%;
      }
      h1 {
        color: var(--blue);
        font-size: 8vw;
        margin: 0% 0% 5%!important;
        text-align: left;
      }
      h3 {
        font-size: 3.6vw;
        font-weight: 500;
        margin: 0!important;
      }
      h4 {
        font-size: 2.33vw;
        font-weight: 300;
        color: black;
      }
      p {
        font-size: 3.5vw;
        &:last-of-type {
          margin-bottom: 0!important;
          // font-weight: bold;
        }
      }
      ul, li {
        font-size: 15px;
      }
    }
  }
  @media screen and (min-width: 640px) {
    max-width: 1000px;
    height: 50vw;
    max-height: 500px;
    margin: 0 auto;
    padding-top: 0;
    font-size: 0; 
    display: flex;
    align-items: center;  
    justify-content: center; 
    > div {
      position: absolute;
      width: 70vw;
      height: 35vw;
      max-width: 700px;
      max-height: 350px;
      border: 1px solid #fff;
      background: #fff;
      z-index: 0;
      
      top: 7.5vw;
      left: 15vw;
    }
    > section {
      position: relative;
      height: 80%;
      width: 40%;
      border: none;
      font-size: 0;
      z-index: 1;
      margin: 0!important;
      &:last-of-type {
        
        display: flex;
        align-items: center;
        justify-content: center;
        > div {
          width: 100%;
          display: inline-block;
          vertical-align: middle;
          padding: 0% 15% 0% 10%;
        }
        h1 {
          color: var(--black);
          font-size: 3.6vw;
          margin: 0% 0% 5%!important;
          text-align: left;
        }
        h3 {
          font-size: 1.8vw;
        }
        h4 {
          font-size: 1vw;
        }
        p {
          font-size: 1.5vw;
          &:last-of-type {
            margin-bottom: 0!important;
          }
        }
      }
    }
  }
  @media screen and (min-width: 1000px) {
    > div {
      top: 75px;
      left: 150px;
    }
    > section {
      position: relative;
      height: 80%;
      width: 40%;
      border: none;
      font-size: 0;
      z-index: 1;
      color: var(--darkgrey);

      &:last-of-type {
        display: flex;
        align-items: center;
        justify-content: center;
        > div {
          width: 100%;
          display: inline-block;
          vertical-align: middle;
          padding: 0% 15% 0% 10%;
        }
        h1 {
          color: var(--black);
          font-size: 32px;
          margin: 0% 0% 5%!important;
          text-align: left;
        }
        h3 {
          font-size: 17px;
        }
        h4 {
          font-size: 10px;
        }
        p {
          font-size: 15px;
        }
      }
    }
  }
`;

export default MobileFirstBanner;