// PROJECT NOTES *************************************************************
// copy the DisplaySection example
// pass client instead, must map in parent.
// goak: when scroll into view, intersectionObserver triggers for each section

import React, { useEffect, useRef, useState } from 'react';
import styled                                 from 'styled-components';

const ClientSection = ({ client }) => {
// Add intersection observer to the section 
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

    const tasksList = client.tasks.map((r, k) => {
        return <li key={k}><span>{r}</span></li>
    });
    // console.log('client', client);
    return(
        <Wrapper ref={ref} className={`hide-intersection`}>
            <MobileImg href={`https://${client.link}`} target="_blank" rel="noreferrer">
                <img src={client.image} alt={client.title}/>
            </MobileImg>
            <section>
                <h2>
                    {client.title}
                    {/* &nbsp;<small className="no-break">{client.startDate}</small> */}
                </h2>
                <a target="_blank" rel="noopener noreferrer" href={`https://${client.link}`}>
                    {client.link}
                </a>
                <p>
                    “{client.statement}”
                </p>
                <MobileColumns className="mobile-columns">
                    <ul>
                        {tasksList}
                    </ul>
                    {client.image2 && <img className="mobile-block" src={client.image2} alt={client.title}/>}
                </MobileColumns>
                <br></br>
            </section>
            <DesktopImg href={`https://${client.link}`} target="_blank" rel="noreferrer">
                <img src={client.image} alt={client.title}/>
                {client.image2 && <img className="image-2" src={client.image2} alt={client.title}/>}
            </DesktopImg>
            <hr/>
        </Wrapper>
    );
};


const Wrapper = styled.div`
// animation for interestionObserver class.remove('hide-intersecion')
    opacity: 1;
    // margin-top: 0;
    transition: 1.6s ease;

    margin: 0 auto;
    padding: 20px 0;
    max-width: 800px;
    text-align: center;

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
    >hr {
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
        > hr {
            display: none;
        }
        section > hr {
            display: block;
            width: 80%;
            margin: 5% auto;
        }
        ul {
            padding-left: 24px;
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
const MobileColumns = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;
    @media screen and (max-width: 900px) {
        grid-template-columns: 60% 40%;
    }
`;

export default ClientSection;