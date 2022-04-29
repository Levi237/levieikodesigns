import React    from 'react';
import styled   from 'styled-components';

import FlipCards from './FlipCards';

const ProjectsFlip = ({ projects }) => {   
    return(
        <Container>
            <br/><br/><br/><br/>
            <h1>Past Projects</h1>
            <FlipCards projects={projects} />
        </Container>
    );
};

const Container = styled.div`
    text-align: center;
    h3 {
        text-align: center;
        padding-bottom: 10px;
        color: rgba(255,255,255,0.9);
    }
    @media screen and (max-width: 760px) {
        display: none;
    }
`;

export default ProjectsFlip;