import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from '../../Components/Map/';
import { HeaderBar } from '../../Components/HeaderBar';
import {FooterBar} from '../../Components/FooterBar';
import 'bootstrap/dist/css/bootstrap.min.css';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,  //Hides or the shows the infoWindow
      activeMarker: {},          //Shows the active marker upon click
      selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
      scooters: []
    }
  }
  componentDidMount() {
    this.fetchScooterData();
  }

  fetchScooterData = () => {
    fetch("https://localhost:44359/api/scooter",
      {headers: {
        'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .then((result) => {this.setState({ scooters: result });
      })
      .catch((error) => { console.log(error); });
  }

  
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div>
      <HeaderBar/>
      <CurrentLocation
      centerAroundCurrentLocation
      google={this.props.google} >

      {this.state.scooters.map((scooter, index) => {
        return (
          <Marker
            key={index}
            onClick={this.onMarkerClick}
            name={scooter.providerName}
                battery={scooter.batteryCapacity}
                position={{ lat: scooter.latitude, lng: scooter.longitude }}
          />
        )}
        
      )}
      <Marker
            onClick={this.onMarkerClick}
            name='Her er du'
      />
      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
      >
        <div  style={{color:'black'}} >
          <h6>Scooter provider: {this.state.selectedPlace.name}</h6>
          <p>Battery: {this.state.selectedPlace.battery}%</p>
        </div>
      </InfoWindow>
    </CurrentLocation>
    <FooterBar/>
    </div>
       
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAooUPBzTGsLMvMXUvUsLxSBR0D6gTAQk8'
})(MapContainer);