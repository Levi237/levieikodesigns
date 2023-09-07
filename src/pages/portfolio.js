import React, { Component } from 'react';
import styled               from 'styled-components';

import AnimateText          from '../components/snippets/AnimateText';

// import Skills               from './Skills';
import Projects             from '../components/sections/Projects';
import PastProjects         from '../components/sections/InactiveProjects';
import Footer               from '../components/Footer';


export default class PortfolioPage extends Component {
    state = {
        projects: [{
            name: `Red5 Performance`,
            active_site: true,
            active_project: true,
            startDate: 2021,
            endDate: null,
            image: `projects/red5performance.jpg`,
            image2: `projects/red5performance_2.jpg`,
            link: `red5performance.com`,
            statement: `THE EQUATION IS SIMPLE: PHYSICS + DISCIPLINE + RED5 = HAPPIER, HEALTHIER, STRONGER YOU`,
            tasks: [`Shopify store`, `MailChimp campaigns`, `Photoshop, graphics design`, `Digital product design & development`, `Marketing strategic planning`],
            technologies: [`Shopify`, `Liquids`, `MailChimp`, `Photoshop`, `FIGMA`]
        },{
            name: `Momo[Muscle]`,
            active_site: true,
            active_project: true,
            startDate: 2020,
            endDate: null,
            image: `projects/momomuscle-meta.jpg`,
            image2: `projects/momomuscle-meta_2.jpg`,
            link: `momomuscle.com`,
            statement: `Basically, I design tools to teach women & AFAB babes to see sustainable results in less time. I want you to feel more like yourself & fitness is the catalyst.`,
            tasks: [`Shopify store`, `Custom quiz w/ data capture`, `User friendly editable template`, `Graphic design & Photoshop`],
            technologies: [`Shopify`, `Liquid`, `Photoshop`, `FIGMA`, `MailChimp`, `Klaviyo`]
        },{
            name: `Nexus Housing`,
            active_site: true,
            active_project: true,
            startDate: 2023,
            endDate: null,
            image: `projects/nexushousing.jpg`,
            image2: `projects/nexushousing_2.jpg`,
            link: `nexushousing.com`,
            statement: `Sustainable modular housing.`,
            tasks: [`Shopify website`, `Custom editable Liquid sections`],
            technologies: [`Shopify`, `Liquid`, `Photoshop`, `FIGMA`]
        },{
            name: `Covered Perfectly`,
            active_site: true,
            active_project: true,
            startDate: 2022,
            endDate: null,
            image: `projects/coveredperfectly.jpg`,
            image2: `projects/coveredperfectly_2.jpg`,
            link: `coveredperfectly.com`,
            statement: `Because looking beautiful never gets old.`,
            tasks: [`Re-design Shopify store & logo`, `MailChimp email marketing`, `Social media graphic design`],
            technologies: [`Shopify`, `Liquid`, `Photoshop`, `FIGMA`]
        },{
            name: `Scared But Alive`,
            active_site: true,
            active_project: true,
            startDate: 2021,
            endDate: null,
            image: `projects/scaredbutalive.jpg`,
            image2: `projects/scaredbutalive_2.jpg`,
            link: `scaredbutalive.com`,
            statement: `Where street meets fitness. Unisex clothing with specific fit for AFAB, non-binary + women.`,
            tasks: [`Shopify store`, `Customized sections & blocks`, `Photoshop`],
            technologies: [`Shopify`, `Liquid`, `Photoshop`, `FIGMA`, `Klaviyo`]
        },{
            name: `D I V I N I T Y`,
            active_site: true,
            active_project: true,
            startDate: 2021,
            endDate: null,
            image: `projects/divinity-ray.jpg`,
            image2: `projects/divinity-ray_2.jpg`,
            link: `divinityray.com`,
            statement: `With a passion for beauty, fashion and mental health, Divinity offers a refreshing approach to the world of social media.`,
            tasks: [`Shopify website`, `Graphic design`, `Dropshipping integration`],
            technologies: [`Shopify`, `Liquid`, `Photoshop`, `FIGMA`, `MailChimp`]
        },{
            name: `Metamorphosis Medical Center`,
            active_site: true,
            active_project: true,
            startDate: 2021,
            endDate: null,
            image: `projects/metamorphosis.jpg`,
            image2: ``,
            link: `metatranshormone.com`,
            statement: `Our MISSION is to provide a safe, nurturing environment in which patients may access personalized therapies delivered at the highest standard of care, enabling them to heal and transform into their full potential for health and well-being.`,
            tasks: [`Custom single-page website`],
            technologies: [`Shopify`, `Liquid`, `SVG`, `Photoshop`, `MailChimp`, `FIGMA`],
        },{
            name: `Our Highest Mantra`,
            active_site: true,
            active_project: true,
            startDate: 2023,
            endDate: null,
            image: `projects/ourhighestmantra.jpg`,
            image2: `projects/ourhighestmantra_2.jpg`,
            link: `ourhighestmantra.com`,
            statement: `Find your higher self.`,
            tasks: [`Shopify landing page`, `Customized Product page`, `Integrated 3rd part App`, `Photoshop Edits to Logo`],
            technologies: [`Shopify`, `Liquid`, `Photoshop`, `FIGMA`]
        },{
            name: `Prana Wellness`,
            active_site: true,
            active_project: true,
            startDate: 2019,
            endDate: null,
            image: `projects/prana-wellness.jpg`,
            image2: `projects/prana-wellness_2.jpg`,
            link: `pranawellnessworks.com`,
            statement: `Prana is Sanskrit for breath, considered as a life-giving force.  Prana is seen as a universal energy, which flows in currents in and around the body.`,
            tasks: [`React/Firebase website & blog`, `MailChimp email automation`, `Photoshop`],
            technologies: [`React`, `Firebase`, `Photoshop`, `FIGMA`, `MailChimp`],
        },{
            name: `Levi Eiko Designs`,
            active_site: true,
            active_project: true,
            startDate: 2019,
            endDate: null,
            image: `projects/levieikodesigns.jpg`,
            image2: `projects/levieikodesigns_2.jpg`,
            link: `levieikodesigns.com`,
            statement: `Build your new website or upgrade an existing one.`,
            tasks: [`Fully coded website`, `Built with React`, `Firebase Platform`],
            technologies: [`React`, `Firebase`, `Photoshop`, `FIGMA`, `MailChimp`]
        },{
            name: `Dizzy with Excitement`,
            active_site: true,
            active_project: true,
            startDate: 2023,
            endDate: null,
            image: `projects/dizzywithexcitement.jpg`,
            image2: `projects/dizzywithexcitement_2.jpg`,
            link: `dizzywithexcitement.com`,
            statement: `Endless options printed on demand.`,
            tasks: [`Create custom tools on purchaed template`,`Wallpaper size/price calculator`,`Color swatch tool in Collections`,`Color matching display on Products`],
            technologies: [`Shopify`,`Liquid`,`JS`,`CSS`,`SVG`,`Photoshop`,`MailChimp`,`FIGMA`]
        },{
            name: `Sathi Roy`,
            active_site: false,
            active_project: false,
            startDate: 2021,
            endDate: 2023,
            image: `projects/sathiroy.jpg`,
            image2: `projects/sathiroy_2.jpg`,
            link: `sathiroy.com`,
            statement: `I help people reach their highest potential every day by taking a holistic and customized approach involving their mind, body, soul, and spirit.`,
            tasks: [`Shopify website`, `Graphic design`, `Vector/digital graphics animations`],
            technologies: [`Shopify`, `Liquid`, `SVG`, `Photoshop`, `FIGMA`],
        },{
            name: `Baddie by Divinity`,
            active_site: false,
            active_project: false,
            startDate: 2021,
            endDate: 2022,
            image: `projects/baddie-by-divinity.jpg`,
            image2: `projects/baddie-by-divinity_2.jpg`,
            link: `baddiebydivinity.com`,
            statement: `Baddie By Divinity is here to help us find and embrace our badassery, no matter what form it takes and no matter how we show it to the world.`,
            tasks: [`Custom built Shopify website`,`Graphic design & touchups`,`Email marketing & automation`],
            technologies: [`Shopify`,`Liquid`,`JS`,`CSS`,`SVG`,`Photoshop`,`MailChimp`,`FIGMA`]
        },{
            name: `Bravo Built`,
            active_site: true,
            active_project: true,
            startDate: 2021,
            endDate: null,
            image: `projects/bravo-built.jpg`,
            image2: `projects/bravo-built_2.jpg`,
            link: `bravobuiltfit.com`,
            statement: `Within these programs you will find a constant changing routine that helps build a brick by brick foundation.`,
            tasks: [`Custom built Shopify website`, `MailChimp email automation`, `Photoshop/graphic design`, `Marketing strategic planning`, `Merch/product design`],
            technologies: [`Shopify`,`Liquid`, `JS`, `CSS`, `SVG`, `Photoshop`, `FIGMA`, `MailChimp`]
        },{
            name: `Andrea Sells Maui`,
            active_site: false,
            active_project: false,
            startDate: 2020,
            endDate: 2021,
            image: `projects/andreasellsmaui2.jpg`,
            image2: ``,
            link: `andreasellsmaui.com`,
            statement: `Maui real estate agent serving her local community`,
            tasks: [`Wordpress real estate website`, `Graphic design`, `Ad creation` ],
            technologies: [`WordPress`, `JS`, `CSS`, `Photoshop`, `FIGMA`, `IDX Broker`]
        },{          
            name: `FITPLAN`,
            active_site: true,
            active_project: false,
            startDate: 2019,
            endDate: 2020,
            link: `fitplanapp.com`,
            image: `projects/fitplan-giftcard.jpg`,
            image2: ``,
            statement: `Workout with elite personal trainers.`,
            tasks: [`Custom email: design & marketing`,`Web development, design & troubleshooting`,`Graphic design`],
            technologies: [`React`,`Shopify`,`Liquid`,`CSS`,`JS`,`WordPress`,`Photoshop`,`Figma`,`MailChimp`]
        },{
            name: `IT After Hours`,
            active_site: false,
            active_project: false,
            startDate: 2019,
            endDate: 2020,
            link: `it-afterhours.com`,
            image: `projects/it-afterhours.jpg`,
            image2: ``,
            statement: `Professional, affordable computer service company`,
            tasks: [`Streamline WordPress & resolve bugs`,`Customize CSS code`,`Mobile friendly upgrade`],
            technologies: [`WordPress`,`CSS`,`JS`]
        },{
            name: `HeatSeeker Hot Sauce`,
            active_site: false,
            active_project: false,
            startDate: 2019,
            endDate: 2020,
            link: `heatseekersauce.com`,
            image: `projects/heatseeker.jpg`,
            image2: ``,
            statement: `Bold and minimal, pure and simple... That's what we do.`,
            tasks: [`Re-design Shopify website`,`Streamline content & UX`, `Add wholesale accounts`],
            technologies: [`Shopify`,`Liquid`,`CSS`,`JS`,`Photoshop`,`Figma`]
        },{
            name: `La Madre is Watching`,
            active_site: false,
            active_project: false,
            startDate: 2007,
            endDate: 2009,
            image: `projects/lamadreiswatching-ongina.jpg`,
            image2: ``,
            link: `lamadreiswatching.com`,
            statement: `Photographing the edgy side of the Los Angeles night scene.`,
            tasks: [`Build custom social media website`,`Party events shareable photo gallery`,`Graphic design`],
            technologies: [`HTML`,`CSS`,`Javascript`,`Photoshop`]
        }],
    };
    render(){
        const { projects } = this.state;
        return (
            <Container className="container">
                <h1 className="header">
                    <AnimateText animate="slide" fade="on" speed="fast" text="Projects" />
                </h1>
                <Projects projects={projects}/>
                <h1>PAST WORK</h1>
                <br/>
                <PastProjects projects={projects}/>
                <Footer/>      
            </Container>
        );
    };
};

const Container = styled.div`
    background-color: rgba(43, 41, 41, 1);
    // padding: 60px 0 0;
    // margin: 0 auto!important;

    @media screen and (max-width: 745px){
        padding-top: 60px;
        > h1 {
            // padding: 20px;
        }
    }
`;