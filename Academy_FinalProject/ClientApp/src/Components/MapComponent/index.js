import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import mapStyle from '../MapBaseView/mapStyle'
import '../../Styles/style.css'


export default class MapComponent extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <React.Fragment>
                <LoadScript
                    id="script-loader"
                    googleMapsApiKey="AIzaSyAp2jh1zbAqgoQH8qpd8Af622VYmIdfeVY"
                >
                    <GoogleMap
                        onClick={() => { this.props.onClickMap() }}
                        id='SQT MAP'
                        options={mapOption}
                        zoom={18}
                        center={this.props.center}
                        mapContainerStyle={containerStyle}
                    >

                        {this.props.children}

                    </GoogleMap>
                </LoadScript>
            </React.Fragment>
        )
    }
}
const containerStyle = {
    height: '100vh',
    width: '100vw',
    marginTop: '75px',
    margin: 0,
    padding: 0,
}
const mapOption = {
    styles: mapStyle,
    fullscreenControl: false,
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    clickableIcons: false,
    gestureHandling: 'greedy',
}