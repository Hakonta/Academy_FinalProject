import React, { Component } from 'react';
import Plx from 'react-plx';
import about from '../../Assets/about.jpg'
import '../../Styles/style.css'
import CardNavBar from '../../Components/CardNavbar'
import safetyPoster from '../../Assets/safetyPoster.png'
import safe from '../../Assets/safe1a.png'
import safe2 from '../../Assets/safe2a.png'
import { HeaderBar } from '../../Components/HeaderBar';
import BackToMap from '../../Components/BackBtn';

// A WIP. Must find something that works on both mobile and desktop

const parallaxData = [
    {
        start: 0,
        end: 550,
        properties: [
            {
                startValue: 1,
                endValue: 1.4,
                property: 'scale',
            },
        ],
    },
];

export default class safetyView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div class={'outerContainersafety'}>
                <HeaderBar/>
                <BackToMap/>
                <Plx
                    className='MyAwesomeParallax'
                    parallaxData={parallaxData} // your parallax effects, see documentation
                >
                </Plx>
                <body className='safetyBody'>
                    <div className='safetyPart1'>{<img src={safe} alt={'safetyPhoto'} width="100%"/>}</div><br></br>
                    <div className='safetyPart2'>{<img src={safe2} alt={'safetyPhoto'} width="100%"/>}</div><br></br>
                </body>
                                

                
            </div>
        )
    }
}