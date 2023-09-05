import React    from 'react';
import styled   from 'styled-components';

//  Next goal: use component specific ID
//==> <Gallery id='top-home' width="20" height="14" gap="2" second="3"/>
//====> id:         identifies specific component, must be unique
//====> list:       list of images as an object array, default imageList
//====> width:      width of images in vw
//====> height:     height of images in vw
//====> gap:        gap of images in vw
//====> seconds:    time of each duration

const Gallery = ({ id, list, width, height, gap, seconds }) => {

// Manually Update img
// vector based off 0vw
// Allow for option of links and other data
    const imageList = [{
            alt: `Red5`,
            active: true,
            link: `https://red5performance.com`,    
            img: `./projects/red5performance.jpg`,
        },{            
            alt: ``,
            active: true,
            link: `https://momomuscle.com`,
            img: `./projects/momomuscle-meta.jpg`,
        },{            
            alt: ``,
            active: true,
            link: `https://nexushousing.org`,
            img: `./projects/nexushousing.jpg`,
        },{            
            alt: ``,
            active: true,
            link: `https://coveredperfectly.com`,
            img: `./projects/coveredperfectly.jpg`,
        },{            
            alt: ``,
            active: true,
            link: `https://.com`,
            img: `./projects/scaredbutalive.jpg`,
        },{            
            alt: ``,
            active: true,
            link: `https://divinityray.com`,
            img: `./projects/divinity-ray.jpg`,
        },{            
            alt: ``,
            active: true,
            link: `https://metatranshormone.com`,
            img: `./projects/metamorphosis.jpg`,
        },{            
            alt: ``,
            active: true,
            link: `https://ourhighestmantra.com`,
            img: `./projects/ourhighestmantra.jpg`,
        },{            
            alt: ``,
            active: true,
            link: `https://pranawellnessworks.com`,
            img: `./projects/prana-wellness.jpg`,
        },{            
            alt: ``,
            active: true,
            link: `https://levieikodesigns.com`,
            img: `./projects/levieikodesigns.jpg`,
        },{
            alt: ``,
            active: true,
            link: `https://dizzywithexcitement.com`,
            img: `./projects/dizzywithexcitement.jpg`,
        },{
            alt: ``,
            active: false,
            link: `https://sathiroy.com`,
            img: `./projects/sathiroy.jpg`,
        },{
            alt: `Baddie by Divinity`,
            active: false,
            link: ``,
            img: `./projects/baddie-by-divinity.jpg`,
        },{
            alt: `Bravo Built Fit`,
            active: false,
            link: ``,
            img: `./projects/bravo-built.jpg`,
        },{
            alt: `Andrea Sells Maui`,
            active: false,
            link: ``,
            img: `./projects/andreasellsmaui2.jpg`,
        },{
            alt: `Fit Plan`,
            active: false,
            link: ``,
            img: `./projects/fitplan-giftcard.jpg`,
        },{
            alt: `IT Afterhours`,
            active: false,
            link: ``,
            img: `./projects/it-afterhours.jpg`,
        },{
            alt: `Heatseeker Sauce`,
            active: false,
            link: ``,
            img: `./projects/heatseeker.jpg`,
        },{
            alt: `La Madre is Watching`,
            active: false,
            link: ``,
            img: `./projects/lamadreiswatching-ongina.JPG`,
    }];
  
    const _id = id ? id : '__NEED_ID__';
    const _list = list ? list : imageList;
    const _time = seconds ? seconds * 1000 : 3000;
    // Specify 'containerc & 'row' to allow multiple rows
    const carousel_container = 'gallery-container--' + _id;
    const carousel_row = 'carousel-row--' + _id;

    //   Print original list of images
    const mapList = _list.map((img, k) => {
        return(
            <Image key={k} className={`gallery-card carousel-row ${carousel_row}`}>
                <a href={img.link}>
                    <img src={img.img} alt={`img.alt`}/>
                </a>
            </Image>
        );
    });

    //   Remove image from the front and add to back for continuous carousel
    const setCarouselTime = _time;
    const startCarousel = (() => {
        const getContainer = document.getElementById(`${carousel_container}`);
        const getCards = document.getElementsByClassName(`${carousel_row}`);
        //  Shift first card to the left
        getCards[0].classList.add('shift-left');
        //  Resets last card inserted
        getCards[getCards.length - 1].classList.remove('shift-left');
        //  Move card from front to back right before next shift
        setTimeout(() => { 
            let firstCard = getCards[0];
            getContainer.append(firstCard);
        }, setCarouselTime * .9);
    });
    setInterval(startCarousel, setCarouselTime);

    return(
        <LocalWrapper>    
            <div className="gallery-container">
                <Window id={`${carousel_container}`} className="gallery-row" width={width} height={height} gap={gap} seconds={seconds} >
                    {mapList}
                </Window>
            </div>
        </LocalWrapper>
    );
};

const Window = styled.div.attrs((props) => ({
    width: props.width || "10",
    height: props.height || "10",
    gap: props.gap || "2",
    seconds: props.seconds || "3",
  }))`
  --card-width: ${props => props.width}vw;
  --card-height: ${props => props.height}vw;
  --card-ratio: calc(${props => props.height} / ${props => props.width});
  --card-gap: ${props => props.gap}vw;
  --card-margin-left: calc(-1 * var(--card-width) + -1 * var(--card-gap));
  --card-seconds: ${props => props.seconds}s;
  --card-speed: calc(.33 * var(--card-seconds));
  --card-mobile-width: 80vw;

  overflow: hidden;
  height: var(--card-height);
  width: 150vw;
  margin: 0 0 var(--card-gap);
  @media only screen and (max-width: 749px) {
    // fit width of mobile by 80%
    height: calc(var(--card-mobile-width) * var(--card-ratio));
    width: 200vw
  }
  `;

const Image = styled.div`

    display: inline-block;
    width: var(--card-width);
    height: var(--card-height);
    margin-right: var(--card-gap);

    border-radius: 5px;

    overflow: hidden;

    //==> .shift-left
    transition: var(--card-speed) ease-in-out;
    opacity: 1;
    margin-left: 0;

    > img {
        overflow: hidden;
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
    &.shift-left {
        margin-left: var(--card-margin-left);
        opacity: 0;
    }
    @media only screen and (min-width: 750px) {
    }
    // fit width of mobile by 80%
    @media only screen and (max-width: 749px) {
        width: var(--card-mobile-width);
        height: calc(var(--card-mobile-width) * var(--card-ratio));
        margin-right: 10vw;
        margin-left: 10vw;
        &.shift-left {
            margin-left: -90vw;
        }
    }
`;

const LocalWrapper = styled.div`
    width: 100%;
`;

export default Gallery;