import React from 'react';
import styled from 'styled-components';

const LeviLogo = () => {
    const svgLogo = 
    <svg version="1.1" width="100%" height="100%" viewBox="0 0 500 500">
      <rect fill="transparent" stroke-width="0" width="500" height="500" x="0" y="0" />
      <path stroke-width="0" 
        d="M0 0 H75 V300 H265 V425 H500 V500 H0, M140 0 H500 V125 H265 V250 H140, M325 175 H500 V375 H325 V300 H425 V250 H325 Z"/>
    </svg>

    return (
        <LogoWrapper>
            <h3>
                built
            </h3>
            <h3>
                by:
            </h3>
            <h2>
                L<small>evi</small><br/>
                E<small>iko.com</small>
            </h2>
            <section>
                { svgLogo }
            </section>
        </LogoWrapper>
    );
};

const LogoWrapper = styled.a`
    display: inline-block;
    height: 40px;
    text-transform: uppercase;
    color: #fff;
    position: relative;

    h2 {
        line-height: 80%!important;
        margin: 0;
        font-size: 18px;
        font-weight: 500;
        margin: 4px 0 0 0;
        text-align: left;
        color: #fff;
        text-align: left;
        letter-spacing: 1px;
    }
    h3 {
        line-height: 90%!important;
        margin: 0;
        font-size: 13px;
        font-weight: 100;
        color: #fff;
        text-align: left;
        letter-spacing: 0px;
        &:last-of-type {
            margin-top: 2px;
        }
    }

    > section {
        position: absolute;
        top: 0;
        right: 2px;
        
        svg {
            height: 40px;
            width: 40px;
    
            path {
                fill: #fff;
            }
        }
    }

`;
export default LeviLogo;