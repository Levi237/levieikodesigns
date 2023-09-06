import React  from 'react';
import styled from 'styled-components';

const PastProjects = ({ projects }) => {
    const pastProjects = projects.filter(client => client.active_project === false);
    const mapPastProjects = pastProjects.map((client, key) => {
        const technologiesList = client.technologies.map((c, k) => {
            return <span key={k}>{c}</span>
        });
        const tasksList = client.tasks.map((r, k) => {
            return <li key={k}><span>{r}</span></li>
        });
        return(
            <Project key={key}>
                <section>
                    <img src={client.image} alt={client.title}/>
                </section>
                <section>
                    <h2>{client.title}</h2>
                    <small>{client.startDate}</small>
                    <h4>{client.link}</h4>
                    <p>“{client.statement}”</p>
                    <ul>{tasksList}</ul>
                    <h3>Technologies: </h3>
                    {technologiesList}
                </section>
            </Project>
        );
    });
    return(
        <Container>
            {mapPastProjects}                
        </Container>
    );
};

const Project = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 21%;
    margin: 40px 1%;
    text-align: center;
    
    section {
        text-align: left;
        &:first-of-type {
            overflow: hidden;
            height: 13.33vw;
            max-height: 160px;
            margin-bottom: 20px;
        }
        span::after {
            content ' | ';
        }
        span:last-of-type::after {
            content: '';
        }
    }
    
    img {
        width: 100%;
        margin-top: 5%;
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
    }
    h3 {
        font-size: 16px;
    }
    h4 {
        font-size: 14px;
        font-weight: 100;
    }
    p {
        margin: 10px auto;
        // font-style: italic;
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
        width: 45%;
        margin: 0 0%;
        section {
            text-align: left;
            &:first-of-type {
                height: 21.33vw;
            }
            &:last-of-type {
                margin-bottom: 40px;
            }
        }
        h2 {
            font-size: 4.6vw;
        }
        h4 {
            padding-top: 1vw;
        }
        h3, h4, p, ul, li, span{
            font-size: 3.6vw;
        }

    }
`;

const Container = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    @media screen and (max-width: 640px) {
        max-width: 600px;
        section, img {
            width: 90%;
            margin: auto;
        }
    }
`;

export default PastProjects;