import React, { Component } from 'react';
import Plx from 'react-plx';
import about from '../../Assets/about.jpg'
import '../../Styles/style.css'
import CardNavBar from '../../Components/CardNavbar'

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


export default class ContactView extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div class={'outerContainerAbout'}>
                <CardNavBar />
                <Plx
                    className='MyAwesomeParallax'
                    parallaxData={parallaxData} // your parallax effects, see documentation
                >
                    <img class={'testImageAbout'} src={about} width="100%" />
                </Plx>

                <section id={'about'}>
                    <div class={'aboutViewContainerTop'}>
                        <div class={'rowTop'}>
                            <div className={'wrapperAbout'}>
                                <br></br>
                                <h2 className={'aboutHeader'}>Contact us</h2>
                                <p class="lead"><b>Questions? Wanna chat? Unhappy with SQT?</b></p>
                                <p>Roses are read<br></br>Violets are blue<br></br>You are hereby warned
                                <br></br>We might not have a clue</p>
                               
                                <br></br>
                                
                                <p class="lead"><b>Contact Info:</b></p>
                                <p>Phone: +42 42 42 42 42
                                    <br></br>
                                    Mail: meg@ryan.com
                                    <br></br>
                                    PS: Contact information is not real
                                </p>

                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" class={'bg-black'}>
                    <div class={'aboutViewContainerBottom'}>
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