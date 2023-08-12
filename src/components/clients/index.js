import React, { Component } from 'react';
import styled               from 'styled-components';

import Footer               from '../Footer';

import Skills               from './Skills';
import Hero                 from './Hero';
import Clients              from './Clients';
import PastClients          from './PastClients';
import ProjectsFlip         from './ProjectsFlip';
import ProjectsMobile       from './ProjectsMobile';
// import Photography          from './Photography';

export default class PortfolioPage extends Component {
    state = {
        clientList: [{
            title: "Nexus Housing",
            image: "./clients/nexushousing.jpg",
            image2: "./clients/nexushousing_2.jpg",
            link: "nexushousing.com",
            status: "live",
            startDate: "2023",
            endDate: "",
            statement: "Sustainable modular housing.",
            tasks: ["Custom built Shopify website","Client friendly editable content"],
            technologies: ["Shopify", "Liquid", "JS", "CSS", "Photoshop", "FIGMA"]
        },{
            title: "Our Highest Mantra",
            image: "./clients/ourhighestmantra.jpg",
            image2: "./clients/ourhighestmantra_2.jpg",
            link: "ourhighestmantra.com",
            status: "live",
            startDate: "2023",
            endDate: "",
            statement: "Find your higher self.",
            tasks: ["Custom built Shopify website","Animated user experience"],
            technologies: ["Shopify", "Liquid", "JS", "CSS", "Photoshop", "FIGMA"]
        },{
            title: "Covered Perfectly",
            image: "./clients/coveredperfectly.png",
            image2: "./clients/coveredperfectly_2.jpg",
            link: "coveredperfectly.com",
            status: "live",
            startDate: "2022",
            endDate: "",
            statement: "Because looking beautiful never gets old.",
            tasks: ["Re-design Shopify website", "Email Marketing", "Social Media Imagery", "Logo re-design"],
            technologies: ["Shopify", "Liquid", "JS", "CSS", "Photoshop", "FIGMA"]
        },{
            title: "Scared But Alive",
            image: "./clients/scaredbutalive.png",
            image2: "./clients/scaredbutalive_2.jpg",
            link: "scaredbutalive.com",
            status: "live",
            startDate: "2021",
            endDate: "",
            statement: "Where street meets fitness. Unisex clothing with specific fit for AFAB, non-binary + women.",
            tasks: ["Custom built Shopify website", "Customized sections & blocks", "Photoshop"],
            technologies: ["Shopify", "Liquid", "JS", "CSS", "Photoshop", "FIGMA", "Klaviyo"]
        },{
            title: "Momo[Muscle]",
            image: "./clients/momomuscle-meta.png",
            image2: "./clients/momomuscle-meta_2.jpg",
            link: "momomuscle.co",
            status: "live",
            startDate: "2020",
            endDate: "",
            statement: "Basically, I design tools to teach women & AFAB babes to see sustainable results in less time. I want you to feel more like yourself & fitness is the catalyst.",
            tasks: ["Custom built Shopify website", "Custom quiz w/ data capture", "User friendly editable content", "Graphic design & touchups"],
            technologies: ["Shopify", "Liquid", "JS", "CSS", "Photoshop", "FIGMA", "MailChimp", "Klaviyo"]
        },{
            title: "Red5 Performance",
            image: "./clients/red5performance.jpg",
            image2: "./clients/red5performance_2.jpg",
            link: "red5performance.com",
            status: "live",
            startDate: "2021",
            endDate: "",
            statement: "THE EQUATION IS SIMPLE: PHYSICS + DISCIPLINE + RED5 = HAPPIER, HEALTHIER, STRONGER YOU",
            tasks: ["Custom built Shopify website", "MailChimp email capture", "Photoshop, graphics design", "Digital product design & development", "Marketing strategic planning"],
            technologies: ["Shopify", "Liquid", "JS", "CSS", "MailChimp", "Photoshop", "FIGMA"]
        },{
            title: "Prana Wellness",
            image: "./clients/prana-wellness.png",
            image2: "./clients/prana-wellness_2.jpg",
            link: "pranawellnessworks.com",
            status: "live",
            startDate: "2019",
            endDate: "",
            statement: "Prana is Sanskrit for breath, considered as a life-giving force.  Prana is seen as a universal energy, which flows in currents in and around the body.",
            tasks: ["Custom React/Firebase website", "MailChimp email automation", "Photoshop & general designs"],
            technologies: ["React", "JS", "CSS", "Firebase", "Photoshop", "FIGMA", "MailChimp"]
        },{
            title: "D I V I N I T Y",
            image: "./clients/divinity-ray.png",
            image2: "./clients/divinity-ray_2.jpg",
            link: "divinityray.com",
            status: "live",
            startDate: "2021",
            endDate: "",
            statement: "With a passion for beauty, fashion and mental health, Divinity offers a refreshing approach to the world of social media.",
            tasks: ["Custom built Shopify website", "Graphic design", "Dropshipping integration"],
            technologies: ["Shopify", "Liquid", "JS", "CSS", "Photoshop", "FIGMA", "MailChimp"]
        },{
            title: "Metamorphosis Medical Center",
            image: "./clients/metamorphosis.jpg",
            link: "metatranshormone.com",
            status: "live",
            startDate: "2021",
            endDate: "",
            statement: "Our MISSION is to provide a safe, nurturing environment in which patients may access personalized therapies delivered at the highest standard of care, enabling them to heal and transform into their full potential for health and well-being.",
            tasks: ["Custom single-page website"],
            technologies: ["Shopify", "Liquid", "JS", "CSS", "SVG", "Photoshop", "MailChimp", "FIGMA"]
        },{
            title: "Sathi Roy",
            image: "./clients/sathiroy.png",
            image2: "./clients/sathiroy_2.jpg",
            link: "sathiroy.com",
            status: "live",
            startDate: "2021",
            endDate: "",
            statement: "I help people reach their highest potential every day by taking a holistic and customized approach involving their mind, body, soul, and spirit.",
            tasks: ["Custom built Shopify", "Graphic design", "Vector & digital graphics"],
            technologies: ["Shopify", "Liquid", "JS", "CSS", "SVG", "Photoshop", "FIGMA"]
        }],
        skills: [
            'Shopify',
            'Liquid',
            'WordPress',
            'Figma',
            'MailChimp',
            'Klaviyo',
            'React',
            'NodeJs',
            'GitHub',
            'Git',
            'Adobe PhotoShop',
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
            lineTwo: 'Javascript, VanillaJS, HTML, CSS'
        }]
    }
    render(){
        const { clientList, projects, skills } = this.state;
        return (
            <Container>
                {/* <Hero clientList={clientList}/> */}
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
    background-color: rgba(43, 41, 41, 1);
    padding: 80px 0 0;
    margin: 0 auto!important;

    @media screen and (max-width: 745px){
        padding-top: 60px;
        > h1 {
            padding: 20px;
        }
    }
`;