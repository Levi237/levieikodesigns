// PROJECT NOTES *************************************************************
// copy the DisplaySection example
// pass project instead, must map in parent.
// goak: when scroll into view, intersectionObserver triggers for each section

import React, { useEffect, useRef } from 'react';
// import React, { useEffect, useRef, useState } from 'react';
import styled                                 from 'styled-components';

const InactiveProjectCard = ({ project }) => {
    // Add intersection observer to the section 
    // Map in parent to create scroll into view effect
    const ref = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting){
                entry.target.classList.remove('hide-unobserved');
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
    const workList = project.work.map((r, k) => {
        return ( 
            <section className="work-type" key={k}>
                {k > 0 && '﹢ '}
                {r}&nbsp;
            </section>
        )
    });
    return(
        <PastProjectCard ref={ref} className={`hide-unobserved`}>
            <section>
                <img className="" src={`../projects/${project.domain}.png`} alt={project.name}/>
            </section>
            <section>
                <h2>{project.name}</h2>
                <h4>{project.domain}{project.ext}</h4>
                <small>{project.startDate} - {project.endDate}</small>
                {/* <p>“{project.statement}”</p> */}
                <ul className="desktop">{tasksList}</ul>
                {/* <div className="mobile work-type">{workList}<section>&nbsp;<span>website</span></section></div> */}
                {/* <div>{technologiesList}</div> */}
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
    
    .work-type {
        section {
            display: inline-block;
            font-weight: 600;
            font-size: 14px;
            text-transform: capitalize;
            font-weight: 300;
        }
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
            margin-bottom: 2px;
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
        padding-inline-start: 18px;
    }
    .mobile {
        display: none;
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
        p, ul.desktop {
            display: none;
        }
        .mobile {
            display: block;
        }
    }
`;

export default InactiveProjectCard;