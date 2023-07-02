import React, { Component } from 'react';
import styled from 'styled-components';

export default class PastClients extends Component {
    state = {
        pastClientList: [{
            title: "Dizzy with Excitement",
            image: "./clients/dizzywithexcitement.jpg",
            image2: "./clients/dizzywithexcitement_2.jpg",
            link: "dizzywithexcitement.com",
            status: "live",
            startDate: "2023",
            endDate: "",
            statement: "Endless options printed on demand.",
            tasks: ["Create custom tools on purchaed template","Wallpaper size/price calculator","Color swatch tool in Collections","Color matching display on Products"],
            technologies: ["Shopify","Liquid","JS","CSS","SVG","Photoshop","MailChimp","FIGMA"]
        },{
            title: "Baddie by Divinity",
            image: "./clients/baddie-by-divinity.jpg",
            image2: "./clients/baddie-by-divinity_2.jpg",
            link: "baddiebydivinity.com",
            status: "inactive",
            startDate: "2021",
            endDate: "",
            statement: "Baddie By Divinity is here to help us find and embrace our badassery, no matter what form it takes and no matter how we show it to the world.",
            tasks: ["Custom built Shopify website","Graphic design & touchups","Email marketing & automation"],
            technologies: ["Shopify","Liquid","JS","CSS","SVG","Photoshop","MailChimp","FIGMA"]
        },{
            title: "Andrea Sells Maui",
            image: "./clients/andreasellsmaui2.jpg",
            link: "andreasellsmaui.com",
            status: "inactive",
            startDate: "2020",
            endDate: "",
            statement: "Maui real estate agent serving her local community",
            tasks: ["Wordpress real estate website", "Graphic design", "Ad creation" ],
            technologies: ["WordPress", "JS", "CSS", "Photoshop", "FIGMA", "IDX Broker"]
        },{          
            title: "FITPLAN",
            link: "fitplanapp.com",
            image: "./clients/fitplan-giftcard.png",
            status: "live",
            startDate: "",
            endDate: "",
            statement: "Workout with elite personal trainers.",
            tasks: ["Custom email: design & marketing","Web development, design & troubleshooting","Graphic design"],
            technologies: ["React","Shopify","Liquid","CSS","JS","WordPress","Photoshop","Figma","MailChimp"]
        },{
            title: "IT After Hours",
            link: "it-afterhours.com",
            image: "./clients/it-afterhours.png",
            status: "inactive",
            startDate: "",
            endDate: "",
            statement: "Professional, affordable computer service company",
            tasks: ["Streamline WordPress & resolve bugs","Customize CSS code","Mobile friendly upgrade","Currently undergoing host & server"],
            technologies: ["WordPress","CSS","JS"]
        },{
            title: "HeatSeeker Hot Sauce",
            link: "heatseekersauce.com",
            image: "./clients/heatseeker.png",
            status: "inactive",
            startDate: "",
            endDate: "",
            statement: "Bold and minimal, pure and simple... That's what we do.",
            tasks: ["Re-design Shopify website","Streamline content & UX"],
            technologies: ["Shopify","Liquid","CSS","JS","Photoshop","Figma"]
        },{
            title: "La Madre is Watching",
            image: "./clients/lamadreiswatching-ongina.JPG",
            link: "lamadreiswatching.com",
            status: "inactive",
            startDate: "",
            endDate: "",
            statement: "Photographing the edgy side of the Los Angeles night scene.",
            tasks: ["Build custom social media website","Party events shareable photo gallery","Graphic design"],
            technologies: ["HTML","CSS","Javascript","Photoshop"]
        }]
    }
    render(){
        const { pastClientList } = this.state
        const mappastClientList = pastClientList.map((client, key) => {
            const technologiesList = client.technologies.map((c, k) => {
                return <span key={k}>{c}</span>
            })
            return(
                <ClientContainer key={key}>
                    <section>
                        <img src={client.image} alt={client.title}/>
                    </section>
                    <section>
                        <h2>
                            {client.title}
                        </h2>
                        <h4>
                            {client.link}
                        </h4>
                        <p>
                            “{client.statement}”
                        </p>
                        <h3>
                            Technologies: 
                        </h3>
                            {technologiesList}
                    </section>
                </ClientContainer>
            )
        })
        return(
            <Container>
                {mappastClientList}                
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
        font-style: italic;
        font-size: 14px;
    }
    ul, span {
        font-size: 14px;
    }
    ul {
        margin: 10px auto!important;
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