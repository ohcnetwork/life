import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { fetchLocation } from '../lib/external';

const defaultLocation = {
  lat: "20.593684",
  lng: "78.96288",
}
const defaultZoom = 5;

export class MapContainer extends Component {
  state = {
    id: null,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    currentLocation: null,
    zoom: defaultZoom,
  };

  componentDidMount() {
    if (this.props.district || this.props.state) {
      fetchLocation(`${this.props.district} ${this.props.state}`).then((response) => {
        if (response.data.results && response.data.results.length > 0) {
          const result = response.data.results[0];
          this.setState({
            currentLocation: result.geometry.location || defaultLocation,
            zoom: result.geometry.location ? 14 : defaultZoom
          });
        }
      }).catch(() => {
        this.setState({
          currentLocation: defaultLocation,
          zoom: defaultZoom
        });
      })
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
          zoom={this.state.zoom}
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
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  resources: props.resources,
  districtChoosen: props.districtChoosen,
  stateChoosen: props.stateChoosen,
}))(MapContainer);
