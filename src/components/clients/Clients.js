import React, { useRef } from 'react';
import styled               from 'styled-components';

const Clients = ({ clientList }) => {
    const myRef = useRef();

    const liveClients = clientList.filter(client => client.status === 'live');
    const mapClientList = liveClients.map((client, key) => {
        const tasksList = client.tasks.map((r, k) => {
            return <li key={k}><span>{r}</span></li>
        });
        return(
            <ClientContainer key={key} ref={myRef}>
                <MobileImg href={`https://${client.link}`} target="_blank">
                    <img src={client.image} alt={client.title}/>
                </MobileImg>
                <section>
                    <h2>
                        {client.title}&nbsp;<small className="no-break">{client.startDate}</small>
                    </h2>
                    <a target="_blank" rel="noopener noreferrer" href={`https://${client.link}`}>
                        {client.link}
                    </a>
                    <p>
                        “{client.statement}”
                    </p>
                    <MobileColumns className="mobile-columns">
                        <ul>
                            {tasksList}
                        </ul>
                        {client.image2 && <img className="mobile-block" src={client.image2} alt={client.title}/>}
                    </MobileColumns>
                    <br></br>
                </section>
                <DesktopImg href={`https://${client.link}`} target="_blank">
                    <img src={client.image} alt={client.title}/>
                    {client.image2 && <img className="image-2" src={client.image2} alt={client.title}/>}
                </DesktopImg>
                <hr/>
            </ClientContainer>
        );
    });
    return(
        <Container>
            {mapClientList}          
        </Container>
    );
};

const MobileColumns = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;
    ul {
        // width: 100%;
    }
    @media screen and (max-width: 900px) {
        grid-template-columns: 60% 40%;
    }
`;

const ClientContainer = styled.div`
    margin: 40px auto;
    max-width: 800px;
    text-align: center;

    section {
        width: 40%;
        padding: 0 5%;
        max-width: 400px;
        display: inline-block;
        vertical-align: top;
        text-align: left;
        span::after {
            content ' | ';
        }
        span:last-of-type::after {
            content: '';
        }
    }
    
    > a {
        width: 50%;
        max-width: 400px;
        img {
            width: 100%;
            box-shadow: 0 1px 12px rgba(0,0,0,.2);
        }
    }
    &:nth-of-type(odd) > a {
        float: left;
    }

    a {
        color: var(--blue)!important;
        text-decoration: none;
        margin-bottom: 40px;
        &:hover {
            text-decoration: underline;
        }
    }
    h1 {
        margin-bottom: 10px!important;
    }
    h2 {
        font-weight: 500;
        small {
            font-weight: 100;
        }
    }
    h3 {
        font-size: 18px;
    }
    p {
        font-size: 16px;
        margin: 10px auto;
    }
    ul, span {
        font-size: 16px;
    }
    ul {
        margin: 10px auto!important;
        line-height: 140%;
    }
    >hr {
        width: 100%;
        margin: 0px auto 20px;
    }

    section > hr {
        display: none;
    }
    @media screen and (max-width: 900px) {
        > a {
            width: 90%;
            max-width: 400px;
            margin: 5% auto 0;
            img {
                width: 100%;
                box-shadow: 0 1px 12px rgba(0,0,0,.2);
            }
        }
        &:nth-of-type(odd) > a {
            float: none;
        }
        >hr {
            display: none;
        }
        section > hr {
            display: block;
            width: 80%;
            margin: 5% auto;
        }
        ul {
            padding-left: 24px;
        }
        li span {
            position: relative;
            left: -5px;
          }
    }
`;

const DesktopImg = styled.a`
    display: inline-block;
    position: relative;
    @media screen and (max-width: 900px) {
        display: none;
    }
    .image-2 {
        position: absolute;
        left: 0;
        opacity: 0;
        transition: .3s ease;
    }
    &:hover {
        .image-2 {
            opacity: 1;
        }
    }
`;

const MobileImg = styled.a`
    display: none;
    @media screen and (max-width: 900px) {
        display: block;
`;
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
`;

export default Clients;