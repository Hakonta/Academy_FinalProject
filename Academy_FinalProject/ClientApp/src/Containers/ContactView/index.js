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
                                <p class="lead"><b>So what's this about?</b></p>
                                <p>SQT is the lovechild of a couple of students who attended <a className={'aboutLinks'} href="https://www.academy.no/">Academy</a>(summer of 2019). It was developed in a two week project for our finals.
                                Prior to the three months we've spent learning coding during our time at Academy, most of us had none or almost no experience with coding.
                                It's been a fun ride and we hope you like our little project! If you're curious about the techincal aspects of things, you can check out our Github page <a className={'aboutLinks'} href="https://github.com/Hakonta/Academy_FinalProject">here</a>.
                                <br></br>
                                </p>
                                <p class="lead"><b>Why SQT?</b></p>
                                <p>If you've ever tried to book an e-scooter before, you've most likely ran into to this problem: So many providers(and apps!),
                                    but you just want the scooter that's the closest to where you are at the moment.
                                    It'd be so much easier if you could have them all on the same map. Well, now you can!</p>

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