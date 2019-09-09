import React, { Component } from 'react'
import { GoogleMap, LoadScript, InfoWindow, MarkerClusterer, } from '@react-google-maps/api'
import ScooterMarker from '../ScooterMarker'
import BikeStationMarker from '../BikeStationMarker'
import clusterPink from '../../Assets/clusterPink.png'
import mapStyle from './mapStyle'
import InfoCard from '../InfoCard'
import config from '../../config'
//import { ThemeProvider } from 'react-bootstrap';
import { ThemeProvider } from 'react-bootstrap';
//import CurrentPositionMarker from '../../Components/CurrentPositionMarker'
import RideCard from '../RideCard';
import FilterButton from '../FilterButton'
import LoadingSpinner from '../loadingspinner'
import clusterBlue from '../../Assets/clusterBlue.png'
import cluster20 from '../../Assets/cluster20.png'
import cluster30 from '../../Assets/cluster30.png'
import cluster50 from '../../Assets/cluster50.png'


import { HeaderBar } from '../../Components/HeaderBar';





export default class MapBaseLayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: {
        voiChecked: true,
        tierChecked: true,
        circChecked: true,
        zvippChecked: true,
        citybikeChecked: true,

      },
      mapIsLoadiong: true,
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

  filter = (provider) => {
    switch (provider) {
      case 'voi': this.setState(prevState => ({ filter: { ...prevState.filter, voiChecked: !this.state.filter.voiChecked } }))
        break;
      case 'tier': this.setState(prevState => ({ filter: { ...prevState.filter, tierChecked: !this.state.filter.tierChecked } }))
        break;
      case 'circ': this.setState(prevState => ({ filter: { ...prevState.filter, circChecked: !this.state.filter.circChecked } }))
        break;
      case 'zvipp': this.setState(prevState => ({ filter: { ...prevState.filter, zvippChecked: !this.state.filter.zvippChecked } }))
        break;
      case 'citybike': this.setState(prevState => ({ filter: { ...prevState.filter, citybikeChecked: !this.state.filter.citybikeChecked } }))
        break;
      default:
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
            onTilesLoaded={()=>{this.setState({mapIsLoadiong: false}) ; console.log('map has loaded.')}}
            options={{
              styles: mapStyle,
              //Toggle buttons on map
              fullscreenControl: false,
              zoomControl: false, 
              mapTypeControl: false,
              streetViewControl: false,
              clickableIcons: false,
              gestureHandling: 'greedy'
            }}
            zoom={18}
            center={
              this.state.currentCenter
            }

            mapContainerStyle={{
              height: '100vh',
              width: '100vw',
              margin: 0,
              padding: 0,
             // border: '0.6px solid #343a40'
            }}
          >      <HeaderBar />
             {this.state.mapIsLoadiong ? <LoadingSpinner /> : null }
            <MarkerClusterer
              averageCenter
              maxZoom={15}
              minimumClusterSize={3}
              styles={clusterIcons}
            >
              {
                (clusterer) => this.state.scooters.map((scooter, index) => (
                  <div key={index}>
                    {/* <ScooterMarker provider={scooter.providerName} position={{ lat: scooter.latitude, lng: scooter.longitude }} clusterer={clusterer} markerClicked={() => { this.setState({ selectedScooter: scooter }) }} /> */}
                    {this.state.filter.voiChecked && scooter.providerName === 'Voi' ?
                      <ScooterMarker provider={scooter.providerName} position={{ lat: scooter.latitude, lng: scooter.longitude }} clusterer={clusterer} markerClicked={() => { this.setState({ selectedScooter: scooter }) }} />
                      : null}
                    {this.state.filter.tierChecked && scooter.providerName === 'Tier' ?
                      <ScooterMarker provider={scooter.providerName} position={{ lat: scooter.latitude, lng: scooter.longitude }} clusterer={clusterer} markerClicked={() => { this.setState({ selectedScooter: scooter }) }} />
                      : null}
                    {this.state.filter.circChecked && scooter.providerName === 'Flash' ?
                      <ScooterMarker provider={scooter.providerName} position={{ lat: scooter.latitude, lng: scooter.longitude }} clusterer={clusterer} markerClicked={() => { this.setState({ selectedScooter: scooter }) }} />
                      : null}
                    {this.state.filter.zvippChecked && scooter.providerName === 'Zvipp' ?
                      <ScooterMarker provider={scooter.providerName} position={{ lat: scooter.latitude, lng: scooter.longitude }} clusterer={clusterer} markerClicked={() => { this.setState({ selectedScooter: scooter }) }} />
                      : null}
                  </div>
                ))
              }

            </MarkerClusterer> 


             {this.state.selectedScooter && (
              <InfoWindow
                style={{ backgroundColor: 'blue' }}
                position={{ lat: this.state.selectedScooter.latitude, lng: this.state.selectedScooter.longitude }}
                onCloseClick={() => {
                  this.setState({ selectedScooter: null, showDefaultCard: true })
                }}

              >
                {this.state.showDefaultCard ?
                  <InfoCard providerName={this.state.selectedScooter.providerName} battery={this.state.selectedScooter.batteryCapacity} toggleRideCard={() => { this.setState({ showDefaultCard: !this.state.showDefaultCard }) }} />
                  : <RideCard />}
              </InfoWindow>
            )}




            {this.state.filter.citybikeChecked ?
              this.state.bikeStations.map((bikeStation, index) => {
                return (
                  <BikeStationMarker key={index} position={{ lat: bikeStation.latitude, lng: bikeStation.longitude }} markerClicked={() => { this.setState({ selectedBikeStation: bikeStation }) }} />
                )
              }) : null}

            {this.state.selectedBikeStation && (
              <InfoWindow
                style={{ backgroundColor: 'red' }}
                position={{ lat: this.state.selectedBikeStation.latitude, lng: this.state.selectedBikeStation.longitude }}
                onCloseClick={() => {
                  this.setState({ selectedBikeStation: null })
                }} >

                <div>
                <h3>{this.state.selectedBikeStation.stationName} station</h3>
                <h4>Bikes available: {this.state.selectedBikeStation.bikesAvailable}</h4>
                <h4>Docks available: {this.state.selectedBikeStation.docksAvailable}</h4>
              </div>
              </InfoWindow>
            )}


          </GoogleMap>
        </LoadScript>

        <FilterButton
          setFilter={this.filter} />
      </div>
    )

  }
}

const clusterIcons = [
  // {
  //   url: under10,
  //   height: 15,
  //   width: 15,
  //   fontFamily: "Lato",
  //   textColor: "#96504b",
  // },
  {
    url: cluster20,
    height: 20,
    width: 20,
    borderRadius: '50%',
    fontFamily: "Lato",
    textColor: "#fff",
  },
  {
    url: cluster30,
    height: 30,
    width: 30,
    borderRadius: '20px',
    fontFamily: "Lato",
    textColor: "#fff",
  },
  {
    url: cluster50,
    height: 50,
    width: 50,
    borderRadius: 20,
    fontFamily: "Lato",
    textColor: "#fff",
  },
  // {
  //   url: over1000,
  //   height: 100,
  //   width: 100,
  //   fontFamily: "Lato",
  //   textColor: "#96504b",
  // }
]