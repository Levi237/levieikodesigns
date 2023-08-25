import React from 'react';
import styled   from 'styled-components';

const PortfolioHero = ({ clientList }) => {   
    clientList = clientList.filter(client => (client.status === 'live'));
    
    setInterval(carouselClients, 1000);
    function carouselClients(){ clientList.pop();}
    const mapList = clientList.map((client, k) => {

        return (
                <div style={{backgroundImage: `url(${client.image})`}}>
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