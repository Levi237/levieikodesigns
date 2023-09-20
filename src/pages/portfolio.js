import React                from 'react';
import styled               from 'styled-components';

import AnimateText          from '../components/snippets/AnimateText';

import Projects             from '../components/sections/projects/Projects';
import PastProjects         from '../components/sections/inactive-projects/InactiveProjects';
import Footer               from '../components/Footer';

 const PortfolioPage = ({ projects }) => {
    return (
        <Container className="container">
            <h1 className="header">
                <AnimateText animate="slide" fade="on" speed="fast" text="Projects" />
            </h1>
            <Projects projects={projects}/>
            <h1>PAST WORK</h1>
            <br/>
            <PastProjects projects={projects}/>
            <Footer/>      
        </Container>
    );
};

const Container = styled.div`
    @media screen and (max-width: 745px){
        padding-top: var(--section-padding);
    }
`;

export default PortfolioPage;