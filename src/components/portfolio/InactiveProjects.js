import React  from 'react';
import styled from 'styled-components';

const PastProjects = ({ projects }) => {
    const pastProjects = projects.filter(project => project.active_project === false);
    const mapPastProjects = pastProjects.map((project, key) => {
        const technologiesList = project.technologies.map((c, k) => {
            return <span key={k}>{c}</span>
        });
        const tasksList = project.tasks.map((r, k) => {
            return <li key={k}><span>{r}</span></li>
        });
        return(
            <PastProject key={key}>
                <section>
                    <img src={project.image} alt={project.title}/>
                </section>
                <section>
                    <h2>{project.title}</h2>
                    <small>{project.startDate} - {project.endDate}</small>
                    <h4>{project.link}</h4>
                    <p>“{project.statement}”</p>
                    <ul>{tasksList}</ul>
                    <h3>Technologies: </h3>
                    {technologiesList}
                </section>
            </PastProject>
        );
    });
    return(
        <Container>
            {mapPastProjects}                
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    flex-gap: 5px;

    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: center;

    @media screen and (max-width: 640px) {
        max-width: 600px;
        section, img {
            width: 90%;
            margin: auto;
        }
    }
`;

const PastProject = styled.div`
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
        width: 50%;
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
            margin: 0;
        }
        h4 {
            padding-top: 1vw;
        }
        h3, h4, p, ul, li, span{
            font-size: 3.6vw;
            letter-spacing: .1vw;
        }

        // h3, h4, p, ul, li, span{
        //     font-size: 3.6vw;
        // }

    }
`;



export default PastProjects;