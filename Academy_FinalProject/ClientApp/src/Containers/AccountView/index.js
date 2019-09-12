// import React from 'react'
// import CardNavBar from '../../Components/CardNavbar'

// const accountView = () => {
//     return (
//         <div>
//             <CardNavBar />
//         </div>

//     )
// }
// export default accountView;

import React, { Component } from 'react';
import Plx from 'react-plx';
import about from '../../Assets/city.jpg'
import '../../Styles/style.css'
import CardNavBar from '../../Components/CardNavbar'
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
                    <img class={'testImagesafety'} src={about} width="100%" />
                </Plx>

                <section id={'safety'}>
                    <div class={'safetyViewContainerTop'}>
                        <div class={'rowTop'}>
                            <div className={'wrappersafety'}>
                                <br></br>
                                <h2 className={'safetyHeader'} style = {{fontFamily:"'Red Hat Display', sans-serif"}}>Welcome Ania</h2>
                                <p class="lead" style = {{fontFamily:"'Red Hat Display', sans-serif"}}><b>My recent rides:</b></p>
                                <ul>
                                    <li ><b> Fri 13.09 - 17 min <br></br></b> Rode a Tier - <span style={{color: 'orange'}}>More info</span></li>
                                    <br></br>
                                    <li><b> Thu 12.09 - 12 min <br></br></b>Rode a Zvipp - <span style={{color: 'orange'}}>More info</span></li>
                                    <br></br>
                                    <li><b> Mon 9.9 - 24 min <br></br></b>Rode a Voi - <span style={{color: 'orange'}}>More info</span></li>
                                </ul>
                                <p class="lead" style = {{fontFamily:"'Red Hat Display', sans-serif"}}><b>You have earned <b>560</b> points. Earn more points for a free ride!</b></p>
                                <p>As a registered member, you'll earn points after each paid ride. Use your points to unlock free minutes of ride time. <br></br>
                                Ride safe and keep being awesome!</p>

                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" class={'bg-black'}>
                    <div class={'safetyViewContainerBottom'}>
                        <div class={'rowBottom'}>
                            <div class="col-lg-8 mx-auto">
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}