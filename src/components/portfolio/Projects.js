// PROJECT NOTES *************************************************************
// copy the DisplaySection example
// pass client instead, must map in parent.
// goal: when scroll into view, intersectionObserver triggers for each section

import React                    from 'react';
import styled                   from 'styled-components';

// Insert card as independent function to enable scroll into view for each session
import ProjectCard            from './ProjectCard';

const Projects = ({ projects }) => {

    const liveProjects = projects.filter(project => project.active_project === true);
    const showProjects = liveProjects.map((project, key) => {
        return( <ProjectCard key={key} project={project}/> );
    });

    return(
        <Container>
            {showProjects}          
        </Container>
    );
};

const Container = styled.div`
    margin-top: 40px;
    position: relative;
    hr {
        height: 1px;
        background-color: #fff;
        border: none;
    }
    img {
        object-fit: cover;
    }
    @media screen and (max-width: 900px) {
        margin-top: 0px;
        section, img {
            width: 90%;
            margin: auto;
        }
        >hr {
            display: none;
        }
    }
    div:nth-of-type(odd) > a {
        float: left;
    }
    @media screen and (max-width: 900px) {
        div:nth-of-type(odd) > a {
            float: none;
        }
    }
`;

export default Projects;