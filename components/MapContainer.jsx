import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { fetchLocation } from '../lib/external';
import { faDirections } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { tabsInfo } from '@lib/tabs';
import { getHaversineDistance } from '@lib/utils';
import MapInfoWindow from './MapInfoWindow';
import Badge from './Badge';

const defaultLocation = {
  lat: '20.593684',
  lng: '78.96288'
};
const defaultZoom = 5;

export class MapContainer extends Component {
  state = {
    id: null,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    centerLocation: null,
    zoom: defaultZoom
  };

  componentDidMount() {
    if (this.props.district || this.props.state) {
      fetchLocation(`${this.props.district} ${this.props.state}`)
        .then((response) => {
          if (response.data.results && response.data.results.length > 0) {
            const result = response.data.results[0];
            this.setState({
              centerLocation: result.geometry.location || defaultLocation,
              zoom: result.geometry.location ? 14 : defaultZoom
            });
          }
        })
        .catch((err) => {
          console.log('Error while fetching searched location\'s lattitude and longitude: ', err);
          this.setState({
            centerLocation: defaultLocation,
            zoom: defaultZoom
          });
        });
    }
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  openInGoogleMap = () => {
    const lat = this.state.selectedPlace?.info.latitude;
    const lng = this.state.selectedPlace?.info.longitude;
    window.open(`https://maps.google.com/?q=${lat},${lng}`, '_blank');
  };

  getCategoryDetails = (category) => {
    let categoryDetails = tabsInfo.find((tab) => tab.value === category);
    if (!categoryDetails) {
      categoryDetails = tabsInfo.find((tab) => tab.value === 'all');
    }
    return categoryDetails;
  }

  render() {
    return (
      this.state.centerLocation && (
        <Map
          google={this.props.google}
          zoom={this.state.zoom}
          style={{ width: '100%', height: '80%' }}
          initialCenter={this.state.centerLocation}>
          <Marker
            position={this.state.centerLocation}
            onClick={this.onMarkerClick}
            name={'Searched Location'}
            isCurrentLocation={true}
          />
          {this.props.resources.map((resource) => {
            return (
              <Marker
                onClick={this.onMarkerClick}
                position={{ lat: resource.latitude, lng: resource.longitude }}
                key={resource.external_id}
                name={resource.title}
                info={resource}
                distance={getHaversineDistance(this.props.currentLocation, {
                  lat: resource.latitude,
                  lng: resource.longitude
                })}
              />
            );
          })}
          <MapInfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}>
            <div>
              <h1 class="text-black-800">
                <strong>{this.state.selectedPlace.info?.title ||
                  this.state.selectedPlace.name}</strong>
                {!this.state.selectedPlace?.isCurrentLocation && (
                  <Badge status={this.state.selectedPlace.info?.verification_status} />
                )}
              </h1>
              {!this.state.selectedPlace?.isCurrentLocation && (
                <>
                  {this.state.selectedPlace.info?.phone_1 && (
                    <strong className="text-purple-500">
                      Contact 1: <a href={`tel:${this.state.selectedPlace.info?.phone_1}`}>{this.state.selectedPlace.info?.phone_1}</a>
                    </strong>
                  )}
                  {this.state.selectedPlace.info?.phone_2 && (
                    <strong className="text-purple-500">
                      Contact 2: <a href={`tel:${this.state.selectedPlace.info?.phone_2}`}>{this.state.selectedPlace.info?.phone_2}</a>
                    </strong>
                  )}
                  {this.state.selectedPlace.info?.email && (
                    <p>{this.state.selectedPlace.info?.email}</p>
                  )}
                  {this.state.selectedPlace.info?.category && (
                    <div>
                      Category&nbsp;
                      <FontAwesomeIcon
                        icon={this.getCategoryDetails(this.state.selectedPlace.info?.category).icon}
                        className="w-2 h-2 dark:text-primary-500"
                      />
                      <span
                        className={`text-xs ml-2 ${this.getCategoryDetails(this.state.selectedPlace.info?.category).color}`}>
                        {this.getCategoryDetails(this.state.selectedPlace.info?.category).name}
                      </span>
                    </div>
                  )}
                  <button
                    onClick={this.openInGoogleMap}
                    className="px-2 py-1 md:px-3 md:py-2 mr-2 rounded-full cursor-pointer flex items-center bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
                    <FontAwesomeIcon
                      icon={faDirections}
                      className="w-2 h-2 dark:text-primary-500"
                    />
                    <span className="text-xs ml-2">Get Directions</span>
                  </button>
                  {this.state.selectedPlace.distance && (
                    <p>
                      Approx. Distance: {this.state.selectedPlace.distance}
                      Kms from your location
                    </p>
                  )}
                </>
              )}
            </div>
          </MapInfoWindow>
        </Map>
      )
    );
  }
}

export default GoogleApiWrapper((props) => ({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  resourceChoosen: props.resourceChosen,
  resources: props.resources,
  districtChoosen: props.districtChoosen,
  stateChoosen: props.stateChoosen,
  currentLocation: props.currentLocation
}))(MapContainer);
