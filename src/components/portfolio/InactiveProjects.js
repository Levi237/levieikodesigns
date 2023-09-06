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
                    <img src={project.image} alt={project.name}/>
                </section>
                <section>
                    <h2>{project.name}</h2>
                    <small>{project.startDate} - {project.endDate}</small>
                    <h4>{project.link}</h4>
                    <p>“{project.statement}”</p>
                    <ul>{tasksList}</ul>
                    <div>{technologiesList}</div>
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
        // max-width: 600px;

        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        padding: 0 10px;

        section, img {
            // width: 90%;
            // margin: auto;
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



export default PastProjects;