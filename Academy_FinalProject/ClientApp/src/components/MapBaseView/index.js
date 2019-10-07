import React from 'react'
import { MarkerClusterer } from '@react-google-maps/api'
import ScooterMarker from '../ScooterMarker'
import BikeMarker from '../BikeMarker'
import InfoCard from '../InfoCard'
import config from '../../config'
import CurrentPositionMarker from '../../Components/CurrentPositionMarker'
import RideCard from '../RideCard';
import FilterButton from '../FilterButton'
import LoadingSpinner from '../loadingspinner'
import cluster20 from '../../Assets/cluster20.png'
import cluster30 from '../../Assets/cluster30.png'
import cluster50 from '../../Assets/cluster50.png'
import bikecluster20 from '../../Assets/bikecluster20.png'
import bikecluster30 from '../../Assets/bikecluster30.png'
import bikecluster50 from '../../Assets/bikecluster50.png'
import '../../Styles/style.css'
import MapComponent from '../MapComponent'


export default class MapBaseLayer extends React.PureComponent {
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
      showScooterFooter: false,
      showBikeFooter: false,
      mapIsLoadiong: true,
      showDefaultCard: true,
      bikeStations: [],
      scooters: [],
      selectedScooter: null,
      selectedBikeStation: null,
      currentCenter: {
        lat: 59.92,
        lng: 10.723
      }
    }
  }


  //ny get geo
  componentDidMount() {
    this.getGeoLocation()
    this.fetchScooterData();
    this.fetchBikeData();
  }
  

  fetchScooterData = () => {
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

        this.setState({ bikeStations: result, mapIsLoadiong: false });
      })
      .catch((error) => { console.log(error); });
  }


  getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
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
      case 'citybike': this.setState(prevState => ({ filter: { ...prevState.filter, citybikeChecked: !this.state.filter.citybikeChecked } }))
        break;
      case 'voi': this.setState(prevState => ({ filter: { ...prevState.filter, voiChecked: !this.state.filter.voiChecked } }))
        break;
      case 'tier': this.setState(prevState => ({ filter: { ...prevState.filter, tierChecked: !this.state.filter.tierChecked } }))
        break;
      case 'circ': this.setState(prevState => ({ filter: { ...prevState.filter, circChecked: !this.state.filter.circChecked } }))
        break;
      case 'zvipp': this.setState(prevState => ({ filter: { ...prevState.filter, zvippChecked: !this.state.filter.zvippChecked } }))
        break;
      default:
    }
  }
  onMapClicked = () => {
    this.state.showScooterFooter || this.state.showBikeFooter ? 
    this.setState({
      showScooterFooter: false,
      showDefaultCard: true,
      showBikeFooter: false
    }) : null
  }

 

  allScooters = () => {
    return (
      <MarkerClusterer
        averageCenter
        minimumClusterSize={3}
        styles={clusterIcons}
      >
        {
          (clusterer) => this.state.scooters.map((scooter, index) => (
            <React.Fragment key={index}>
              {this.state.filter.voiChecked && scooter.providerName === 'Voi' ?
                <ScooterMarker provider={scooter.providerName} position={{ lat: scooter.latitude, lng: scooter.longitude }} clusterer={clusterer} markerClicked={() => { this.setState({ selectedScooter: scooter, showScooterFooter: true, showBikeFooter: false }) }} />
                : null}
              {this.state.filter.tierChecked && scooter.providerName === 'Tier' ?
                <ScooterMarker provider={scooter.providerName} position={{ lat: scooter.latitude, lng: scooter.longitude }} clusterer={clusterer} markerClicked={() => { this.setState({ selectedScooter: scooter, showScooterFooter: true, showBikeFooter: false }) }} />
                : null}
              {this.state.filter.circChecked && scooter.providerName === 'Flash' ?
                <ScooterMarker provider={scooter.providerName} position={{ lat: scooter.latitude, lng: scooter.longitude }} clusterer={clusterer} markerClicked={() => { this.setState({ selectedScooter: scooter, showScooterFooter: true, showBikeFooter: false }) }} />
                : null}
              {this.state.filter.zvippChecked && scooter.providerName === 'Zvipp' ?
                <ScooterMarker provider={scooter.providerName} position={{ lat: scooter.latitude, lng: scooter.longitude }} clusterer={clusterer} markerClicked={() => { this.setState({ selectedScooter: scooter, showScooterFooter: true, showBikeFooter: false }) }} />
                : null}
            </React.Fragment>
          ))
        }
      </MarkerClusterer>
    )
  }
  allBikestation = () => {
    return (
      this.state.filter.citybikeChecked ? 
      <MarkerClusterer
        averageCenter
        minimumClusterSize={3}
        styles={bikeClusterIcons}
      >
        {
          (clusterer) => this.state.bikeStations.map((bikeStation, index) => (
            <BikeMarker
              key={index}
              position={{ lat: bikeStation.latitude, lng: bikeStation.longitude }}
              clusterer={clusterer}
              markerClicked={() => { this.setState({ selectedBikeStation: bikeStation, showScooterFooter: false, showDefaultCard: true, showBikeFooter: true }) }}
            />
          ))
        }
      </MarkerClusterer>
    : null)
  }
  render() {
    return (
      <React.Fragment>
        {this.state.mapIsLoadiong ? <LoadingSpinner /> : null}
       
          <MapComponent
            // The onClick method is used to call the method that hides the Footerbar menu
            onClickMap={this.onMapClicked }
            center={this.state.currentCenter}
            >

            {this.state.mapIsLoadiong ? null : this.allBikestation()}
            {this.state.mapIsLoadiong ? null : this.allScooters()}
            
            
            <CurrentPositionMarker position={this.state.currentCenter} />
          </MapComponent>
        

        {this.state.selectedBikeStation && (this.state.showBikeFooter ?
          
            <div
              className="infoCardInnerContainer"
              onCloseClick={() => { this.setState({ selectedBikeStation: null }) }} 
              >
              {this.state.showBikeFooter ? this.onMapClicked : null}
              <div className="bicycleInfo">
                <h5 style={{ fontFamily: "'Red Hat Display', sans-serif", color: "black"}}>{this.state.selectedBikeStation.stationName} station</h5>
                <h6>Bikes available: {this.state.selectedBikeStation.bikesAvailable}</h6>
                <h6>Docks available: {this.state.selectedBikeStation.docksAvailable}</h6>
                <button className={'btnbysykkel'}><a href="oslobysykkel:stations" className={'bysykkelLinks'}>Go To App</a></button>
              </div>
            </div>
           : null

          // The method belows calls the Footerbar
        )}

        {this.state.showDefaultCard ?
          this.state.showScooterFooter ? <InfoCard providerName={this.state.selectedScooter.providerName} battery={this.state.selectedScooter.batteryCapacity}
            toggleRideCard={() => { this.setState({ showDefaultCard: !this.state.showDefaultCard }) }} />
            : null : <RideCard />}


        <FilterButton setFilter={this.filter} />
      </React.Fragment>
    )
  }
}

const bikeClusterIcons = [
  {
    url: bikecluster20,
    height: 20,
    width: 20,
    //borderRadius: '50%',
    fontFamily: "Lato",
    textColor: "#fff",
    zIndex: 2
  },
  {
    url: bikecluster30,
    height: 30,
    width: 30,
    //borderRadius: '20px',
    fontFamily: "Lato",
    textColor: "#fff",
    zIndex: 2
   
  },
  {
    url: bikecluster50,
    height: 50,
    width: 50,
    //borderRadius: 20,
    fontFamily: "Lato",
    textColor: "#fff",
    zIndex: 2
    
  }
]
const clusterIcons = [
  {
    url: cluster20,
    height: 20,
    width: 20,
    //borderRadius: '50%',
    fontFamily: "Lato",
    textColor: "#fff",
    zIndex: 100
  },
  {
    url: cluster30,
    height: 30,
    width: 30,
    //borderRadius: '20px',
    fontFamily: "Lato",
    textColor: "#fff",
    zIndex: 100
  },
  {
    url: cluster50,
    height: 50,
    width: 50,
    //borderRadius: 20,
    fontFamily: "Lato",
    textColor: "#fff",
    zIndex: 100
  }
]