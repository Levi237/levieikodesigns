import React                            from 'react';
import styled                           from 'styled-components';

const FAQPage = () => { 
  return(
    <Container>
        <h1 className="titleDecoration">FAQ</h1>
        <div>
          <h2>The Basics</h2>
          <section>
            <h3>Should I use a website builder like Shopify or have my site coded?</h3>
            <p>
              If you have to integrate with a lot of third-party technologies or process online payments, it is best to use a website generator that can handle future updates better and offer a higher level of e-commerce needs.
              <br/>
              <span>Example: <a href="https://momomuscle.co">MomoMuscle.co</a></span>
            </p>
            <p>
              DJs, photographers, coffee shops, etc.  Your identity and your brand are what get people to fall in love with you.  
              Having a fully custom website gives you that extra professional look and <b>the freedom to really dream</b>.
              If you see an animation you like, then it's possible to build it.  
              Plus, with Firebase, hosting starts off free and only charges if you see a lot of traffic onto your site.
              <br/>
              <span>Example: <a href="https:/pranawellnessworks.com">PranaWellnessWorks.com</a></span>
            </p>
          </section>
          <section>
            <h3>Mobile-first Website -OR- APP?</h3>
            <p>
              In my humble opinion, mobile-first websites are the way of the future.  
              They do not require a download or take up space on your users phone.  
              You can view them on any device, which allows more people to access your brand.
            </p>
            <p>
              Apps have limitations, with cross-platform challenges, and may be limited to certain devices. 
              They do have their technical pros but it really depends on the scale of your audience and how much data you want to collect. 
            </p>
            <p>
              <span>
                Example: &nbsp;
              </span>
              I log onto FaceBook through Google Chrome because the FaceBook App file is too large and I don't want it digging more into my personal life.
            </p>
          </section>
          <section>
            <h3>What are alternatives to hiring a freelancer?</h3>
            <p>
              There are agencies that work in teams that can provide more services like copy writing, data analysis, surveys, etc.  
              Or you can DIY with WIX, SquareSpace, Weebly, etc... make sure to uncheck those additional services boxes that may incur future charges.
            </p>
          </section>
          <section>
            <h3>How much does a website cost?</h3>
            <p>
              A small business website can run anywhere from $500 for a static single page portfolio to $10,000 high-end e-commerce boutiques with animation and custom software programming.  
              Most MVP websites range between $1,200 for a basic multi-page with lead capture to $3,000 for a store when getting started.
              <br/>
            </p>
            <p>
              <b>Certain expenses vary, like hosting, domain name, SSL, email, thid party integrations and generally have monthly or annual expenses.</b>
            </p>
          </section>
          <section>
            <h3>This is a lot to process, where do I start?</h3>
            <p>
              I recommend starting with your minimum viable product (MVP).
              The sooner you start generating revenue the sooner you can invest in yourself!
            </p>
          </section>
          <section>
            <h3>What is the process like?</h3>
            <ul>
              <li>Consult & make a plan</li>
              <li>Set up & connect accounts</li>
              <li>Create content & design</li>
              <li>Develop website, test each step</li>
              <li>Troubleshoot & refine style</li>
              <li>LAUNCH!</li>
            </ul>
          </section>
          <h2>The Business</h2>
          <section>
            <h3>What kind of web developer is Levi?</h3>
            <p>
              I am a freelance full-stack <b>web developer</b> with <b>email marketing</b> and <b>graphic design</b> skills.  
              AKA a “ one man band.”  
              I can code your website or customize a third party hosting service like Shopify, WordPress, etc.  
              All with style 😉
            </p>
          </section>
          <section>
            <h3>A little bit about me:</h3>
            <p>
              I have been building websites since I was in highschool when I bought my first book on HTML.
              I consider myself to be more of the creative type that enjoys the technical side of art. 
              Web and graphic design have always been two of my greatest passions.  
            </p>
            <p>
              My other interests are in fitness and the outdoors. 
              I lived in New York City for 7 years where I became a top-tier trainer at Equinox. 
              My focus was on bio-mechanic, rehabilitative, full-body, rang-of-motion style training integrated with Yoga and Deep Tissue massage therapy.
              As for the hippie in me... I still camp, spelunk, rock climb, or backpack when ever I can to keep that close connection with nature.
            </p>
          </section>
          <section>
            <h3>What if I have a great product or brand but I can’t afford the price?</h3>
            <p>
              There are certain times when my gut tells me ‘this project is a good investment.’  
              I offer a complimentary consultation to discuss how I can assist you with your business plan and online presence.
            </p>
          </section>
          <h2>Common Questions</h2>
          <section>
            <h3>What are wireframes?</h3>
            <p>
              A wireframe is essentially is the blueprint for your website.  
              It can be drawn out on a chalk board or planned with design tools.
            </p>
            <div className="figma-example">              
                <h3>MomoMuscle.co 2020</h3>
                <img src="/faq/launch-example.png"/>
            </div>
          </section>
          <section>
            <h3>What is FIGMA?</h3>
            <p>
              FIGMA is currently one of the best Free <b>"collaborative interface design tool(s)."</b>
              <br/>
              Right now this is what I use to wireframe websites, and is an excellent way to share images.
            </p>
          </section>
          <section>
            <h3>What is an SSL certificate?</h3>
            <div>
              <p>
                It's the <b>s</b> in <b>https</b>, meaning <b>Secure</b>.
              </p>
              <p>
                SSL stands for "Secure Sockets Layer".
                In a nutshell, it means that your site is legit.
              </p>
              <p>
                Costs can be anywhere from a monthly fee, annual fee, or free with light traffic.
                I currently use Firebase because my website offers a specialized product and won't be seeing as many visits as a store or blog.  
              </p>
            </div>
            <div>
                <p>
                  Have you ever seen this? 👇
                </p>
              <img src="/faq/no-ssl_example.png"/>
            </div>
          </section>
          <div style={{textAlign: 'center', marginTop: '200px'}}>This FAQ was last updated April 2021.</div>
        </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  color: #181717;
  padding: 60px 0;
  margin: 0 auto!important;
  > div {
    margin: 60px auto;
    width: 80%;
    max-width: 800px;
    section {
      margin-bottom: 60px;
    }
    > h2 {
      margin: 20px 0 40px;
      font-size: 28px;
      text-align: center;
    }
    > section {
      > div {
        width: 40%;
        margin: 4px 10% 0 0;
        display: inline-block;
        vertical-align: top;
        > img {
          width: 90%;
          display: inline-block;
        }
      }
      > ul {
        line-height: 150%;
        margin-block-start: 1em;
        margin-top: 20px;
        margin-block-end: 1em;
        > ul {
          font-size: 14px;
        }
      }
    }
  }
  span {
    color: darkgrey;
  }
  .figma-example {
    width: 95%;
    margin: 2.5%;
    display: inline-block;
    font-size: 0;
    text-align: center;
  }
  .figma-example a {
    font-size: 16px;
  }
  .figma-example img {
    width: 100%;
  }
  .figma-example h3 {
    font-size: 18px;
    margin-bottom: 12px;
  }
  @media screen and (max-width: 745px){
    padding-top: 60px;  
    // > h1 {
    //     padding: 20px;
    // }
    > div {
      > section {
        h3 {
          font-size: 22px;
        }
        > div {
          width: 100%;
          margin: 0 auto;
          display: block;
          > img {
            width: 100%;
          }
        }
      }
    }
    .figma-example {
      width: 100%;
      margin: 5% 0%;
      display: inline-block;
      font-size: 0;
      text-align: center;
    }
  }
`;

export default FAQPage;