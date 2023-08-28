import React, { Component } from 'react';
import styled from 'styled-components';

export default class Pastprojects extends Component {
    state = {
        pastProjects: [{
            title: `Dizzy with Excitement`,
            image: `./projects/dizzywithexcitement.jpg`,
            image2: `./projects/dizzywithexcitement_2.jpg`,
            link: `dizzywithexcitement.com`,
            status: `live`,
            startDate: `2023`,
            endDate: ``,
            statement: `Endless options printed on demand.`,
            tasks: [`Create custom tools on purchaed template`,`Wallpaper size/price calculator`,`Color swatch tool in Collections`,`Color matching display on Products`],
            technologies: [`Shopify`,`Liquid`,`JS`,`CSS`,`SVG`,`Photoshop`,`MailChimp`,`FIGMA`]
        },{
            title: `Sathi Roy`,
            image: `./projects/sathiroy.png`,
            image2: `./projects/sathiroy_2.jpg`,
            link: `sathiroy.com`,
            status: `inactive`,
            startDate: `2021`,
            endDate: ``,
            statement: `I help people reach their highest potential every day by taking a holistic and customized approach involving their mind, body, soul, and spirit.`,
            tasks: [`Shopify website`, `Graphic design`, `Vector/digital graphics animations`],
            technologies: [`Shopify`, `Liquid`, `SVG`, `Photoshop`, `FIGMA`],
        },{
            title: `Baddie by Divinity`,
            image: `./projects/baddie-by-divinity.jpg`,
            image2: `./projects/baddie-by-divinity_2.jpg`,
            link: `baddiebydivinity.com`,
            status: `inactive`,
            startDate: `2021`,
            endDate: ``,
            statement: `Baddie By Divinity is here to help us find and embrace our badassery, no matter what form it takes and no matter how we show it to the world.`,
            tasks: [`Custom built Shopify website`,`Graphic design & touchups`,`Email marketing & automation`],
            technologies: [`Shopify`,`Liquid`,`JS`,`CSS`,`SVG`,`Photoshop`,`MailChimp`,`FIGMA`]
        },{
            title: `Bravo Built`,
            image: `./projects/bravo-built.jpg`,
            image2: `./projects/bravo-built_2.jpg`,
            link: `bravobuiltfit.com`,
            status: `live`,
            startDate: `2021`,
            endDate: ``,
            statement: `Within these programs you will find a constant changing routine that helps build a brick by brick foundation.`,
            tasks: [`Custom built Shopify website`, `MailChimp email automation`, `Photoshop/graphic design`, `Marketing strategic planning`, `Merch/product design`],
            technologies: [`Shopify`,`Liquid`, `JS`, `CSS`, `SVG`, `Photoshop`, `FIGMA`, `MailChimp`]
        },{
            title: `Andrea Sells Maui`,
            image: `./projects/andreasellsmaui2.jpg`,
            link: `andreasellsmaui.com`,
            status: `inactive`,
            startDate: `2020`,
            endDate: ``,
            statement: `Maui real estate agent serving her local community`,
            tasks: [`Wordpress real estate website`, `Graphic design`, `Ad creation` ],
            technologies: [`WordPress`, `JS`, `CSS`, `Photoshop`, `FIGMA`, `IDX Broker`]
        },{          
            title: `FITPLAN`,
            link: `fitplanapp.com`,
            image: `./projects/fitplan-giftcard.png`,
            status: `live`,
            startDate: `2019`,
            endDate: ``,
            statement: `Workout with elite personal trainers.`,
            tasks: [`Custom email: design & marketing`,`Web development, design & troubleshooting`,`Graphic design`],
            technologies: [`React`,`Shopify`,`Liquid`,`CSS`,`JS`,`WordPress`,`Photoshop`,`Figma`,`MailChimp`]
        },{
            title: `IT After Hours`,
            link: `it-afterhours.com`,
            image: `./projects/it-afterhours.png`,
            status: `inactive`,
            startDate: `2019`,
            endDate: ``,
            statement: `Professional, affordable computer service company`,
            tasks: [`Streamline WordPress & resolve bugs`,`Customize CSS code`,`Mobile friendly upgrade`],
            technologies: [`WordPress`,`CSS`,`JS`]
        },{
            title: `HeatSeeker Hot Sauce`,
            link: `heatseekersauce.com`,
            image: `./projects/heatseeker.png`,
            status: `inactive`,
            startDate: `2019`,
            endDate: ``,
            statement: `Bold and minimal, pure and simple... That's what we do.`,
            tasks: [`Re-design Shopify website`,`Streamline content & UX`, `Add wholesale accounts`],
            technologies: [`Shopify`,`Liquid`,`CSS`,`JS`,`Photoshop`,`Figma`]
        },{
            title: `La Madre is Watching`,
            image: `./projects/lamadreiswatching-ongina.JPG`,
            link: `lamadreiswatching.com`,
            status: `inactive`,
            startDate: `2007`,
            endDate: ``,
            statement: `Photographing the edgy side of the Los Angeles night scene.`,
            tasks: [`Build custom social media website`,`Party events shareable photo gallery`,`Graphic design`],
            technologies: [`HTML`,`CSS`,`Javascript`,`Photoshop`]
        }]
    };
    render(){
        const { pastProjects } = this.state
        const mappastProjects = pastProjects.map((client, key) => {
            const technologiesList = client.technologies.map((c, k) => {
                return <span key={k}>{c}</span>
            });
            const tasksList = client.tasks.map((r, k) => {
                return <li key={k}><span>{r}</span></li>
            });
            return(
                <ClientContainer key={key}>
                    <section>
                        <img src={client.image} alt={client.title}/>
                    </section>
                    <section>
                        <h2>{client.title}</h2>
                        <small>{client.startDate}</small>
                        <h4>{client.link}</h4>
                        <p>“{client.statement}”</p>
                        <ul>{tasksList}</ul>
                        <h3>Technologies: </h3>
                        {technologiesList}
                    </section>
                </ClientContainer>
            );
        });
        return(
            <Container>
                {mappastProjects}                
            </Container>
        );
    };
};

const ClientContainer = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 21%;
    margin: 40px 1%;
    text-align: center;
    
    section {
        text-align: left;
        &:first-of-type {
            overflow: hidden;
            height: 13.33vw;
            max-height: 160px;
            margin-bottom: 20px;
        }
        span::after {
            content ' | ';
        }
        span:last-of-type::after {
            content: '';
        }
    }
    
    img {
        width: 100%;
        margin-top: 5%;
    }
    a {
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
    h1 {
        margin-bottom: 10px!important;
    }
    h2 {
        font-size: 21px;
    }
    h3 {
        font-size: 16px;
    }
    h4 {
        font-size: 14px;
        font-weight: 100;
    }
    p {
        margin: 10px auto;
        // font-style: italic;
        font-size: 14px;
    }
    ul, span {
        font-size: 14px;
    }
    ul {
        margin: 10px auto!important;
        padding-inline-start: 12px;
    }
    @media screen and (max-width: 640px) {
        width: 45%;
        margin: 0 0%;
        section {
            text-align: left;
            &:first-of-type {
                height: 21.33vw;
            }
            &:last-of-type {
                margin-bottom: 40px;
            }
        }
        h2 {
            font-size: 4.6vw;
        }
        h4 {
            padding-top: 1vw;
        }
        h3, h4, p, ul, li, span{
            font-size: 3.6vw;
        }

    }
`;

const Container = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    @media screen and (max-width: 640px) {
        max-width: 600px;
        section, img {
            width: 90%;
            margin: auto;
        }
    }
`;