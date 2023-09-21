import React, { useEffect, useRef, useState } from 'react';
import styled                                 from 'styled-components';

const WebsitePreview = () => {

  const ref = useRef();
  const [refState, setRefState] = useState();
  console.log("refState", refState);
  useEffect(() => {
      console.log('ref', ref.current);
      const observer = new IntersectionObserver((entries) => {
          const entry = entries[0];
          setRefState(entry.isIntersecting);
          if (entry.isIntersecting){
            entry.target.classList.remove('hide-intersection');
            console.log('interested', entry.target);
            observer.disconnect();
          }
          console.log('entry', entry.target.className);
      });
      observer.observe(ref.current);
  }, []);

  return(
    <LocalSection className="scroll-snap-start">
      <div ref={ref}>
        <h2>Seeing the Big Picture</h2>
        <p>Start with a plan and wireframe. You'll be surprised at what we can develop!</p>
        <div className="">
            <img className="desktop" src="MomoMuscle2020_Website-desktop.png" alt="Website display with Momo Muscle built 2020"/>
            <img className="mobile" src="MomoMuscle2020_Website-mobile.png" alt="Website display with Momo Muscle built 2020"/>
        </div>
        <b>MomoMuscle.co 2020 design</b>
      </div>
    </LocalSection>
  );
};

const LocalSection = styled.section`
  position: relative;
  text-align: center;
  margin: 0 auto;
  padding: var(--large-section-padding) 0 calc(var(--large-section-padding) / 2);
  // background-color: var(--lightgrey);
  background-image: linear-gradient(hsla(var(--hsl-lightgrey), 0.72),hsla(var(--hsl-lightgrey), 0.80)),url('glass-building.jpg');
  background-size: cover;

  .mobile {
    display: inline-block;
  }
  .desktop {
    display: none;
  }
  
  > div {
    width: 90%;
    color: var(--darkgrey);
    max-width: 800px;
    margin: 0 auto;
    > h1 {
      color: var(--darkblue);
      font-size: 32px;
      margin: 0 auto!important;
      padding-bottom: 6px;
    }
    > div {
      width: 90%;
      margin: 0 auto;
      > img {
        width: 90%;
        margin: 15px 5%;
      }
    }

    > p {
      text-align: center;
      max-width: 1000px;
      margin-block-start: 0;
      margin-block-end: 20px;
    }   
  }
  @media screen and (min-width: 640px) {
    .mobile {
      display: none;
    }
    .desktop {
      display: inline-block;
    }
    
    > div {
      width: 100%;
      > h2 { font-size: min(var(--h2-vw), var(--h2-px)); }
      > div {
        > img {
          width: 100%;
          margin: 15px 0%;
        }
      }
    }
  }
  @media screen and (min-width: 1000px) {

  }
`;

export default WebsitePreview;