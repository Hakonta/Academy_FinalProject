import React, { Component } from 'react';
import Plx from 'react-plx';
import about from '../../Assets/about.jpg'
import '../../Styles/style.css'
import CardNavBar from '../../Components/CardNavbar'
import safetyPoster from '../../Assets/safetyPoster.png'
import safe from '../../Assets/safe.png'
import safe2 from '../../Assets/safe2.png'

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
                <CardNavBar/>
                <body className='safetyBody'>
                    <a>{<img src={safe} alt={'safetyPhoto'}/>}</a><br></br>
                    <a>{<img src={safe2} alt={'safetyPhoto'}/>}</a><br></br>
                </body>
                                

                
            </div>
        )
    }
}