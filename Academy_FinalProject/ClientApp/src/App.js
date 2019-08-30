import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.946548,
      lng: 10.766970
    },
    zoom: 18
  };
 
  render() {
    return (
      // TODO: Få på auto-tracking på vår plassering
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAooUPBzTGsLMvMXUvUsLxSBR0D6gTAQk8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent text='some text' lat='59.946548' lng='10.766970'/>
        </GoogleMapReact>
      </div>
    );
  }
}
// const Marker = props => {return <div className="SUPERAWSM"></div>}
 
export default SimpleMap;