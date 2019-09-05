import React, { Component } from 'react';
import { HeaderBar } from '../../Components/HeaderBar';
import {FooterBar} from '../../Components/FooterBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import voiDot from '../../Assets/voi-dot.png'
import tierDot from '../../Assets/tier-dot.png'

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,  //Hides or the shows the infoWindow
      activeMarker: {},          //Shows the active marker upon click
      selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
      scooters: [],
      bikes: []
    }
  }
  componentDidMount() {
    this.fetchScooterData();
    this.fetchBikeData();
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
  
  

export class AppView extends Component {

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
            // label= {scooter.providerName === 'Voi' ? 'V' : 'T'} // Inserts a letter into the label
          //   icon={ { 
          //   url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' // The old method
          // }}
          icon= {scooter.providerName === 'Voi' ? 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' : 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}

            onClick={this.onMarkerClick}
            name={scooter.providerName}
                battery={scooter.batteryCapacity}
                position={{ lat: scooter.latitude, lng: scooter.longitude }}
          />
        )}
        

        
      )}
    {this.state.bikes.map((bike, index) => {
        return (
          <Marker
            key={index}
            // label= {scooter.providerName === 'Voi' ? 'V' : 'T'} // Inserts a letter into the label
          //   icon={ { 
          //   url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' // The old method
          // }}
          icon= 'http://maps.google.com/mapfiles/kml/paddle/B.png'

            onClick={this.onMarkerClick}
            name={bike.stationName}
            capacity={bike.stationCapacity}
            available={bike.bikesAvailable}
            docks={bike.docksAvailable}
            position={{ lat: bike.latitude, lon: bike.longitude }}
          />
        )}
        

        
      )}

      <Marker
            onClick={this.onMarkerClick}
            icon="http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
            name='<p><a href="/">Reserver sparkesykkel</a></p>'
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
