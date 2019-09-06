import React, { Component } from 'react'
import { GoogleMap, LoadScript, InfoWindow, MarkerClusterer } from '@react-google-maps/api'
import ScooterMarker from '../ScooterMarker'
import BikeStationMarker from '../BikeStationMarker'
import under10 from '../../Assets/Under10.png'
import over10 from '../../Assets/Over10.png'
import over100 from '../../Assets/Over100.png'
import over1000 from '../../Assets/Over1000.png'
import mapStyle from './mapStyle'
import InfoCard from '../InfoCard'
import config from '../../config'
//import { ThemeProvider } from 'react-bootstrap';
import { ThemeProvider } from 'react-bootstrap';
import SortCard from '../../Components/SortCard';
import RideCard from '../RideCard';
import SortButton from '../../Components/SortButton'




export default class MapBaseLayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showFiltercard: false,
      filter: {
        voiChecked: true,
        tierChecked: true,
        flashChecked: true,
        zwippChecked: true,
      },
      showDefaultCard: true,
      bikeStations: [],
      scooters: [],
      selectedScooter: null,
      selectedBikeStation: null,
      currentCenter: {
        lat: 60.92,
        lng: 10.723
      }
    }
  }

  //ny get geo
  componentDidMount() {
    this.fetchScooterData();
    this.fetchBikeData();
    this.getGeoLocation()
  }

  fetchScooterData = () => {
    console.log(config.apiUrl)
    fetch(config.apiUrl + "/scooter",
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then((result) => {
        this.setState({ scooters: result });
      })
      .catch((error) => { console.log(error); });
  }

  fetchBikeData = () => {
    fetch(config.apiUrl + "/citybike",
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then((result) => {

        this.setState({ bikeStations: result });
      })
      .catch((error) => { console.log(error); });
  }


  getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position.coords);
          this.setState(prevState => ({
            currentCenter: {
              ...prevState.currentCenter,
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          }))
        }
      )
    }
  }


  render() {
    return (
      <div>
        <LoadScript
          id="script-loader"
          googleMapsApiKey="AIzaSyAp2jh1zbAqgoQH8qpd8Af622VYmIdfeVY"
        >

          <GoogleMap
            id='example-map'
            options={{
              styles: mapStyle,
              fullscreenControl: false,
              mapTypeControl: false,
              streetViewControl:false
            }}
            zoom={18}
            center={
              this.state.currentCenter
            }

            mapContainerStyle={{
              height: '80vh',
              width: '100vw',
              margin: 0,
              padding: 0,
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
                  <div key={index}>
                    <ScooterMarker provider={scooter.providerName} position={{ lat: scooter.latitude, lng: scooter.longitude }} clusterer={clusterer} markerClicked={() => { this.setState({ selectedScooter: scooter }) }} />
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
                }}

              >

                <div>
                  {/* CARD COMPONENT HERE */}
                  {this.state.showDefaultCard ?

                    <InfoCard providerName={this.state.selectedScooter.providerName} battery={this.state.selectedScooter.batteryCapacity} toggleRideCard={() => { this.setState({ showDefaultCard: !this.state.showDefaultCard }) }} />
                    : <RideCard />}
                </div>
              </InfoWindow>
            )}





            {
              this.state.bikeStations.map((bikeStation, index) => {
                return (

                  <div key={index}>
                    <BikeStationMarker position={{ lat: bikeStation.latitude, lng: bikeStation.longitude }} markerClicked={() => { this.setState({ selectedBikeStation: bikeStation }) }} />
                  </div>
                )

              })
            }

            {this.state.selectedBikeStation && (
              <InfoWindow
                style={{ backgroundColor: 'red' }}
                position={{ lat: this.state.selectedBikeStation.latitude, lng: this.state.selectedBikeStation.longitude }}
                onCloseClick={() => {
                  this.setState({ selectedBikeStation: null })
                }} >

                <div>
                  CITYBIKE STATION
                  CARD COMPONENT HERE
              </div>
              </InfoWindow>
            )}


          </GoogleMap>
        </LoadScript>
        {this.state.showFiltercard ? <SortCard /> : null}
        <SortButton toggleSortCard={() => { this.setState({ showFiltercard: !this.state.showFiltercard }) }} />
      </div>
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