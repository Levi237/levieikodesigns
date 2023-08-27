import React from 'react';
import styled   from 'styled-components';

const PortfolioHero = ({ projects }) => {   
    projects = projects.filter(project => (project.status === 'live'));
    
    setInterval(carouselClients, 1000);
    function carouselClients(){ projects.pop();}
    const mapList = projects.map((project, k) => {

        return (
                <div key={k} style={{backgroundImage: `url(${project.image})`}}>
                </div>
            );
        });
    return(
        <Container>
            {mapList}
        </Container>
    );
};

const Container = styled.div`
    overflow-x: scroll;
    position: relative;
    height: 42.5vw;
    width: 85vw;
    margin: 7.5vw;
    > div {
        position: absolute;
        background-size: cover;
        background-repeat: no-repeat;
        height: 100%;
        width: 100%;
        max-width: 100%;
        max-height: 100%;
    }
`;

export default PortfolioHero;