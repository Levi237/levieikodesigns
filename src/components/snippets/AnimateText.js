//==> Split text and fade-in, slide-in animate
//==> Select speed when passing into component: fast, steady, slow
//==> Font size defaults to parent element
//======> import AnimateText from '../AnimateText';
// <h1>
// <AnimateText 
//   animate="drop:slide"
//   fade="on:off" 
//   speed="fast:steady:slow"
//   text="Services" 
// /></h1>

import React    from 'react';
import styled   from 'styled-components';

const AnimateText = ({ animate, fade, speed, text }) => {
    // animate in { text } letters by removing .hide from classList
    let time = 600 ;
    if ( speed === 'slow'){ time = 1200; };
    if ( speed === 'fast'){ time = 300; };
    if ( speed === 'fastest'){ time = 240; };
    
    const word = text ? text : 'Placeholder';
    const splitWord = word.split('');
    const mapSplitWord = splitWord.map(( letter, key ) => {
        return(
            <span className={`letter hide fade-${ fade } ${ speed } ${ animate }`} key={ key } >
                { letter }
                <span>{ letter }</span>
            </span>
        );
    });
    let char = 0;
    let timer = setInterval(onTick, time);
    function onTick(){
        const span = document.querySelectorAll('.letter')[char];
        span.classList.remove('hide');
        char++;
        if(char === splitWord.length){
            clearInterval(timer);
            timer = null;
        }
    }
    return(
        <Word>{ mapSplitWord }</Word>
    );
};

const Word = styled.div`
    > span {
        opacity: 1;
        display: inline-block;
        position: relative;
        color: transparent; 
        > span {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            text-align: center;
            color: white; 
        }
    }

    > span.drop {
        > span {
            left: 0;
            transition: 2s ease;
        }
        // animate fade-in
        &.hide {
            &.fade-on { opacity: 0; }
            > span { top: -1rem; }
        }
        // animate fade-in speeds
        &.fastest { transition: top .3s ease-out, opacity 3s ease-in; }
        &.fast { transition: top .6s ease-out, opacity 4s ease-in; }
        &.steady { transition: top 1.2s ease-out, opacity 5s ease-in; }
        &.slow { transition: top 2.4s ease-out, opacity 6s ease-in; }
    }

    > span.slide {
        margin: 0rem 0rem; 
        // animate fade-in
        &.hide {
            &.fade-on { opacity: 0; }
            &.slide { margin: 0 1rem 0 -1rem; }
        }
        // animate fade-in speeds
        &.fastest { transition: margin .3s ease-out, opacity 3s ease-in; }
        &.fast { transition: margin .6s ease-out, opacity 4s ease-in; }
        &.steady { transition: margin 1.2s ease-out, opacity 5s ease-in; }
        &.slow { transition: margin 2.2s ease-out, opacity 5s ease-in; }
    }
`;

export default AnimateText;