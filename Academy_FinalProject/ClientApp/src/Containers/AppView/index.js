import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from '../../Components/Map/';

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
      {//kommentar lagt til//mermer
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => response.json())
      .then((result) => {
        this.setState({ scooters: result });
        console.log(result)

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

      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google} >

        {this.state.scooters.map((scooter, index) => {


          return (

            

              
            <Marker
              key={index}
              onClick={this.onMarkerClick}
<<<<<<< HEAD
              name={scooter.Provider}
              position={{ 'lat': {...this.state.scooters.latitude}, 'lng': {...this.state.scooters.longitude} }}
=======
              name={scooter.providerName}
              battery={scooter. batteryCapacity}
              position={{ lat: scooter.latitude, lng: scooter.longitude }}
>>>>>>> 619311bc563b918cc6bb89022134acd9903a0f43
            />

          )
        })}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>
             Scooter provider:  {this.state.selectedPlace.name} 
             {this.state.selectedPlace.battery}
            </h4>
          </div>
        </InfoWindow>


      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAooUPBzTGsLMvMXUvUsLxSBR0D6gTAQk8'
})(MapContainer);