// PROJECT NOTES *************************************************************
// copy the DisplaySection example
// pass project instead, must map in parent.
// goak: when scroll into view, intersectionObserver triggers for each section

import React, { useEffect, useRef } from 'react';
// import React, { useEffect, useRef, useState } from 'react';
import styled                                 from 'styled-components';

const InactiveProjectCard = ({ project }) => {
    // Add intersection observer to the section 
    let mobile = project.image.replace('/', '/mobile/');
    let desktop = project.image.replace('/', '/desktop/');

    const ref = useRef();
    // const [refState, setRefState] = useState();
    // console.log("refState", refState);
    useEffect(() => {
        // console.log('ref', ref.current);
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            // setRefState(entry.isIntersecting);
            if (entry.isIntersecting){
                entry.target.classList.remove('hide-unobserved');
                // console.log('interested', entry.target);
                observer.disconnect();
            }
        });
        observer.observe(ref.current);
    }, []);

    const technologiesList = project.technologies.map((c, k) => {
        return <span key={k}>{c}</span>
    });
    const tasksList = project.tasks.map((r, k) => {
        return <li key={k}><span>{r}</span></li>
    });

    return(
        <PastProjectCard ref={ref} className={`hide-unobserved`}>
            <section>
                <img className="mobile-block" src={`../${mobile}`} alt={project.name}/>
                <img className="desktop-block" src={`../${desktop}`} alt={project.name}/>
            </section>
            <section>
                <h2>{project.name}</h2>
                <small>{project.startDate} - {project.endDate}</small>
                <h4>{project.link}</h4>
                <p>“{project.statement}”</p>
                <ul>{tasksList}</ul>
                <div>{technologiesList}</div>
            </section>
        </PastProjectCard>
    );
};

const PastProjectCard = styled.div`
    width: 21%;
    text-align: center;

    // animation for interestionObserver class.remove('hide-intersecion')
    opacity: 1;
    transition: 2s ease;
    margin: 0 1% 40px;
    &.hide-unobserved {
        opacity: 0!important;
        margin-top: 20px!important;
        transition: 1s ease;
    }

    
    > section {
        text-align: left;
        &:first-of-type {
            overflow: hidden;
            height: 10vw;
            max-height: 160px;
            margin-bottom: 20px;
        }
        > div {
            display: flex;
            flex-wrap: wrap;
            align-items: start;
            justify-content: start;
        }
        > div > span {
            border-left: 1px solid grey;
            border-right: 1px solid grey;
            // border: 1px solid grey;
            padding: 0px .85vw;
            margin-bottom: 1px;
        }
        > div > span {
            margin-right: -1px;
        }
    }
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        // margin-top: 5%;
    }
    a {
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
    h1 {
        margin-bottom: 10px!important;
    }
    h2 {
        font-size: 21px;
        margin: 0 0 5px;
    }

    h4 {
        font-size: 14px;
        font-weight: 100;
    }
    p {
        margin: 10px auto;
        font-size: 14px;
    }
    ul, span {
        font-size: 14px;
    }
    ul {
        margin: 10px auto!important;
        padding-inline-start: 12px;
    }
    @media screen and (max-width: 640px) {
        width: 100%;
        margin: 0 0%;
        > section {
            text-align: left;
            &:first-of-type {
                height: 24vw;
                margin-bottom: 10px;
            }
            &:last-of-type {
                margin-bottom: 40px;
            }
            > div {
                margin-top: 5px;
            }
        }
        h2 {
            font-size: 4.6vw;
            margin: 0;
        }
        h4 {
            margin: .1vw 0;
            letter-spacing: .1vw;
        }
        p, ul {
            display: none;
        }
    }
`;

export default InactiveProjectCard;