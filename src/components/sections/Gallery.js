import React    from 'react';
import styled   from 'styled-components';

//  Next goal: use component specific ID

const Gallery = ({ id, list }) => {
    const gallery = [
        `./portfolio/divinity-ray.jpg`,
    ]
    console.log('gallery =>', gallery);
 
// Manually Update img
// vector based off 0vw
// Allow for option of links and other data

const imageList = [{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_01.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_02.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_03.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_04.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_05.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_06.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_07.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_08.png`,  
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_09.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_10.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_11.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_12.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_13.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_14.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_15.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_16.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_17.png`,  
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_18.png`,  
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_19.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_20.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_21.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_22.png`,  
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_23.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_24.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_25.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_26.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_27.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_28.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_29.png`,  
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_30.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_31.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_32.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_34.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_35.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_36.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_37.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_38.png`,
  },{
    img: `https://cdn.shopify.com/s/files/1/0017/7533/7583/files/momomuscle_BnA_39.png`,
}];
  
    const _id = id ? id : '__NEED_ID__';
    const _list = list ? list : imageList;
    const carousel_container = 'gallery-container--' + _id;
    const carousel_row = 'carousel-row--' + _id;

    //   Print original list of images
    const mapList = _list.map((img, k) => {
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
            <div className="local-wrapper">
                <div className="gallery-container">
                    <div id={`${carousel_container}`} className="gallery-row">
                        {mapList}
                    </div>
                </div>
            </div>
        </LocalWrapper>
    );
};

const LocalWrapper = styled.div`
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
      #gallery-second-row {
        margin-left: calc(-11.75vw / 2);
      }
      .gallery-container .gallery-card {
        display: inline-block;
        width: 10vw;
        overflow: hidden;
        transition: .6s ease-in-out;
        border-radius: 1vw;
        margin-right: 1.75vw;
        height:10vw;
      }
      .gallery-container img {
        width: 10vw;
        overflow: hidden;
      }
      @media only screen and (min-width: 750px) {
        .gallery-container .shift-left {
          margin-left: -11.75vw;
        }
      }
      @media only screen and (max-width: 749px) {
        .gallery-container .gallery-row {
          height: 30vw;
          margin: 4vw 0;
        }
        #gallery-carousel-row {
          margin-left: -1.125vw;
        }
        
        #gallery-second-row {
          margin-left: -17vw;
        }
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