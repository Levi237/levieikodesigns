import React        from 'react';
import styled       from 'styled-components';

const PricingSection = () => { 
    return(
        <Pricing>
        <div className="title"><h1>Pricing</h1></div>
          <div className="content">
            <div>
              <div>
                <h2>New Websites</h2>
                <ul>
                  <li>
                    <h3>Basic</h3>
                    <h4>Starting at <span>$800</span></h4>
                    <ul>
                      <li>Set up a new website with basic information and function.</li>
                      <li>Install simple plug-ins/apps</li>
                    </ul>
                  </li>
                  <li>
                    <h3>Pro+</h3>
                    <h4>Starting at <span>$2400</span></h4>
                    <ul>
                      <li>Set up a new website and creating a basic landing page, or a multi-page navigatable website.</li>
                      <li>Connect and integrate plug-ins, apps, and imports.</li>
                      <li>Add custom section or snippet into your pre-existing code for a specific upgrade</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <h2>New Single/Landing Page</h2>
                <ul>
                  <li>
                  <h3>Basic</h3>
                    <h4>Starting at <span>$240</span></h4>
                    <ul>
                      <li>Set up a new landing page with basic information and function.</li>
                      <li>Install simple plug-ins/apps</li>
                    </ul>
                  </li>
                  <li>
                  <h3>Pro+</h3>
                    <h4>Starting at <span>$800</span></h4>
                    <ul>
                      <li>Set up a new website with a profession look and user experience.</li>
                      <li>More built-in controls with reusable sections/components</li>
                      {/* <li>Add custom section or snippet into your pre-existing code for a specific upgrade</li> */}
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <h2>Existing Page Upgrades</h2>
                <ul>
                  <li>
                    <h3>Simple feature changes</h3>
                    <h4>Starting at <span>$40min</span></h4>
                    <ul>
                      <li>Add a Countdown snippet to your Image Banner. [ editable & reusable ]</li>
                      <li>Update copy and swap out photos</li>
                      <li>Connecting Klaviyo or MailChimp to your Platform.</li>
                    </ul>
                    <p>Doing multiple updates at once can save time.</p>
                  </li>
                  <li>
                    <h3>Basic section addition</h3>
                    <h4>Starting at <span>$80</span></h4>
                    <ul>
                      {/* <li>Update the look or basic function of an existing website</li> */}
                      {/* <li>Install a custom section or snippet into your pre-existing code for a specific upgrade</li> */}
                    </ul>
                  </li>
                  <li>
                    <h3>Landing Page remodel</h3>
                    <h4>Starting at <span>$120</span></h4>
                    <ul>
                      <li>Set up a new website and creating a basic landing page, or a multi-page navigatable website.  Includes simple plug-ins/apps</li>
                    </ul>
                  </li>
                  <li>
                    <h3>E-commerce Website remodel</h3>
                    <h4>Starting at <span>$1200</span></h4>
                    <ul>
                      {/* <li>Set up a new website and creating a basic landing page, or a multi-page navigatable website.</li> */}
                      {/* <li>Connect and integrate plug-ins, apps, and imports.</li> */}
                      {/* <li>Add custom section or snippet into your pre-existing code for a specific upgrade</li> */}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hide-this">
              <h2>What can drain a budget?</h2>
              <ul>
                <li>Poor image quality</li>
                <li>Copy/content mistakes</li>
                <li>Last minute major re-do's</li>
              </ul>
              <p>Some people are more pro-active than others and that can can make a huge difference in the end result.</p>
            </div>
          </div>
        <div>
          <h1>What I need from you.</h1>
          <ul className="horizontal-list">
            <li><h2>Your words</h2></li>
            <li><h2>Your images</h2></li>
            <li><h2>Your budget</h2></li>
          </ul>
        </div>
        </Pricing>
    );
};

const Pricing = styled.div`
  max-width: 1120px;
  margin: 0 auto;


  .title {}
  .content {
    > div:first-of-type {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    > div > div > ul > li + li {
      padding-top: 12px;
       
      > ul > li + li {
        padding-top: 0px;;
      }
    }
  }
  .hide-this { display: none; }
  h3 {
    span {
      width: 60px;
    }
  }
  h4 {
    font-weight: 200;
    span {
      font-weight:400;
    }
  }
`;

export default PricingSection;