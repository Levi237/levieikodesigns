import React  from 'react';
import styled from 'styled-components';

import InactiveProjectCard from './InactiveProjectCard';

const PastProjects = ({ projects }) => {
    const pastProjects = projects.filter(project => project.active_project === false);
    const mapPastProjects = pastProjects.map((project, key) => {
        return(
            <InactiveProjectCard project={project} key={key}/>
        )
        // const technologiesList = project.technologies.map((c, k) => {
        //     return <span key={k}>{c}</span>
        // });
        // const tasksList = project.tasks.map((r, k) => {
        //     return <li key={k}><span>{r}</span></li>
        // });
        // return(
        //     <PastProject key={key}>
        //         <section>
        //             <img src={project.image} alt={project.name}/>
        //         </section>
        //         <section>
        //             <h2>{project.name}</h2>
        //             <small>{project.startDate} - {project.endDate}</small>
        //             <h4>{project.link}</h4>
        //             <p>“{project.statement}”</p>
        //             <ul>{tasksList}</ul>
        //             <div>{technologiesList}</div>
        //         </section>
        //     </PastProject>
        // );
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




export default PastProjects;