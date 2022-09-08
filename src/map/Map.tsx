import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useState } from 'react';

import { office, symbol } from '../consts/consts';

type OfficeNode = {
  id: string;
  field_address: {
    locality: string;
    postal_code: string;
    address_line1: string;
    address_line2: string;
    latitude: number;
    longitude: number;
    zoom: number;
  };
};

const containerStyle = {
  width: '98%',
  height: '30rem',
  margin: '1.5rem auto',
};

export function Map() {
  const [selectedOffice, setSelectedOffice] = useState<OfficeNode | undefined | null>(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY as never,
  });

  const onClickMarker = () => {
    setSelectedOffice(office);
  };
  return (
    <>
      {isLoaded && (
        <>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={new google.maps.LatLng(office.field_address.latitude, office.field_address.longitude)}
            zoom={office.field_address.zoom}
          >
            <Marker
              icon={{
                url: symbol.src,
                anchor: new google.maps.Point(8, 45),
                scaledSize: new google.maps.Size(45, 45),
              }}
              key={office.id}
              onClick={() => onClickMarker()}
              position={{
                lat: office.field_address.latitude,
                lng: office.field_address.longitude,
              }}
            />

            {selectedOffice && (
              <InfoWindow
                position={{
                  lat: selectedOffice.field_address.latitude,
                  lng: selectedOffice.field_address.longitude,
                }}
                onCloseClick={() => setSelectedOffice(null)}
              >
                <div>
                  {' '}
                  <p className="text-primary-main">
                    {selectedOffice.field_address.address_line1}
                    {selectedOffice.field_address.address_line2}
                    <br />
                    {selectedOffice.field_address.postal_code}
                    <br />
                    {selectedOffice.field_address.locality}
                  </p>
                  <a
                    className="text-secondary-main"
                    href="https://www.google.com/maps/place/Ul.+kralja+Zvonimira+11,+53291,+Novalja/@44.5569125,14.8821947,17z/data=!3m1!4b1!4m5!3m4!1s0x47624a2fd5825dbf:0x295b07a1cb98013e!8m2!3d44.5569087!4d14.8843834"
                  >
                    See in Google Maps
                  </a>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </>
      )}
    </>
  );
}
