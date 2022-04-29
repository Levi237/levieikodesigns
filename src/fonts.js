import React, { Component } from 'react';
import './fonts.css';
/* Serif August 2021 */
export default class FontList extends Component {
   

state = {
    fonts: [
            {
                name: `Besley`, 
                default: `serif`,
                type: `serif`
            },{
                name: `Cinzel`, 
                default: `serif`,
                type: `serif`
            },{
                name: `EB Garamond`, 
                default: `serif`,
                type: `serif`
            },{
                name: `Ibarra Real Nova`, 
                default: `serif`,
                type: `serif`
            },{
                name: `Imbue`, 
                default: `serif`,
                type: `serif`
            },{
                name: `Josefin Slab`, 
                default: `serif`,
                type: `serif`
            },{
                name: `Playfair Display`, 
                default: `serif`,
                type: `serif`
            },{
                name: `Podkova`, 
                default: `serif`,
                type: `serif`
            },{
                name: `Texturina`, 
                default: `serif`,
                type: `serif`
            },
            {/* Sans-serif August 2021 */
                name: `Alumni Sans`, 
                default: `sans-serif`,
                type: `sans-serif`
            },{
                name: `Archivo`, 
                default: `sans-serif`,
                type: `sans-serif`
            },{
                name: `Changa`, 
                default: `sans-serif`,
                type: `sans-serif`
            },{
                name: `Dosis`, 
                default: `sans-serif`,
                type: `sans-serif`
            },{
                name: `Encode Sans SC`, 
                default: `sans-serif`,
                type: `sans-serif`
            },{
                name: `Exo 2`, 
                default: `sans-serif`,
                type: `sans-serif`
            },{
                name: `Ibarra Real Nova`, 
                default: `serif`,
                type: `serif`
            },{
                name: `Inter`, 
                default: `sans-serif`,
                type: `sans-serif`
            },{
                name: `Josefin Sans`, 
                default: `sans-serif`,
                type: `sans-serif`
            },{
                name: `Orbitron`, 
                default: `sans-serif`,
                type: `sans-serif`
            },{
                name: `Oswald`, 
                default: `sans-serif`,
                type: `sans-serif`
            },{
                name: `Quicksand`, 
                default: `sans-serif`,
                type: `sans-serif`
            },{
                name: `Raleway`, 
                default: `sans-serif`,
                type: `sans-serif`
            },{
                name: `Reem Kufi`, 
                default: `sans-serif`,
                type: `sans-serif`
            },{
                name: `Rubik`, 
                default: `sans-serif`,
                type: `sans-serif`
            },{
                name: `Signika`, 
                default: `sans-serif`,
                type: `sans-serif`
            },{
                name: `Space Grotesk`, 
                default: `sans-serif`,
                type: `sans-serif`
            },{
                name: `Truculenta`, 
                default: `sans-serif`,
                type: `sans-serif`
            },{
                name: `Work Sans`, 
                default: `sans-serif`,
                type: `sans-serif`
            },{
                name: `Yanone Kaffeesatz`, 
                default: `sans-serif`,
                type: `sans-serif`
            },
            {/* handwriting */
                name: `Allison`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `Bad Script`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `Bilbo Swash Caps`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `Calligraffitti`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `Caveat`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `Cedarville Cursive`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `Dancing Script`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `Dawning of a New Day`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `Fuggles`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `Great Vibes`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `Herr Von Muellerhoff`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `Homemade Apple`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `Jim Nightshade`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `Kristi`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `La Belle Aurore`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `League Script`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `Lovers Quarrel`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `Molle`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `Monsieur La Doulaise`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `Mr Bedfort`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `Mrs Sheppards`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `Pacifico`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `Parisienne`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `Permanent Marker`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `Rock Salt`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `Sacramento`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `Shadows Into Light`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `Walter Turncoat`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `WindSong`, 
                default: `cursive`,
                type: `cursive`
            },{
                name: `Zeyada`, 
                default: `cursive`,
                type: `cursive`
            },
            /* monospace */
            {
                name: `Courier Prime`, 
                default: `monospace`,
                type: `monospace`
            },{
                name: `Cutive Mono`, 
                default: `monospace`,
                type: `monospace`
            },{
                name: `Major Mono Display`, 
                default: `monospace`,
                type: `monospace`
            },{
                name: `Nanum Gothic Coding`, 
                default: `monospace`,
                type: `monospace`
            },{
                name: `Nova Mono`, 
                default: `monospace`,
                type: `monospace`
            },{
                name: `PT Mono`, 
                default: `monospace`,
                type: `monospace`
            },{
                name: `Roboto Mono`, 
                default: `monospace`,
                type: `monospace`
            },{
                name: `Share Tech Mono`,
                default: `monospace`,
                type: `monospace`
            },{
                name: `Syne Mono`, 
                default: `monospace`,
                type: `monospace`
            },{
                name: `Ubuntu Mono`, 
                default: `monospace`,
                type: `monospace`
            },{
                name: `VT323`, 
                default: `monospace`,
                type: `monospace`
            },{
                name: `Xanh Mono`, 
                default: `monospace`,
                type: `monospace`
            },
            {/* display */
                name:'Barrio',
                display: `cursive`,
                type: `display`
            },{
                name:'Croissant One',
                display: `cursive`,
                type: `display`
            },{
                name:'Girassol',
                display: `cursive`,
                type: `display`
            },{
                name:'New Rocker',
                display: `cursive`,
                type: `display`
            },{
                name: `Abril Fatface`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Alfa Slab One`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Almendra Display`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Atma`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Atomic Age`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Audiowide`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Averia Libre`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Bahiana`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Baloo Thambi 2`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Bangers`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Barrio`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Battambang`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Baumans`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Bebas Neue`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Bevan`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Big Shoulders Stencil Text`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Bigelow Rules`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Black Ops One`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Bowlby One SC`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Bubblegum Sans`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Bungee`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Bungee Inline`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Bungee Shade`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Cabin Sketch`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Caesar Dressing`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Ceviche One`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Chicle`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Cinzel Decorative`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Codystar`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Comfortaa`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Corben`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Courier Prime`, 
                default: `monospace`,
                type: `display`
            },{
                name: `Creepster`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Cute Font`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Cutive Mono`, 
                default: `monospace`,
                type: `display`
            },{
                name: `Eater`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Emilys Candy`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Faster One`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Finger Paint`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Freckle Face`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Fredoka One`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Frijole`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Graduate`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Grenze Gotisch`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Gugi`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Hanalei`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Happy Monkey`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Iceland`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Jolly Lodger`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Kelly Slab`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Kumar One`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Lemonada`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Libre Barcode 39`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Libre Barcode 39 Text`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Lobster`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Lobster Two`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Londrina Outline`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Love Ya Like A Sister`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Luckiest Guy`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Macondo Swash Caps`,
                default: `cursive`,
                type: `display`
            },{
                name: `Major Mono Display`, 
                default: `monospace`,
                type: `display`
            },{
                name: `Megrim`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Metal Mania`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Monofett`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Monoton`, 
                default: `cursive`,
                type: `display`
            },{
                name: `MuseoModerno`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Nanum Gothic Coding`, 
                default: `monospace`,
                type: `display`
            },{
                name: `Nosifer`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Nova Mono`, 
                default: `monospace`,
                type: `display`
            },{
                name: `Oi`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Oleo Script Swash Caps`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Original Surfer`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Palette Mosaic`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Piedra`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Pirata One`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Poiret One`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Pompiere`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Poor Story`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Press Start 2P`, 
                default: `cursive`,
                type: `display`
            },{
                name: `PT Mono`, 
                default: `monospace`,
                type: `display`
            },{
                name: `Racing Sans One`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Rammetto One`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Rampart One`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Ranchers`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Ravi Prakash`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Righteous`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Roboto Mono`, 
                default: `monospace`,
                type: `display`
            },{
                name: `Rye`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Sancreek`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Share Tech Mono`, 
                default: `monospace`,
                type: `display`
            },{
                name: `Shojumaru`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Skranji`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Sniglet`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Special Elite`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Staatliches`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Stardos Stencil`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Syne Mono`, 
                default: `monospace`,
                type: `display`
            },{
                name: `Syne Tactile`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Tourney`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Trade Winds`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Turret Road`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Ubuntu Mono`, 
                default: `monospace`,
                type: `display`
            },{
                name: `Uncial Antiqua`, 
                default: `cursive`,
                type: `display`
            },{
                name: `UnifrakturMaguntia`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Unkempt`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Vampiro One`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Vast Shadow`, 
                default: `cursive`,
                type: `display`
            },{
                name: `VT323`, 
                default: `monospace`,
                type: `display`
            },{
                name: `Wallpoet`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Xanh Mono`, 
                default: `monospace`,
                type: `display`
            },{
                name: `ZCOOL KuaiLe`, 
                default: `cursive`,
                type: `display`
            },{
                name: `ZCOOL QingKe HuangYou`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Zen Dots`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Zen Loop`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Zen Tokyo Zoo`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Zilla Slab Highlight`, 
                default: `cursive`,
                type: `display`
            },{
                name: `Abril Fatface`,
                default: `cursive`,
                type: `display`
            },{
                name: `Almendra Display`,
                default: `cursive`,
                type: `display`
            },{
                name: `Amarante`,
                default: `cursive`,
                type: `display`
            },{
                name: `Astloch`,
                default: `cursive`,
                type: `display`
            },{
                name: `Bungee Outline`,
                default: `cursive`,
                type: `display`
            },{
                name: `Cherry Swash`,
                default: `cursive`,
                type: `display`
            },{
                name: `Codystar`,
                default: `cursive`,
                type: `display`
            },{
                name: `Croissant One`,
                default: `cursive`,
                type: `display`
            },{
                name: `Dynalight`,
                default: `cursive`,
                type: `display`
            },{
                name: `Elsie`,
                default: `cursive`,
                type: `display`
            },{
                name: `Elsie Swash Caps`,
                default: `cursive`,
                type: `display`
            },{
                name: `Ewert`,
                default: `cursive`,
                type: `display`
            },{
                name: `Geostar`,
                default: `cursive`,
                type: `display`
            },{
                name: `Geostar Fill`,
                default: `cursive`,
                type: `display`
            },{
                name: `Griffy`,
                default: `cursive`,
                type: `display`
            },{
                name: `Jacques Francois Shadow`,
                default: `cursive`,
                type: `display`
            },{
                name: `Katibeh`,
                default: `cursive`,
                type: `display`
            },{
                name: `Kumar One Outline`,
                default: `cursive`,
                type: `display`
            },{
                name: `Limelight`,
                default: `cursive`,
                type: `display`
            },{
                name: `MedievalSharp`,
                default: `cursive`,
                type: `display`
            },{
                name: `Metamorphous`,
                default: `cursive`,
                type: `display`
            },{
                name: `Milonga`,
                default: `cursive`,
                type: `display`
            },{
                name: `Miltonian Tattoo`,
                default: `cursive`,
                type: `display`
            },{
                name: `Modern Antiqua`,
                default: `cursive`,
                type: `display`
            },{
                name: `Mountains of Christmas`,
                default: `cursive`,
                type: `display`
            },{
                name: `Nosifer`,
                default: `cursive`,
                type: `display`
            },{
                name: `Oldenburg`,
                default: `cursive`,
                type: `display`
            },{
                name: `Plaster`,
                default: `cursive`,
                type: `display`
            },{
                name: `Playball`,
                default: `cursive`,
                type: `display`
            },{
                name: `Raleway Dots`,
                default: `cursive`,
                type: `display`
            },{
                name: `Ruslan Display`,
                default: `cursive`,
                type: `display`
            },{
                name: `Sail`,
                default: `cursive`,
                type: `display`
            },{
                name: `Sancreek`,
                default: `cursive`,
                type: `display`
            },{
                name: `Sevillana`,
                default: `cursive`,
                type: `display`
            },{
                name: `Snowburst One`,
                default: `cursive`,
                type: `display`
            },{
                name: `Spirax`,
                default: `cursive`,
                type: `display`
            },{
                name: `Srisakdi`,
                default: `cursive`,
                type: `display`
            },{
                name: `Train One`,
                default: `cursive`,
                type: `display`
            },{
                name: `Underdog`,
                default: `cursive`,
                type: `display`
            },{
                name: `UnifrakturCook`,
                default: `cursive`,
                type: `display`
            },{
                name: `Unlock`,
                default: `cursive`,
                type: `display`
            },{
                name: `Viaoda Libre`,
                default: `cursive`,
                type: `display`
            },{
                name: `Vibes`,
                default: `cursive`,
                type: `display`
            },{
                name: `Warnes`,
                default: `cursive`,
                type: `display`
            },{
                name: `Yatra One`,
                default: `cursive`,
                type: `display`
            } 
    ]
}
    render(){
        const wholeList = this.state.fonts.map((font, k) => {
            if (font.type === `sans serif` || font.type === `monospace`) {


            return(<>
            <div key={k} name={font.name} style={{display: `inline-block`, width: `600px`, border: `1px solid white`, padding: `30px`}}>
                <h3 style={{fontFamily: `Roboto`, color: `lightgrey`}}>{font.name}</h3>
                <small style={{fontFamily: `Roboto`}}>{font.type}</small>
                <p style={{fontFamily: `${font.name}, ${font.type}`, fontSize: `21px`}}>Baddie abcd efg hijk lmno pqrs tuvw xyz!?</p>
                <p style={{fontFamily: `${font.name}, ${font.type}`, fontSize: `21px`, textTransform: `uppercase`}}>baddie abcd efg hijk lmno pqrs tuvw xyz!?</p>
            </div>
            </>)
                        }
        })
        return(<div style={{backgroundColor: `#fff`, color: `#000`}}>{wholeList}</div>)
    }
}