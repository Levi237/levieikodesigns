import React  from 'react';
import styled from 'styled-components';


const FlipCards =({projects})=> {
    const projectSpread = projects.map((p, key) => {
        return(
            <CardContainer key={key}>
                <a target="_blank" rel="noopener noreferrer" href={p.link}>
                    <div>
                        <div>
                            <section>
                                <img src={p.image} alt="front"/>
                            </section>
                            <section>
                                <h2>{p.title}</h2> 
                                <p>{p.lineOne}</p> 
                                <p>{p.lineTwo}</p>
                            </section>
                        </div>
                    </div>
                </a>
            </CardContainer>
        );
    });
    return( <>{projectSpread}</> );
};

const CardContainer = styled.div`
    display: inline-block;
    p {
        font-size: 15px;
        font-weight: 800;
    }
    > a > div {
        background-color: transparent!important;
        width: 200px!important;
        height: 300px!important;
        margin: 25px;
        perspective: 1000px;
        &:hover > div {
            transform: rotateY(180deg);
        }
        > div {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            > section {
                position: absolute;
                width: 100%;
                height: 100%;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                &: last-of-type {
                    background-color:transparent!important;
                    color: #fff;
                    transform: rotateY(180deg);
                }
            }
        }
        img {
            width: 200px!important;
            height: 300px!important;
            border-radius: 6px;
        }
        @media only screen and (max-width: 1000px) {
            width: 20vw!important;
            height: 30vw!important;
            margin: 2.5vw;
            img {
                width: 20vw!important;
                height: 30vw!important;
            }
        }
    }
`;

export default FlipCards;