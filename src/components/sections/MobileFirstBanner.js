import React    from 'react';
import styled   from 'styled-components';

const MobileFirstBanner = () => {
  return(
    <Wrapper className="scroll-snap-start">
      <GridContainer>

      <section>
        <img class="square-image" src="https://pranawellnessworks.com/home-meet.png" alt="Prana Wellness meditation"/>
        <img class="phone-image" src="/pranawellnessworks-mobile-small.png" alt="mobile example"/>
      </section>

      <Content>
        <div>
          <h2>Mobile-First Web</h2>
          <h4>So.. you probably <u>won't</u> need an app for that..</h4>
          <p>
            Make your mobile-friendly website as effective as an app without all the added hassle.
          </p>
          <ul>
            <li>Accessible to a larger audience</li>
            <li>No downloads required for user</li>
            <li>Cheaper to start and maintain</li>
            <li>Test UX/UI before App development</li>
            <li>You'll still need a website</li>
          </ul>
        </div>
      </Content>

      </GridContainer>
    </Wrapper>
  );
};

const Content = styled.section`
max-width: 100%;
padding: 7vw 5vw 10vw;
overflow: hidden;
@media (min-width: 750px) {
  padding: 0 40px;
  height: 50vw;
  max-height: 400px;
}

  h2 { font-size: min(var(--h2-vw), var(--h2-px)); }
  h4 { font-size: min(var(--h4-vw), var(--h4-px)); }
  p { font-size: min(var(--p-vw), var(--p-px)); }
  ul { font-size: min(var(--p-vw), var(--p-px)); }

  ul:last-child { margin-bottom: 0; }
`;

const Wrapper = styled.div`
  width: 100vw;
  // height: 60vw;
  // max-height: 600px;
  padding: var(--large-section-padding) 0;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: var(--large-section-padding) 0;
`;

const GridContainer = styled.div`
  width: 100vw;
  height: auto;
  margin-top: var(--large-section-padding);
  margin-bottom: var(--large-section-padding);
  background-color: #fff;
  color: var(--black);
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (min-width: 750px) {
    height: 50vw;
    max-width: 800px;
    max-height: 400px;
  }
  @media (max-width: 749px) {
    grid-template-columns: 1fr;
    --margin: 10vw;
    width: 80vw;
    margin-left: var(--margin);
    margin-right: var(--margin);
  }

  .square-image {
    height: 50vw;
    width: 50vw;
    max-height: 400px;
    max-width: 400px;
    margin-top: max(-5vw, -40px);
    margin-left: max(-5vw, -40px);
  }
  .phone-image {
    width: 50%;
    position: absolute;
    right: 0;
    bottom: max(-5vw, -40px);
  }
  @media (max-width: 749px) {
    .square-image {
      height: 80vw;
      width: 80vw;
      margin-top: -10vw;
      margin-left: -10vw;
    }
    .phone-image {
      width: 34vw;
      right: -7vw;
      bottom: -7vw;
    }
  }
  >section {
    position: relative;
  }
  > section:last-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
    
  }

`;

export default MobileFirstBanner;