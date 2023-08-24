import React, { Component } from 'react';
import styled               from 'styled-components';

import Footer               from '../Footer';

import Skills               from './Skills';
import Clients              from './Clients';
import PastClients          from './PastClients';

export default class PortfolioPage extends Component {
    state = {
        clientList: [{
            title: `Momo[Muscle]`,
            image: `./clients/momomuscle-meta.png`,
            image2: `./clients/momomuscle-meta_2.jpg`,
            link: `momomuscle.com`,
            status: `live`,
            startDate: `2020`,
            endDate: ``,
            statement: `Basically, I design tools to teach women & AFAB babes to see sustainable results in less time. I want you to feel more like yourself & fitness is the catalyst.`,
            tasks: [`Shopify store`, `Custom quiz w/ data capture`, `User friendly editable template`, `Graphic design & Photoshop`],
            technologies: [`Shopify`, `Liquid`, `Photoshop`, `FIGMA`, `MailChimp`, `Klaviyo`]
        },{
            title: `Red5 Performance`,
            image: `./clients/red5performance.jpg`,
            image2: `./clients/red5performance_2.jpg`,
            link: `red5performance.com`,
            status: `live`,
            startDate: `2021`,
            endDate: ``,
            statement: `THE EQUATION IS SIMPLE: PHYSICS + DISCIPLINE + RED5 = HAPPIER, HEALTHIER, STRONGER YOU`,
            tasks: [`Shopify store`, `MailChimp campaigns`, `Photoshop, graphics design`, `Digital product design & development`, `Marketing strategic planning`],
            technologies: [`Shopify`, `Liquids`, `MailChimp`, `Photoshop`, `FIGMA`]
        },{
            title: `Nexus Housing`,
            image: `./clients/nexushousing.jpg`,
            image2: `./clients/nexushousing_2.jpg`,
            link: `nexushousing.com`,
            status: `live`,
            startDate: `2023`,
            endDate: ``,
            statement: `Sustainable modular housing.`,
            tasks: [`Shopify website`, `Custom editable Liquid sections`],
            technologies: [`Shopify`, `Liquid`, `Photoshop`, `FIGMA`]
        },{
            title: `Our Highest Mantra`,
            image: `./clients/ourhighestmantra.jpg`,
            image2: `./clients/ourhighestmantra_2.jpg`,
            link: `ourhighestmantra.com`,
            status: `live`,
            startDate: `2023`,
            endDate: ``,
            statement: `Find your higher self.`,
            tasks: [`Shopify landing page`, `Customized Product page`, `Integrated 3rd part App`, `Photoshop Edits to Logo`],
            technologies: [`Shopify`, `Liquid`, `Photoshop`, `FIGMA`]
        },{
            title: `Covered Perfectly`,
            image: `./clients/coveredperfectly.png`,
            image2: `./clients/coveredperfectly_2.jpg`,
            link: `coveredperfectly.com`,
            status: `live`,
            startDate: `2022`,
            endDate: ``,
            statement: `Because looking beautiful never gets old.`,
            tasks: [`Re-design Shopify store & logo`, `MailChimp email marketing`, `Social media graphic design`],
            technologies: [`Shopify`, `Liquid`, `Photoshop`, `FIGMA`]
        },{
            title: `Scared But Alive`,
            image: `./clients/scaredbutalive.png`,
            image2: `./clients/scaredbutalive_2.jpg`,
            link: `scaredbutalive.com`,
            status: `live`,
            startDate: `2021`,
            endDate: ``,
            statement: `Where street meets fitness. Unisex clothing with specific fit for AFAB, non-binary + women.`,
            tasks: [`Shopify store`, `Customized sections & blocks`, `Photoshop`],
            technologies: [`Shopify`, `Liquid`, `Photoshop`, `FIGMA`, `Klaviyo`]
        },{
            title: `D I V I N I T Y`,
            image: `./clients/divinity-ray.png`,
            image2: `./clients/divinity-ray_2.jpg`,
            link: `divinityray.com`,
            status: `live`,
            startDate: `2021`,
            endDate: ``,
            statement: `With a passion for beauty, fashion and mental health, Divinity offers a refreshing approach to the world of social media.`,
            tasks: [`Shopify website`, `Graphic design`, `Dropshipping integration`],
            technologies: [`Shopify`, `Liquid`, `Photoshop`, `FIGMA`, `MailChimp`]
        },{
            title: `Metamorphosis Medical Center`,
            image: `./clients/metamorphosis.jpg`,
            link: `metatranshormone.com`,
            status: `live`,
            startDate: `2021`,
            endDate: ``,
            statement: `Our MISSION is to provide a safe, nurturing environment in which patients may access personalized therapies delivered at the highest standard of care, enabling them to heal and transform into their full potential for health and well-being.`,
            tasks: [`Custom single-page website`],
            technologies: [`Shopify`, `Liquid`, `SVG`, `Photoshop`, `MailChimp`, `FIGMA`],
        },{
            title: `Sathi Roy`,
            image: `./clients/sathiroy.png`,
            image2: `./clients/sathiroy_2.jpg`,
            link: `sathiroy.com`,
            status: `live`,
            startDate: `2021`,
            endDate: ``,
            statement: `I help people reach their highest potential every day by taking a holistic and customized approach involving their mind, body, soul, and spirit.`,
            tasks: [`Shopify website`, `Graphic design`, `Vector/digital graphics animations`],
            technologies: [`Shopify`, `Liquid`, `SVG`, `Photoshop`, `FIGMA`],
        },{
            title: `Prana Wellness`,
            image: `./clients/prana-wellness.png`,
            image2: `./clients/prana-wellness_2.jpg`,
            link: `pranawellnessworks.com`,
            status: `live`,
            startDate: `2019`,
            endDate: ``,
            statement: `Prana is Sanskrit for breath, considered as a life-giving force.  Prana is seen as a universal energy, which flows in currents in and around the body.`,
            tasks: [`React/Firebase website & blog`, `MailChimp email automation`, `Photoshop`],
            technologies: [`React`, `Firebase`, `Photoshop`, `FIGMA`, `MailChimp`],
        }],
        skills: [
            `Shopify`,
            `Liquid`,
            `WordPress`,
            `Figma`,
            `MailChimp`,
            `Klaviyo`,
            `React`,
            `NodeJs`,
            `GitHub`,
            `Git`,
            `Adobe PhotoShop`,
            `Firebase`,
            `JavaScript`,
            `VanillaJS`,
            `HTML`,
            `CSS`,
        ],
    }
    render(){
        const { clientList,  skills } = this.state;
        return (
            <Container>
                <h1 className="titleDecoration">PROJECTS</h1>
                <Clients clientList={clientList}/>
                <Skills skills={skills}/>
                <h1>PAST WORK</h1>
                <PastClients/>
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