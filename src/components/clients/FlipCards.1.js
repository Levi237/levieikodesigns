// import React  from 'react';
// import styled from 'styled-components';


// const FlipCards =({projects})=> {
//     const projectSpread = projects.map((p, key) => {
//         return(
//             <CardContainer key={key}>
//                 <a target="_blank" rel="noopener noreferrer" href={p.link}>
//                     <FlipCard>
//                         <FlipCardInner>
//                             <FlipCardFront>
//                                 <img src={p.image} alt="front"/>
//                             </FlipCardFront>
//                             <FlipCardBack>
//                                 <h2>{p.title}</h2> 
//                                 <p>{p.lineOne}</p> 
//                                 <p>{p.lineTwo}</p>
//                             </FlipCardBack>
//                         </FlipCardInner>
//                     </FlipCard>
//                 </a>
//             </CardContainer>
//         );
//     });
//     return( <>{projectSpread}</> );
// };

// const CardContainer = styled.div`
//     display: inline-block;
//     p {
//         font-size: 15px;
//         font-weight: 800;
//     }
// `;

// const FlipCard = styled.div`
//     background-color: transparent!important;
//     width: 200px!important;
//     height: 300px!important;
//     margin: 25px;
//     perspective: 1000px;
//     &:hover > div:first-of-type {
//         transform: rotateY(180deg);
//     }
//     img {
//         width: 200px!important;
//         height: 300px!important;
//         border-radius: 6px;
//     }
//     @media only screen and (max-width: 1000px) {
//         width: 20vw!important;
//         height: 30vw!important;
//         margin: 2.5vw;
//         img {
//             width: 20vw!important;
//             height: 30vw!important;
//         }
//     }
//   `;
  
//   const FlipCardInner = styled.div`
//     position: relative;
//     width: 100%;
//     height: 100%;
//     text-align: center;
//     transition: transform 0.6s;
//     transform-style: preserve-3d;
//   `;
  
//   const FlipCardFront = styled.div`
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     -webkit-backface-visibility: hidden;
//     backface-visibility: hidden;
//   `;
//   const FlipCardBack = styled(FlipCardFront)`
//     background-color:transparent!important;
//     color: #fff;
//     transform: rotateY(180deg);
//   `;
// export default FlipCards;