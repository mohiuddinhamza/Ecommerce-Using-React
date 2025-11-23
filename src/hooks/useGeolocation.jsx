import { useState } from 'react';

export default function useGeolocation() {
  const [location, setLocation] = useState(null);

  const detectLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            const address = data.address;
            setLocation({
              latitude,
              longitude,
              city: address.city || address.town || address.village || '',
              state: address.state || '',
              country: address.country || '',
              postcode: address.postcode || '',
            });
          })
          .catch((error) => {
            console.error('Error fetching geolocation data:', error);
            setLocation({ latitude, longitude });
          });
      },
      (error) => {
        console.error('Geolocation error:', error);
      }
    );
  };

  return { location, detectLocation };
}
