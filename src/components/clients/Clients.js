// PROJECT NOTES *************************************************************
// copy the DisplaySection example
// pass client instead, must map in parent.
// goal: when scroll into view, intersectionObserver triggers for each section

import React                    from 'react';
import styled                   from 'styled-components';

import ClientSection            from './ClientSection';

const Clients = ({ projects }) => {

    const liveClients = projects.filter(client => client.status === 'live');
    const mapProjects = liveClients.map((client, key) => {
        return( <ClientSection key={key} client={client}/> );
    });

    return(
        <Container>
            {mapProjects}          
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

export default Clients;