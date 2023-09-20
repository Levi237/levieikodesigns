import React   from 'react';
import styled  from 'styled-components';

const EmailMarketing = () => {
  return(
    <LocalSection className="scroll-snap-start">
      <h2 className="desktop-block">Email Marketing Solutions</h2>
      <h2 className="mobile-block">Email Marketing</h2>
      <h2 className="mobile-inline">Solutions</h2>
      <div>
        <section className="mobile">
        <img src="/klaviyo-dashboard.jpg" alt="MailChimp Example Automation"/>
            <img src="/mailchimp-forms.png" alt="MailChimp Example Forms"/>
        </section>
        <h3>How using an email service provider can help.</h3>
        <div>
          <section>
            <ul>
              <li>
                Get in that Inbox, <b>not spam</b>
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
                Develop stronger relationships w/ audience
              </li>
              <li>
                Create effective promotional campaigns
              </li>
              <li>
                Track opens, clicks and user activity
              </li>
            </ul>
          </section>
          <section className="desktop">
            <img src="/klaviyo-dashboard.jpg" alt="MailChimp Example Automation"/>
            <img src="/mailchimp-forms.png" alt="MailChimp Example Forms"/>
          </section>
        </div>
      </div>
    </LocalSection>
  );
};


const LocalSection = styled.section`
  position: relative;
  width: 100vw;
  max-width: 100vw;
  width: 100%;
  height: auto;

  padding-top: var(--section-padding);
  text-align: center;

  > h2 {
    font-size: 11.5vw;
    color: #fff;
    text-shadow: 2px 2px 2px rgba(0,0,0,.5);

    margin-bottom: -5.3vw !important;
    background-color: var(--background-color);
    padding: 2px 22px;
    display: inline-block;
    &:last-of-type {
      margin-top: 4vw!important;
    }
  }
  > div {
    border: 1px solid var(--lightgrey);
    width: 90%;
    max-width: 800px;
    margin: 0 auto;
    > h3 {
      letter-spacing: .33vw;
      text-transform: uppercase;
      text-align: center;
      font-size: 4.6vw;
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
        margin-top: -31%;
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
            color: #fff;
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

    > h2 {
      font-size: var(--h2);
      margin-bottom: -20px!important;
      &:last-of-type {
        margin-top: 12px!important;
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
          margin-top: -31%;
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
            width: 50%;
            min-width: 400px;
          }
          &:last-of-type {
            width: 50%;
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

export default EmailMarketing;