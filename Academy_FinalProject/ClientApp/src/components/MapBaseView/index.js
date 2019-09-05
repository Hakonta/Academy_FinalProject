import React, { Component } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow, MarkerClusterer } from '@react-google-maps/api'
import ScooterMarker from '../ScooterMarker'
import under10 from '../../Assets/Under10.png'
import over10 from '../../Assets/Over10.png'
import over100 from '../../Assets/Over100.png'
import over1000 from '../../Assets/Over1000.png'


export default class MapBaseLayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bikes: [],
      scooters: [],
      selectedScooter: null,
      currentCenter: {
        lat: 59.92,
        lng: 10.723
      }
    }
  }

  componentDidMount() {
    this.fetchScooterData();
    this.fetchBikeData();
  }

  fetchScooterData = () => {
    fetch("https://localhost:44359/api/scooter",
      {headers: {
          'Content-Type': 'application/json' }
      })
      .then(response => response.json())
      .then((result) => {this.setState({ scooters: result });
      })
      .catch((error) => { console.log(error); });
  }

  fetchBikeData = () => {
    fetch("https://localhost:44359/api/citybike",
      {headers: {
        'Content-Type': 'application/json'}
      }) 
      .then(response => response.json())
      .then((result) => {this.setState({ bikes: result });
      })
      .catch((error) => { console.log(error); });
  }



  render() {
    return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyAp2jh1zbAqgoQH8qpd8Af622VYmIdfeVY"
      >

        <GoogleMap
          id='example-map'
          zoom={12}
          center={
            this.state.currentCenter
          }
          mapContainerStyle={{
            height: 800,
            width: 1000,
          }}
        >




          <MarkerClusterer
            averageCenter
            minimumClusterSize={3}
            maxZoom={20}
            styles={clusterIcons}
          >
            {
              (clusterer) => this.state.scooters.map((scooter, index) => (
                <div>
                <Marker key={index} position={{ lat: scooter.latitude, lng: scooter.longitude }} clusterer={clusterer} onClick={() => { this.setState({selectedScooter: scooter})}}/>
                </div>
              ))
            }

           

          </MarkerClusterer>


          {this.state.selectedScooter && (
            <InfoWindow
              style={{ backgroundColor: 'blue' }}
              position={{ lat: this.state.selectedScooter.latitude, lng: this.state.selectedScooter.longitude }}
              onCloseClick={() => {
                this.setState({ selectedScooter: null })
              }} >

              <div>
                CARD COMPONENT HERE
              </div>
            </InfoWindow>
          )}




        </GoogleMap>
      </LoadScript>
    )
  }
}

const clusterIcons = [
  {
    url: under10,
    height: 15,
    width: 15,
    fontFamily: "Lato",
    textColor: "#96504b",
  },
  {
    url: under10,
    height: 20,
    width: 20,
    fontFamily: "Lato",
    textColor: "#96504b",
  },
  {
    url: over10,
    height: 30,
    width: 30,
    fontFamily: "Lato",
    textColor: "#96504b",
  },
  {
    url: over100,
    height: 50,
    width: 50,
    fontFamily: "Lato",
    textColor: "#96504b",
  },
  {
    url: over1000,
    height: 100,
    width: 100,
    fontFamily: "Lato",
    textColor: "#96504b",
  }
]