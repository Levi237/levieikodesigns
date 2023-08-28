import React, { Component } from 'react';
import styled               from 'styled-components';

import AnimateText          from '../snippets/AnimateText';
import Footer               from '../Footer';

// import Skills               from './Skills';
import Projects             from './Clients';
import PastProjects         from './PastClients';


export default class PortfolioPage extends Component {
    state = {
        projects: [{
            title: `Red5 Performance`,
            image: `./projects/red5performance.jpg`,
            image2: `./projects/red5performance_2.jpg`,
            link: `red5performance.com`,
            status: `live`,
            startDate: `2021`,
            endDate: ``,
            statement: `THE EQUATION IS SIMPLE: PHYSICS + DISCIPLINE + RED5 = HAPPIER, HEALTHIER, STRONGER YOU`,
            tasks: [`Shopify store`, `MailChimp campaigns`, `Photoshop, graphics design`, `Digital product design & development`, `Marketing strategic planning`],
            technologies: [`Shopify`, `Liquids`, `MailChimp`, `Photoshop`, `FIGMA`]
        },{
            title: `Momo[Muscle]`,
            image: `./projects/momomuscle-meta.png`,
            image2: `./projects/momomuscle-meta_2.jpg`,
            link: `momomuscle.com`,
            status: `live`,
            startDate: `2020`,
            endDate: ``,
            statement: `Basically, I design tools to teach women & AFAB babes to see sustainable results in less time. I want you to feel more like yourself & fitness is the catalyst.`,
            tasks: [`Shopify store`, `Custom quiz w/ data capture`, `User friendly editable template`, `Graphic design & Photoshop`],
            technologies: [`Shopify`, `Liquid`, `Photoshop`, `FIGMA`, `MailChimp`, `Klaviyo`]
        },{
            title: `Nexus Housing`,
            image: `./projects/nexushousing.jpg`,
            image2: `./projects/nexushousing_2.jpg`,
            link: `nexushousing.com`,
            status: `live`,
            startDate: `2023`,
            endDate: ``,
            statement: `Sustainable modular housing.`,
            tasks: [`Shopify website`, `Custom editable Liquid sections`],
            technologies: [`Shopify`, `Liquid`, `Photoshop`, `FIGMA`]
        },{
            title: `Covered Perfectly`,
            image: `./projects/coveredperfectly.png`,
            image2: `./projects/coveredperfectly_2.jpg`,
            link: `coveredperfectly.com`,
            status: `live`,
            startDate: `2022`,
            endDate: ``,
            statement: `Because looking beautiful never gets old.`,
            tasks: [`Re-design Shopify store & logo`, `MailChimp email marketing`, `Social media graphic design`],
            technologies: [`Shopify`, `Liquid`, `Photoshop`, `FIGMA`]
        },{
            title: `Scared But Alive`,
            image: `./projects/scaredbutalive.png`,
            image2: `./projects/scaredbutalive_2.jpg`,
            link: `scaredbutalive.com`,
            status: `live`,
            startDate: `2021`,
            endDate: ``,
            statement: `Where street meets fitness. Unisex clothing with specific fit for AFAB, non-binary + women.`,
            tasks: [`Shopify store`, `Customized sections & blocks`, `Photoshop`],
            technologies: [`Shopify`, `Liquid`, `Photoshop`, `FIGMA`, `Klaviyo`]
        },{
            title: `D I V I N I T Y`,
            image: `./projects/divinity-ray.png`,
            image2: `./projects/divinity-ray_2.jpg`,
            link: `divinityray.com`,
            status: `live`,
            startDate: `2021`,
            endDate: ``,
            statement: `With a passion for beauty, fashion and mental health, Divinity offers a refreshing approach to the world of social media.`,
            tasks: [`Shopify website`, `Graphic design`, `Dropshipping integration`],
            technologies: [`Shopify`, `Liquid`, `Photoshop`, `FIGMA`, `MailChimp`]
        },{
            title: `Metamorphosis Medical Center`,
            image: `./projects/metamorphosis.jpg`,
            link: `metatranshormone.com`,
            status: `live`,
            startDate: `2021`,
            endDate: ``,
            statement: `Our MISSION is to provide a safe, nurturing environment in which patients may access personalized therapies delivered at the highest standard of care, enabling them to heal and transform into their full potential for health and well-being.`,
            tasks: [`Custom single-page website`],
            technologies: [`Shopify`, `Liquid`, `SVG`, `Photoshop`, `MailChimp`, `FIGMA`],
        },{
            title: `Our Highest Mantra`,
            image: `./projects/ourhighestmantra.jpg`,
            image2: `./projects/ourhighestmantra_2.jpg`,
            link: `ourhighestmantra.com`,
            status: `live`,
            startDate: `2023`,
            endDate: ``,
            statement: `Find your higher self.`,
            tasks: [`Shopify landing page`, `Customized Product page`, `Integrated 3rd part App`, `Photoshop Edits to Logo`],
            technologies: [`Shopify`, `Liquid`, `Photoshop`, `FIGMA`]
        },{
            title: `Prana Wellness`,
            image: `./projects/prana-wellness.png`,
            image2: `./projects/prana-wellness_2.jpg`,
            link: `pranawellnessworks.com`,
            status: `live`,
            startDate: `2019`,
            endDate: ``,
            statement: `Prana is Sanskrit for breath, considered as a life-giving force.  Prana is seen as a universal energy, which flows in currents in and around the body.`,
            tasks: [`React/Firebase website & blog`, `MailChimp email automation`, `Photoshop`],
            technologies: [`React`, `Firebase`, `Photoshop`, `FIGMA`, `MailChimp`],
        },{
            title: `Levi Eiko Designs`,
            image: `./projects/levieikodesigns.jpg`,
            image2: `./projects/levieikodesigns_2.jpg`,
            link: `levieikodesigns.com`,
            status: `live`,
            startDate: `2019`,
            endDate: ``,
            statement: `Build your new website or upgrade an existing one.`,
            tasks: [`Fully coded website`, `Built with React`, `Firebase Platform`],
            technologies: [`React`, `Firebase`, `Photoshop`, `FIGMA`, `MailChimp`]
        }],
    };
    render(){
        const { projects,  skills } = this.state;
        return (
            <Container>
                <h1 className="titleDecoration">
                    <AnimateText animate="slide" fade="on" speed="fast" text="Projects" />
                </h1>
                <Projects projects={projects}/>
                {/* <Skills skills={skills}/> */}
                <h1>PAST WORK</h1>
                <PastProjects/>
                <Footer/>      
            </Container>
        );
    };
};

const Container = styled.div`
    background-color: rgba(43, 41, 41, 1);
    padding: 60px 0 0;
    margin: 0 auto!important;

    @media screen and (max-width: 745px){
        padding-top: 60px;
        > h1 {
            padding: 20px;
        }
    }
`;