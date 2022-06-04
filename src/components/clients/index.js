import React, { Component } from 'react';
import styled               from 'styled-components';

import Footer               from '../Footer';

import Skills               from './Skills';
import Clients              from './Clients';
import PastClients          from './PastClients';
import ProjectsFlip         from './ProjectsFlip';
import ProjectsMobile       from './ProjectsMobile';
// import Photography          from './Photography';

export default class PortfolioPage extends Component {
    state = {
        skills: [
            'Shopify',
            'WordPress',
            'Figma',
            'MailChimp',
            'Liquid',
            'React',
            'NodeJs',
            'GitHub',
            'Git',
            'Adobe PhotoShop',
            'IDX Broker',
            'Firebase',
            'JavaScript',
            'VanillaJS',
            'HTML',
            'CSS'
        ],
        projects: [{
            title: 'PokeGen',
            image: './projects/pokegen.png',
            link: 'https://pokegen.herokuapp.com/',
            lineOne: 'Build your own Pokemon Card MEME.',
            lineTwo: 'MongoDB, Express, NodeJS [MEN]'
        },{
        //     title: 'Hi Sierra!',
        //     image: './projects/hi-sierra.png',
        //     link: 'https://parkintel.herokuapp.com/home',
        //     lineOne: 'Learn more about the National Parks.',
        //     lineTwo:'Track unexpected closures.'
        // },{
        //     title: 'LA-HOP',
        //     image: './projects/la-hop.png',
        //     link: 'https://lahsa-la-hopv2.herokuapp.com/request',
        //     lineOne: 'Tools for the public to help',
        //     lineTwo: 'report homeless needs.'
        // },{
            title: 'BlackJack',
            image: './projects/blackjack.png',
            link: 'https://levi237.github.io/blackjack-reup/',
            lineOne: 'Black Jack circa 1990.',
            lineTwo: 'Javascript, VanillaJS, HTML5, CSS3'
        }]
    }
    render(){
        const { projects, skills } = this.state;
        return (
            <Container>
                <h1 className="titleDecoration">CLIENTS</h1>
                <Clients/>
                <Skills skills={skills}/>
                <h1>PAST CLIENTS</h1>
                <PastClients/>
                <ProjectsFlip projects={projects} /><ProjectsMobile projects={projects} />
                {/* <Photography/> */}
                <Footer/>      
            </Container>
        );
    };
};

const Container = styled.div`
    background-color: rgba(19,17,17,.8);
    padding: 80px 0 0;
    margin: 0 auto!important;

    @media screen and (max-width: 745px){
        padding-top: 60px;
        > h1 {
            padding: 20px;
        }
    }
`;