<<<<<<< HEAD
import React, { Component } from 'react';
import { GoogleApiWrapper,InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './Map';

// KAN VÆRE I EN CONTAINER/COMPONENT
export class MapContainer extends Component {
    state = {
     showingInfoWindow: false,  //Hides or the shows the infoWindow
     activeMarker: {},          //Shows the active marker upon click
     selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
   };

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
        <Marker
          onClick={this.onMarkerClick}
          name={'You are here'}
        />
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
=======
import React from 'react';
import MapContainer from '../src/Containers/AppView';

function App() {
  return (
    <div className="App">
      <MapContainer/>
    </div>
  );
>>>>>>> 60f1abd44d9912a9bd45cbcdfafdb538b178854e
}

export default App;