import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const destinations = [
    { name: "Tulum, Mexico", position: [20.214788, -87.430588] },
    { name: "Petang, Indonesia", position: [-8.3886, 115.2461] },
    { name: "Leshan, China", position: [29.5521, 103.7656] },
    { name: "Cape Town, South Africa", position: [-33.9249, 18.4241] },
    { name: "Kyoto, Japan", position: [35.0116, 135.7681] },
    { name: "Reykjavik, Iceland", position: [64.1466, -21.9426] }
  ];

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBpTZ5EheN_pwyE4sjrhZwvMDYsoPbhSGQ">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={{ lat: -3.745, lng: -38.523 }}
        zoom={2}
      >
        {destinations.map(destination => (
          <Marker key={destination.name} position={destination.position} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
