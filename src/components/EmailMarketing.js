import React, { Component }   from 'react';
import styled                 from 'styled-components';

export default class EmailMarketing extends Component {
  render(){
    return(
      <EmailMarketingWrapper>
        <h1 className="desktop-block">Email Marketing Solutions</h1>
        <h1 className="mobile-block">Email Marketing</h1>
        <h1 className="mobile-inline">Solutions</h1>
        <div>
          <section className="mobile">
            <img src="/mailchimp-automation.png"/>
            <img src="/mailchimp-forms.png"/>
          </section>
          <h3>How using an email service provider can help.</h3>
          <div>
            <section>
              <ul>
                <li>
                  Get in that Inbox, <b><i>not spam</i></b>
                </li>
                <li>
                  Create email automations & single blasts
                </li>
                <li>
                  Collect leads &amp; manage CSV files
                </li>
                <li>
                  Tag or target specific audience segments
                </li>
                <li>
                  Promote sales &amp; share value added content
                </li>
                <li>
                  Track opens, clicks and user activity
                </li>
              </ul>
            </section>
            <section className="desktop">
              <img src="/mailchimp-automation.png"/>
              <img src="/mailchimp-forms.png"/>
            </section>
          </div>
        </div>
      </EmailMarketingWrapper>
    );
  };
}

const EmailMarketingWrapper = styled.section`
  -webkit-scroll-snap-align: start;
  -moz-scroll-snap-align: start;
  -ms-scroll-snap-align: start;
  scroll-snap-align: start;
  position: relative;
  width: 100vw;
  max-width: 100vw;
  width: 100%;
  height: auto;
  padding-bottom: 80px;
  padding-top: 10px;
  text-align: center;
  > h1 {
    font-size: 11.5vw;
    color: #fff;
    text-shadow: 2px 2px 2px rgba(0,0,0,.5);
    margin-top: 60px!important;
    margin-bottom: -5.3vw !important;
    background-color: #fff;
    padding: 2px 22px;
    display: inline-block;
    &:last-of-type {
      margin-top: 4vw!important;
    }
  }
  > div {
    border: 1px solid var(--lightgrey);
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
    > h3 {
      font-family: 'Arial Narrow', Arial, sans-serif;
      letter-spacing: .33vw;
      text-transform: uppercase;
      text-align: center;
      font-size: 3.8vw;
      padding: 0vw 10vw 2.5vw!important;
      font-weight: 500;
      color: var(--blue);
    }
    img {
      width: 70%;
      margin: 5%;
      &:last-of-type {
        box-shadow: 0px 0px 4px rgba(0,0,0,.25);
        margin-left: 25%;
        margin-top: -28%;
      }
    }
    > div {
      padding: 0 0 20px;
      > section {
        display: block;
        display: flex;
        align-self: center;
        justify-content: center;
        &:first-of-type {
          width: 100%;
        }
        &:last-of-type {
          width: 100%;
        }
        > ul {
          margin-left: 8%:
          display: inline-block;
          vertical-align: middle;
          font-size: 3.6vw;
          color: white;
          text-align: left;
          li {
            padding-bottom: 12px;
            color: var(--darkgrey);
          }
        }
      }
    }
  }
  .mobile {
   display: inline-block; 
  }
  section.mobile {
    padding-top: 20px;
  }
  .desktop {
    display: none;
  }
  @media screen and (min-width: 640px) {

  }
  @media screen and (min-width: 840px) {
    .mobile {
      display: none; 
     }
     .desktop {
       display: inline-block;
     }

    padding-bottom: 120px;

    > h1 {
      font-size: 38px;
      margin-top: 80px!important;
      margin-bottom: -20px!important;
      &:last-of-type {
        margin-top: 5vw!important;
      }
    }
    > div {
      > h3 {
        letter-spacing: 1px;
        font-size: 20px;
        padding: 2.5vw 5vw 0!important;
      }
      img {
        &:last-of-type {
          margin-top: -25%;
        }
      }
      > div {
        display: flex;
        align-self: center;
        justify-content: center;
        padding: 0 0 20px;
        > section {
          display: inline-block;
          display: flex;
          align-self: center;
          justify-content: center;
          &:first-of-type {
            width: 37%;
          }
          &:last-of-type {
            width: 55%;
          }
          > ul {
            margin-left: 8%:
            display: inline-block;
            vertical-align: middle;
            font-size: 18px;
            color: white;
            li {
              padding-bottom: 16px;
            }
          }
        }
      }
    }
  }
`;