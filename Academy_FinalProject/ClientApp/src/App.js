import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './Map';
import ReactDOM from 'react-dom';

const mapStyles = {
  map: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
    scooters: [{
      "Provider": "",
      "lat": 0,
      "lng": 0,
    }]
  };

  fetchScooterData() {
    fetch('https://localhost:44359/api/scooter', {
      method: 'GET',
      header: "'Access-Control-Allow-Headers', 'Content-Type, Accept, X-Requested-With, remember-me'"
      
    })
      .then(response => response)
      .then((result) => {
        this.setState({ scooters: result });
        console.log(result)

      })
      .catch((error) => { console.log(error); });
  }

  componentDidMount(){
    this.fetchScooterData();
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

      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google} >



        {this.state.scooters.map((scooter, index) => {
          const coords = {
            latitude: scooter.lat,
            longitude: scooter.lng,
          };
          return (
            <Marker
              onClick={this.onMarkerClick}
              name={scooter.Provider}
              position={{ lat: scooter.lat, lng: scooter.lng }}
            />
          )
        })}



        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        
    </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAooUPBzTGsLMvMXUvUsLxSBR0D6gTAQk8'
})(MapContainer);