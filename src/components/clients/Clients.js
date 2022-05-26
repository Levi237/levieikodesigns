import React, { Component } from 'react';
import styled from 'styled-components';

export default class Clients extends Component {
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
        }]
    }
    render(){
        const { clientList } = this.state
        const liveClients = clientList.filter(client => client.status === 'live')
        const mapClientList = liveClients.map((client, key) => {
            const responsibilitiesList = client.responsibilities.map((r, k) => {
                return <li key={k}>{r}</li>
            })
            // const technologiesList = client.technologies.map((c, k) => {
            //     return <span key={k}>{c}</span>
            // })
            return(
                <ClientContainer key={key}>
                    <MobileImg href={`https://${client.link}`} target="_blank">
                        <img src={client.image} alt={client.title}/>
                        {
                            client.image2 && <img src={client.image2} alt={client.title}/>
                        }
                    </MobileImg>
                    <section>
                        <h2>
                            {client.title}<i> <small> <small> Since </small>{client.startDate}</small></i>
                        </h2>
                        <a target="_blank" rel="noopener noreferrer" href={`https://${client.link}`}>
                            {client.link}
                        </a>
                        <p>
                            “{client.statement}”
                        </p>

                        <ul>
                            {responsibilitiesList}
                        </ul>
                        {/* <h3>
                            Technologies: 
                        </h3>
                            {technologiesList}
                        <hr/>    */}
                        <br></br>
                    </section>
                    <DesktopImg href={`https://${client.link}`} target="_blank">
                        <img src={client.image} alt={client.title}/>
                        {
                            client.image2 && <img className="image-2" src={client.image2} alt={client.title}/>
                        }
                    </DesktopImg>
                    <hr/>
                </ClientContainer>
            )
        })
        return(
            <Container>
                {mapClientList}                
            </Container>
        );
    };
};

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
        color: grey!important;
        text-decoration: none;
        margin-bottom: 40px;
        &:hover {
            text-decoration: underline;
        }
    }
    h1 {
        margin-bottom: 10px!important;
    }
    h3 {
        font-size: 16px;
    }
    p {
        font-size: 14px;
        margin: 10px auto;
    }
    ul, span {
        font-size: 14px;
    }
    ul {
        margin: 10px auto!important;
        line-height: 140%;
    }
    >hr {
        width: 100%;
        margin: 0px auto 20px;
    }
    // >hr:last-of-type {
    //     margin: 40px auto 0;
    // }
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