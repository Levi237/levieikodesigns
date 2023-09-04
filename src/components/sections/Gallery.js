import React    from 'react';
import styled   from 'styled-components';

//  Next goal: use component specific ID

const Gallery = ({ id, list, width, gap }) => {
    const gallery = [
        `./portfolio/divinity-ray.jpg`,
    ]
    console.log('gallery =>', gallery);
 
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
    const _width = width ? width : '20';
    const _gap = gap ? gap : '2';
    const carousel_container = 'gallery-container--' + _id;
    const carousel_row = 'carousel-row--' + _id;

    //   Print original list of images
    const mapList = _list.map(( img, k) => {
        return(
            <div key={k} className={`gallery-card carousel-row ${carousel_row}`}>
                <img src={img.img} alt={`URL: ${img.img}`}/>
            </div>
        );
    });

    //   Remove image from the front and add to back for continuous carousel
    const setCarouselTime = 3000;
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
        }, setCarouselTime - 600);
    });
    setInterval(startCarousel, setCarouselTime);

    return(
        <LocalWrapper>    
            <div className="gallery-container">
                <div id={`${carousel_container}`} className="gallery-row">
                    {mapList}
                </div>
            </div>
        </LocalWrapper>
    );
};

const LocalWrapper = styled.div`

    --card-width: 20vw;
    --card-height: 10vw;
    --card-gap: 2vw;
    --card-width: ${(props) => props.width}vw;
    // --card-height: ${this.props.height}vw;
    // --card-gap: ${this.props.gap}vw;
    width: 100%;

    .gallery-container {
        overflow: hidden;
      }
      .gallery-container .gallery-row {
        overflow: hidden;
        height: 10vw;
        width: 150vw;
        margin: 1.25vw 0;
      }

      //==> Offsets margin
        //   #gallery-second-row {
        //     margin-left: calc(-11.75vw / 2);
        //   }
      .gallery-container .gallery-card {
        display: inline-block;
        width: var(--card-width);
        height: var(--card-height);
        overflow: hidden;
        border-radius: 1vw;
        margin-right: var(--card-gap);

        //==> .shift-left
        transition: .6s ease-in-out;
        opacity: 1;
        margin-left: 0;
        
      }
      .gallery-container img {
        width: var(--card-width);
        overflow: hidden;
      }
      @media only screen and (min-width: 750px) {
        .gallery-container .gallery-card.shift-left {
          margin-left: calc(-1 * var(--card-width) + -1 * var(--card-gap));
          opacity: 0;
        }
      }
      @media only screen and (max-width: 749px) {
        .gallery-container .gallery-row {
          height: 30vw;
          margin: 4vw 0;
        }
        // #gallery-carousel-row {
        //   margin-left: -1.125vw;
        // }
        
        // #gallery-second-row {
        //   margin-left: -17vw;
        // }
        .gallery-container .gallery-card {
          width: 30vw;
          height:30vw;
          border-radius: 15px;
          margin-right: 4vw;
        }
        .gallery-container img {
            width: 30vw;
        }
        .gallery-container .shift-left {
            margin-left: -34vw;
        }
      }
`;

export default Gallery;