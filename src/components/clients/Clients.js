// PROJECT NOTES *************************************************************
// copy the DisplaySection example
// pass client instead, must map in parent.
// goak: when scroll into view, intersectionObserver triggers for each section

import React                    from 'react';
import styled                   from 'styled-components';

import ClientSection            from './ClientSection';

const Clients = ({ clientList }) => {

    const liveClients = clientList.filter(client => client.status === 'live');
    const mapClientList = liveClients.map((client, key) => {
        return( <ClientSection key={key} client={client}/> );
    });

    return(
        <Container>
            {mapClientList}          
        </Container>
    );
};

const Container = styled.div`
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

export default Clients;