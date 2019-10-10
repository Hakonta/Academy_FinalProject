import React, { Component } from 'react';
import Plx from 'react-plx';
import about from '../../Assets/city.jpg'
import '../../Styles/style.css'
import { HeaderBar } from '../../Components/HeaderBar';
import BackToMap from '../../Components/BackBtn';


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
                    <img class={'testImagesafety'} src={about} width="100%" alt="" />
                </Plx>

                <section id={'safety'}>
                    <div class={'safetyViewContainerTop'}>
                        <div class={'rowTop'}>
                            <div className={'wrappersafety'}>
                                <br></br>
                                <h2 className={'safetyHeader'} style = {{fontFamily:"'Red Hat Display', sans-serif"}}>Welcome Ania</h2>
                                <p class="lead" style = {{fontFamily:"'Red Hat Display', sans-serif"}}><b>My recent rides:</b></p>
                                <ul>
                                    <li ><b> Thur 10.10 - 1 min <br></br></b> Rode a Tier - <span style={{ color: 'orange' }}>More info</span></li>
                                    <br></br>
                                    <li ><b> Thur 10.10 - 17 min <br></br></b> Rode a Tier - <span style={{ color: 'orange' }}>More info</span></li>
                                    <br></br>
                                    <li><b> Mon 07.10 - 12 min <br></br></b>Rode a Zvipp - <span style={{color: 'orange'}}>More info</span></li>
                                    <br></br>
                                    <li><b> Wed 2.19 - 24 min <br></br></b>Rode a Voi - <span style={{color: 'orange'}}>More info</span></li>
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