import React, { useState, useEffect } from "react";
import Image from "next/image";
import GoogleMapReact from "google-map-react";

//styles
import styles from "./googleMaps.module.scss";

const GoogleMaps = ({
  mapsStyleArray,
  markers,
  center = {
    lat: 10.99835602,
    lng: 77.01502627,
  },
}) => {
  const [myMap, setMyMap] = useState(null);

  const defaultProps = {
    center,
    zoom: 11,
  };
  const createMapOptions = (maps) => {
    return {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: false,
      styles: [...mapsStyleArray],
      zoomControl: false,
      fullscreenControl: false,
      disableDefaultUI: true,
    };
  };

  useEffect(() => {
    myMap && markers && fitBounds(myMap);

    return () => {};
  }, [markers, myMap]);

  const fitBounds = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    markers &&
      markers.map((sale) => {
        bounds.extend(new window.google.maps.LatLng(sale.lat, sale.lng));
      });

    map && map.fitBounds(bounds);
  };

  const handleApiLoaded = (map, maps) => {
    setMyMap(map);
  };

  return (
    <>
      <GoogleMapReact
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GMAPS_API_KEY }}
        draggable={false}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={createMapOptions}
      >
        {markers &&
          markers.map((sale, i) => {
            return (
              <div className='map_marker' key={i} lat={sale.lat} lng={sale.lng}>
                <Image
                  src='/svgs/location-pin.svg'
                  width={24}
                  height={24}
                  alt='map pin'
                />
                {/* <MapMarker fill='#157395' /> */}
              </div>
            );
          })}
      </GoogleMapReact>
    </>
  );
};

export default GoogleMaps;
