import React, { useState, useEffect } from "react";
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
    };
  };

  useEffect(() => {
    console.log(center);

    return () => {};
  }, [center]);

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
    console.log(bounds);
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
        bootstrapURLKeys={{ key: "AIzaSyAP4AJKi5yd5cXWRTS6JMlBFeSSA7VgHkE" }}
        draggable={false}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={createMapOptions}
      >
        {markers &&
          markers.map((sale, i) => {
            console.log(sale.lat, sale.lng);
            return (
              <div className='map_marker' key={i} lat={sale.lat} lng={sale.lng}>
                {/* <MapMarker fill='#157395' /> */}
              </div>
            );
          })}
      </GoogleMapReact>
    </>
  );
};

export default GoogleMaps;
