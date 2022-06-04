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
        clientList: [{
            title: "PAU.ER Fitness",
            image: "./clients/pauerfitness.jpg",
            image2: "./clients/pauerfitness_2.jpg",
            link: "coveredperfectly.com",
            status: "development",
            startDate: "2022",
            endDate: "",
            statement: "Train with Jamee Pau.",
            responsibilities: ["Custom Shopify website"],
            technologies: ["Shopify", "Liquid", "Javascript", "Photoshop", "FIGMA"]
        },{
            title: "Covered Perfectly",
            image: "./clients/coveredperfectly.png",
            image2: "./clients/coveredperfectly_2.jpg",
            link: "coveredperfectly.com",
            status: "live",
            startDate: "2022",
            endDate: "",
            statement: "Because looking beautiful never gets old.",
            responsibilities: ["Custom Shopify website re-design", "Email Marketing", "Logo re-design"],
            technologies: ["Shopify", "Liquid", "Javascript", "Photoshop", "FIGMA"]
        },{
            title: "Scared But Alive",
            image: "./clients/scaredbutalive.png",
            image2: "./clients/scaredbutalive_2.jpg",
            link: "scaredbutalive.com",
            status: "live",
            startDate: "2021",
            endDate: "",
            statement: "Where street meets fitness. Unisex clothing with specific fit for AFAB, non-binary + women.",
            responsibilities: ["Custom Shopify website", "Customized sections & blocks", "Photoshop"],
            technologies: ["Shopify", "Liquid", "Javascript", "Photoshop", "FIGMA"]
        },{
            title: "Momo[Muscle]",
            image: "./clients/momomuscle-meta.png",
            image2: "./clients/momomuscle-meta_2.jpg",
            link: "momomuscle.co",
            status: "live",
            startDate: "2020",
            endDate: "",
            statement: "Basically, I design tools to teach women & AFAB babes to see sustainable results in less time. I want you to feel more like yourself & fitness is the catalyst.",
            responsibilities: ["Custom designed eCommerce website", "Custom quiz w/ data capture", "MailChimp & Klaviyo", "Graphic design & touchups"],
            technologies: ["Shopify", "Liquid", "Javascript", "Photoshop", "FIGMA", "MailChimp"]
        },{
            title: "Prana Wellness",
            image: "./clients/prana-wellness.png",
            image2: "./clients/prana-wellness_2.jpg",
            link: "pranawellnessworks.com",
            status: "live",
            startDate: "2019",
            endDate: "",
            statement: "Prana is Sanskrit for breath, considered as a life-giving force.  Prana is seen as a universal energy, which flows in currents in and around the body.",
            responsibilities: ["Custom React/Firebase website w/ blog", "MailChimp email automation setup", "Photoshop & general designs"],
            technologies: ["React", "Javascript", "Firebase", "Photoshop", "FIGMA", "MailChimp"]
        },{
            title: "Bravo Built",
            image: "./clients/bravo-built.jpg",
            image2: "./clients/bravo-built_2.jpg",
            link: "bravobuiltfit.com",
            status: "live",
            startDate: "2021",
            endDate: "",
            statement: "Within these programs you will find a constant changing routine that helps build a brick by brick foundation.",
            responsibilities: ["Custom Shopify website", "MailChimp email automation", "Photoshop/graphic design", "Marketing strategic planning", "Merch/product design"],
            technologies: ["Shopify","Liquid", "Javascript", "SVG", "Photoshop", "FIGMA", "MailChimp"]
        },{
            title: "D I V I N I T Y",
            image: "./clients/divinity-ray.png",
            image2: "./clients/divinity-ray_2.jpg",
            link: "divinityray.com",
            status: "live",
            startDate: "2021",
            endDate: "",
            statement: "With a passion for beauty, fashion and mental health, Divinity offers a refreshing approach to the world of social media.",
            responsibilities: ["Custom Shopify website", "Graphic design", "Dropshipping integration"],
            technologies: ["Shopify", "Liquid", "Javascript", "Photoshop", "FIGMA", "MailChimp"]
        },{
            title: "Baddie by Divinity",
            image: "./clients/baddie-by-divinity.jpg",
            image2: "./clients/baddie-by-divinity_2.jpg",
            link: "baddiebydivinity.com",
            status: "live",
            startDate: "2021",
            endDate: "",
            statement: "Baddie By Divinity is here to help us find and embrace our badassery, no matter what form it takes and no matter how we show it to the world.",
            responsibilities: ["Custom eCommerce website", "Graphic design & touchups", "Email marketing & automation"],
            technologies: ["Shopify", "Liquid", "Javascript", "SVG", "Photoshop", "MailChimp", "FIGMA"]
        },{
            title: "Metamorphosis Medical Center",
            image: "./clients/metamorphosis.jpg",
            link: "metatranshormone.com",
            status: "live",
            startDate: "2021",
            endDate: "",
            statement: "Our MISSION is to provide a safe, nurturing environment in which patients may access personalized therapies delivered at the highest standard of care, enabling them to heal and transform into their full potential for health and well-being.",
            responsibilities: ["Custom single-page website"],
            technologies: ["Shopify", "Liquid", "Javascript", "SVG", "Photoshop", "MailChimp", "FIGMA"]
        },{
            title: "Sathi Roy",
            image: "./clients/sathiroy.png",
            image2: "./clients/sathiroy_2.jpg",
            link: "sathiroy.com",
            status: "live",
            startDate: "2021",
            endDate: "",
            statement: "I help people reach their highest potential every day by taking a holistic and customized approach involving their mind, body, soul, and spirit.",
            responsibilities: ["Custom eCommerce website", "Graphic design", "Vector & digital graphics"],
            technologies: ["Shopify", "Liquid", "Javascript", "SVG", "Photoshop", "FIGMA"]
        },{
            title: "Red5 Performance",
            image: "./clients/red5performance.jpg",
            image2: "./clients/red5performance_2.jpg",
            link: "red5performance.com",
            status: "live",
            startDate: "2020",
            endDate: "",
            statement: "THE EQUATION IS SIMPLE: PHYSICS + DISCIPLINE + RED5 = HAPPIER, HEALTHIER, STRONGER YOU",
            responsibilities: ["Custom Shopify website", "MailChimp email capture", "Photoshop, graphics design", "Digital product design & development", "Marketing strategic planning"],
            technologies: ["Shopify", "Liquid", "MailChimp", "Photoshop", "FIGMA"]
        },{
            title: "Andrea Sells Maui",
            image: "./clients/andreasellsmaui2.jpg",
            link: "andreasellsmaui.com",
            status: "live",
            startDate: "2020",
            endDate: "",
            statement: "Maui real estate agent serving her local community",
            responsibilities: ["Wordpress real estate website", "Graphic design", "Ad creation" ],
            technologies: ["WordPress", "Javascript", "Photoshop", "FIGMA", "IDX Broker"]
        }],
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
        const { clientList, projects, skills } = this.state;
        return (
            <Container>
                <h1 className="titleDecoration">CLIENTS</h1>
                <Clients clientList={clientList}/>
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