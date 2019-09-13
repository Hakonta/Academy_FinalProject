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
                                <h2 className={'safetyHeader'} style = {{fontFamily:"'Red Hat Display', sans-serif"}}>THE SQT RULES TO KNOW BEFORE YOU GO</h2>
                            
                                <p><br></br></p>
                                <p class="lead"><b>Be safe.</b></p>
                                <p class="lead"><b>Wear a <strong>helmet</strong>.</b></p>
                                <p class="lead"><b>Park respectfully.</b></p>
                                <p class="lead"><b>Scoot <strong>solo</strong>.</b></p>
                                <p class="lead"><b>Don't drink and drive.</b></p>
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