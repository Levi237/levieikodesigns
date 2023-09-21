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
            name: `Red5`,
            image: `red5performance.jpg`,
        },{            
            name: ``,
            image: `momomuscle-meta.jpg`,
        },{            
            name: ``,
            image: `nexushousing.jpg`,
        },{            
            name: ``,
            image: `coveredperfectly.jpg`,
        },{            
            name: ``,
            image: `scaredbutalive.jpg`,
        },{            
            name: ``,
            image: `divinity-ray.jpg`,
        },{            
            name: ``,
            image: `metamorphosis.jpg`,
        },{            
            name: ``,
            image: `ourhighestmantra.jpg`,
        },{            
            name: ``,
            image: `prana-wellness.jpg`,
        },{            
            name: ``,
            image: `levieikodesigns.jpg`,
        },{
            name: ``,
            image: `dizzywithexcitement.jpg`,
        },{
            name: ``,
            image: `sathiroy.jpg`,
        },{
            name: `Baddie by Divinity`,
            image: `baddie-by-divinity.jpg`,
        },{
            name: `Bravo Built Fit`,
            image: `bravo-built.jpg`,
        },{
            name: `Andrea Sells Maui`,
            image: `andreasellsmaui2.jpg`,
        },{
            name: `Fit Plan`,
            image: `fitplan-giftcard.jpg`,
        },{
            name: `IT Afterhours`,
            image: `it-afterhours.jpg`,
        },{
            name: `Heatseeker Sauce`,
            image: `heatseeker.jpg`,
        },{
            name: `La Madre is Watching`,
            image: `lamadreiswatching-ongina.jpg`,
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
                { img.active_site && img.active_project
                ? <a href={`https://${img.link}`} target="_blank" rel="noreferrer">
                    <img className="mobile-block" src={`./mobile/${img.image}`} alt={img.name}/>
                    <img className="desktop-block" src={`./desktop/${img.image}`} alt={img.name}/>
                  </a>
                : <>
                    <img className="mobile-block" src={`./mobile/${img.image}`} alt={img.name}/>
                    <img className="desktop-block" src={`./desktop/${img.image}`} alt={img.name}/>
                  </>
                }
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
//   margin: var(--card-gap) 0;
//   background-color: var(--blue);
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

    img {
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
// background-color: var(--darkblue);
.gallery-container {
        width: 100%;
        width: 100vw;
        overflow: hidden;
    }
`;

export default Gallery;