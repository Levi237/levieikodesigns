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
            img: `./projects/red5performance.jpg`,
        },{            
            img: `./projects/momomuscle-meta.jpg`,
        },{            
            img: `./projects/nexushousing.jpg`,
        },{            
            img: `./projects/coveredperfectly.jpg`,
        },{            
            img: `./projects/scaredbutalive.jpg`,
        },{            
            img: `./projects/divinity-ray.jpg`,
        },{            
            img: `./projects/metamorphosis.jpg`,
        },{            
            img: `./projects/ourhighestmantra.jpg`,
        },{            
            img: `./projects/prana-wellness.jpg`,
        },{            
            img: `./projects/levieikodesigns.jpg`,
        },{
            img: `./projects/dizzywithexcitement.jpg`,
        },{
            img: `./projects/sathiroy.jpg`,
        },{
            img: `./projects/baddie-by-divinity.jpg`,
        },{
            img: `./projects/bravo-built.jpg`,
        },{
            img: `./projects/andreasellsmaui2.jpg`,
        },{
            img: `./projects/fitplan-giftcard.jpg`,
        },{
            img: `./projects/it-afterhours.jpg`,
        },{
            img: `./projects/heatseeker.jpg`,
        },{
            img: `./projects/lamadreiswatching-ongina.JPG`,
    }];
  
    const _id = id ? id : '__NEED_ID__';
    const _list = list ? list : imageList;
    const _time = seconds ? seconds * 1000 : 3000;
    const carousel_container = 'gallery-container--' + _id;
    const carousel_row = 'carousel-row--' + _id;

    //   Print original list of images
    const mapList = _list.map(( img, k) => {
        return(
            <Image key={k} className={`gallery-card carousel-row ${carousel_row}`} width={width} height={height} gap={gap} seconds={seconds}>
                <img src={img.img} alt={`URL: ${img.img}`}/>
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
        //  Kicks in second cycle, removes className
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
                <Window id={`${carousel_container}`} className="gallery-row" height={height}>
                    {mapList}
                </Window>
            </div>
        </LocalWrapper>
    );
};

const Window = styled.div.attrs((props) => ({
    height: props.height || "10",
    gap: props.gap || "2",
  }))`
  --card-height: ${props => props.height}vw;
  --card-gap: ${props => props.gap}vw;

  overflow: hidden;
  height: var(--card-height);
  width: 150vw;
  margin: 0 0 var(--card-gap);
  @media only screen and (max-width: 749px) {
      height: 30vw;
      margin: 4vw 0;
  }
  `;

const Image = styled.div.attrs((props) => ({
    width: props.width || "10",
    height: props.height || "10",
    gap: props.gap || "2",
    seconds: props.seconds || "3",
  }))`

--card-width: ${props => props.width}vw;
--card-height: ${props => props.height}vw;
--card-gap: ${props => props.gap}vw;
--card-margin-left: calc(-1 * var(--card-width) + -1 * var(--card-gap));
--card-seconds: ${props => props.seconds}s;
--card-speed: calc(.33 * var(--card-seconds));

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
  @media only screen and (min-width: 750px) {
    &.shift-left {
        margin-left: var(--card-margin-left);
        opacity: 0;
    }
  }
    //   @media only screen and (max-width: 749px) {

    //     .gallery-container .gallery-card {
    //       width: 30vw;
    //       height:30vw;
    //       border-radius: 15px;
    //       margin-right: 4vw;
    //     }
    //     .gallery-container img {
    //         width: 30vw;
    //     }
    //     .gallery-container .shift-left {
    //         margin-left: -34vw;
    //     }
    //   }
`;

const LocalWrapper = styled.div`
    width: 100%;
    .gallery-container {
        overflow: hidden;
    }
`;

export default Gallery;