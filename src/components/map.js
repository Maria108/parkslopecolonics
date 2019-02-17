import React, { Component } from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'
import '../styles/contact.css'

const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY

const mapStyles = {
  width: '95%',
  height: '100%',
}

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }

  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 40.6708484,
            lng: -73.98586,
          }}
        >
          <Marker onClick={this.onMarkerClick} />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <p className="marker-name">Park Slope Colonics</p>
              <p>313 7th St Brooklyn</p>
              <a
                href="https://www.google.com/maps/dir//Park+Slope+Colonics,+7th+Street,+Brooklyn,+NY/@40.7136227,-74.0399837,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c25bfecdb8bcc7:0x40af216f52f8c20a!2m2!1d-73.9858381!2d40.6708317"
                target="_blank"
                rel="noopener noreferrer"
              >
                Directions
              </a>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY,
})(MapContainer)
