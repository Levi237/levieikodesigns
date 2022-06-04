// FOR MOBILE DISPLAY OF PERSONAL PROJECTS
import React, { Component }     from 'react';
import styled                   from 'styled-components';

export default class ProjectsMobile extends Component {
    render(){
        const { projects } = this.props
        const mapped = projects.map((x, k) => {
            return (
                <div key={k}>
                    <h3>{x.title}</h3>
                    <section>
                        {x.lineOne}
                        <br/>
                        {x.lineTwo}
                    </section>
                    <a 
                        alt={x.title}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={x.link}
                        >
                        <img src={x.image} alt={x.title}/>
                    </a>
                </div>
            )
        })
        return(
            <Container>
                <br/><br/><br/><br/>
                <h1>Fun Projects</h1>
                {mapped}
            </Container>
        );
    };
};

const Container = styled.div`
    display: none;

    h3 {
        text-align: center;
        padding-bottom: 10px;
        color: rgba(255,255,255,0.9);

    }
    div {
        display: inline-block;
        width: 20%;
        margin: 2.5%;
    }
    img {
        width: 100%;
        border-radius: 6px;
    }
    section {
        color: #fff;
        text-align: center;
        font-size: 12px;
        padding-bottom: 5px;
    }
    @media screen and (max-width: 760px) {
        display: block;
        div {
            width: 40vw;
            margin: 5vw;
        }
        section {
            font-size: 2.125vw;
            font-weight: 800;
        } 
    }

`;