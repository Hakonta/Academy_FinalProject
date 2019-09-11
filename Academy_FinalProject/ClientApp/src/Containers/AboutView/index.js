import { HeaderBar } from '../../Components/HeaderBar';
import React, { Component } from 'react';
import Plx from 'react-plx';
import about from '../../Assets/about.jpg'
import '../../Styles/style.css'

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
  

export default class AboutView extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
      
    render() {
        return (
            
            <div class={'outerContainerAbout'}>
                <HeaderBar/>
                <Plx
                    className='MyAwesomeParallax'
                    parallaxData={ parallaxData } // your parallax effects, see documentation
                >
                <img class={'testImageAbout'} src={about} width="100%"/>
                </Plx>

                <section id={'about'}>
                    <div class={'aboutViewContainerTop'}>
                        <div class={'rowTop'}>
                            <div class={'wrapperAbout'}>
                                <br></br>
                                <h2>Our solution</h2>
                                <p class="lead">Lorizzle ipsizzle dolizzle dang amet, yo adipiscing elit.</p>
                                <p>Nullizzle sapizzle velizzle, aliquet volutpizzle, suscipit quis, gravida vizzle, nizzle. Pellentesque egizzle bling bling. Fo erizzle. I'm in the shizzle at dolor shiznit black tempus bling bling. Maurizzle pellentesque shizznit hizzle turpizzle. Izzle in i saw beyonces tizzles and my pizzle went crizzle. Black bizzle rhoncizzle break yo neck, yall. In fo shizzle my nizzle sheezy platea fo shizzle mah nizzle fo rizzle, mah home g-dizzle. Tellivizzle dapibizzle. Curabitur tellus urna, pretizzle ma nizzle, mattizzle funky fresh, eleifend vitae, nizzle. Sheezy suscipizzle. Check it out sempizzle mofo yo fo shizzle.</p>

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