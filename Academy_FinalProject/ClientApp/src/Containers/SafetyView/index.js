import React, { Component } from 'react';
import Plx from 'react-plx';
import about from '../../Assets/city.jpg'
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
                    <img class={'testImagesafety'} src={about} width="100%" />
                </Plx>

                <section id={'safety'}>
                    <div class={'safetyViewContainerTop'}>
                        <div class={'rowTop'}>
                            <div className={'wrappersafety'}>
                                <br></br>
                                <h2 className={'safetyHeader'} style = {{fontFamily:"'Red Hat Display', sans-serif"}}>THE SQT RULES TO KNOW BEFORE YOU GO</h2>
                            
                                <p><br></br></p>
                                <p class="lead"><b>BE SAFE.</b></p>
                                <p class="lead"><b>WEAR A <strong>HELMET</strong>.</b></p>
                                <p class="lead"><b>PARK RESPECTFULLY.</b></p>
                                <p class="lead"><b>SCOOT <strong>SOLO</strong>.</b></p>
                                <p class="lead"><b>DON'T DRINK AND DRIVE</b></p>
                                <p><br></br></p>

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