import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";


export class MapContainer extends Component {
  state = {
    id: null,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    currentLocation: null,
  };

  componentDidMount() {
    if ("geolocation" in navigator) {
      const that = this;
      navigator.geolocation.getCurrentPosition(function (position) {
        that.setState({
          currentLocation: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        });
      });
    } else {
      console.log("Not Available");
    }
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      this.state.currentLocation && (
        <Map
          google={this.props.google}
          zoom={14}
          style={{width: "100%", height: "80%"}}
          initialCenter={this.state.currentLocation}
        >
          <Marker 
            position={this.state.currentLocation}
            onClick={this.onMarkerClick}
            name={'Current Location'}
          />
          {this.props.resources.map((resource) => {
            return (
              <Marker
                onClick={this.onMarkerClick}
                position={{ lat: resource.latitude, lng: resource.longitude }}
                key={resource.external_id}
                name={resource.title}
                info={resource}
              />
            );
          })}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h2>{this.state.selectedPlace.info?.title ||  this.state.selectedPlace.name}</h2>
              <h5>{this.state.selectedPlace.info?.category}</h5>
              <p>{this.state.selectedPlace.info?.email}</p>
              <strong>Contact: {this.state.selectedPlace.info?.phone_1}</strong>
            </div>
          </InfoWindow>
        </Map>
      )
    );
  }
}

export default GoogleApiWrapper((props) => ({
  apiKey: "GOOGLE_API_KEY",
  resources: props.resources,
}))(MapContainer);
