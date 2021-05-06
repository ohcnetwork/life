import { useState, useEffect } from 'react';

const useCurrentLocation = () => {
  const [error, setError] = useState();
  const [location, setLocation] = useState();

  // Success handler for geolocation's `getCurrentPosition` method
  const handleSuccess = position => {
    const { latitude, longitude } = position.coords;

    setLocation({
      lat: latitude,
      lng: longitude
    });
  };

  // Error handler for geolocation's `getCurrentPosition` method
  const handleError = error => {
    setError(error.message);
  };

  useEffect(() => {
    // If the geolocation is not defined in the used browser you can handle it as an error
    if (!navigator.geolocation) {
      setError('Geolocation is not supported.');
      return;
    }
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
      timeout: 1000 * 60 * 1 // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
    });
  }, []);
  return { location, error };
};

export default useCurrentLocation;
