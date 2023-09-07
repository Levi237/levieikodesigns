// PROJECT NOTES *************************************************************
// copy the DisplaySection example
// pass project instead, must map in parent.
// goak: when scroll into view, intersectionObserver triggers for each section

import React, { useEffect, useRef } from 'react';
// import React, { useEffect, useRef, useState } from 'react';
import styled                                 from 'styled-components';

const ProjectCard = ({ project }) => {
    let mobile = project.image.replace('/', '/mobile/');
    let desktop = project.image.replace('/', '/desktop/');

// Add intersection observer to the section 
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
            // console.log('entry', entry.target.className);
        });
        observer.observe(ref.current);
    }, []);

    const tasksList = project.tasks.map((r, k) => {
        return <li key={k}><span>{r}</span></li>
    });
    // console.log('project', project);
    return(
        <Wrapper ref={ref} className={`hide-unobserved`}>
            <MobileImg href={`https://${project.link}`} target="_blank" rel="noopener noreferrer">
                <img className="mobile-block" src={`./${mobile}`} alt={project.name}/>
            </MobileImg>
            <section>
            {/* {project.image2 && <img className="mobile-block mobile-second-image" src={project.image2} alt={project.name}/>} */}
                <h2>{project.name}</h2>
                <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer">
                    {project.link}
                </a>
                <p>“{project.statement}”</p>
                <ul>{tasksList}</ul>
                <br/>
            </section>
            <DesktopImg href={`https://${project.link}`} target="_blank" rel="noopener noreferrer">
                <img className="desktop-block" src={`./${desktop}`} alt={project.name}/>
                {project.image2 && <img className="image-2" src={project.image2} alt={project.name}/>}
            </DesktopImg>
            <hr/>
        </Wrapper>
    );
};


const Wrapper = styled.div`
    padding: 20px 0;
    max-width: 800px;
    text-align: center;

    // animation for interestionObserver class.remove('hide-intersecion')
    opacity: 1;
    margin: 0 auto;
    transition: 1.6s ease;
    &.hide-unobserved {
        opacity: 0!important;
        margin-top: 20px!important;
        transition: 1s ease;
    }


    .mobile-second-image {
        float: right;
        width: 35%;
    }

    section {
        width: 40%;
        padding: 0 5%;
        max-width: 400px;
        display: inline-block;
        vertical-align: top;
        text-align: left;
        span::after {
            content ' | ';
        }
        span:last-of-type::after {
            content: '';
        }
    }
    
    > a {
        width: 50%;
        max-width: 400px;
        img {
            width: 100%;
            box-shadow: 0 1px 12px rgba(0,0,0,.2);
        }
    }

    a {
        color: var(--blue)!important;
        text-decoration: none;
        margin-bottom: 40px;
        &:hover {
            text-decoration: underline;
        }
    }
    h1 {
        margin-bottom: 10px!important;
    }
    h2 {
        font-weight: 500;
        small {
            font-weight: 100;
        }
    }
    h3 {
        font-size: 18px;
    }
    p {
        font-size: 16px;
        margin: 10px auto;
    }
    ul, span {
        font-size: 16px;
    }
    ul {
        margin: 10px auto!important;
        line-height: 140%;
    }
    hr {
        height: 1px;
        background-color: #fff;
        border: none;
        width: 100%;
        margin: 0px auto 20px;
    }

    section > hr {
        display: none;
    }
    @media screen and (max-width: 900px) {
        section {
            width: 90%;
            margin-top: 16px;
        }
        > a {
            width: 90%;
            max-width: 400px;
            margin: 5% auto 6px;
            img {
                width: 100%;
                box-shadow: 0 1px 12px rgba(0,0,0,.2);
            }
        }
        hr {
            display: none;
        }
        section > hr {
            display: block;
            width: 80%;
            margin: 5% auto;
        }
        ul {
            padding-left: 10vw;
        }
        li span {
            position: relative;
            left: -5px;
          }
    }
`;
const DesktopImg = styled.a`
    display: inline-block;
    position: relative;
    @media screen and (max-width: 900px) {
        display: none;
    }
    .image-2 {
        position: absolute;
        left: 0;
        opacity: 0;
        transition: .3s ease;
    }
    &:hover {
        .image-2 {
            opacity: 1;
        }
    }
`;

const MobileImg = styled.a`
    display: none;
    @media screen and (max-width: 900px) {
        display: block;
`;

export default ProjectCard;