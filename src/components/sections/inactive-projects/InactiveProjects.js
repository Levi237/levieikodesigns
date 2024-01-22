import React  from 'react';
import styled from 'styled-components';

import InactiveProject from './InactiveProject';

const PastProjects = ({ projects }) => {
    const pastProjects = projects.filter(project => project.endDate !== null);
    const mapPastProjects = pastProjects.map((project, key) => {
        return( <InactiveProject project={project} key={key}/> )
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

    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: center;

    @media screen and (max-width: 640px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        padding: 0 10px;
    }
`;




export default PastProjects;