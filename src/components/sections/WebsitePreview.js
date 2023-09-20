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
        <h1>SEEING THE BIG PICTURE</h1>
        <p>Start with a plan and wireframe. You'll be surprised at what we can develop!</p>
        <b>MomoMuscle.co 2020 design</b>
        <div className="">
            <img className="desktop" src="MomoMuscle2020_Website-desktop.png" alt="Website display with Momo Muscle built 2020"/>
            <img className="mobile" src="MomoMuscle2020_Website-mobile.png" alt="Website display with Momo Muscle built 2020"/>
        </div>
      </div>
    </LocalSection>
  );
};

const LocalSection = styled.section`
  position: relative;
  padding-top: 40px;
  text-align: center;
  margin: 0 auto;
  background-color: var(--lightgrey);
  .mobile {
    display: inline-block;
  }
  .desktop {
    display: none;
  }
  
  > div {
    width: 90%;
    color: var(--darkgrey);
    // background: #fff;
    max-width: 800px;
    margin: 0 auto;
    > h1 {
      color: var(--darkblue);
      font-size: 32px;
      margin: 0 auto!important;
      padding-top: 40px;
      padding-bottom: 10px;
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
      // margin: 10px 20%;
    }    
  }
  @media screen and (min-width: 640px) {
    padding-top: 0;
    
    .mobile {
      display: none;
    }
    .desktop {
      display: inline-block;
    }
    
    > div {
      width: 100%;
      > h1 {
        font-size: 38px;
      }
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