import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";
import Image from "next/image";

function AirbnbMap({ searchResults }) {
  const [seletedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResults.map((item) => {
    return {
      longitude: item.long,
      latitude: item.lat,
    };
  });

  // THE LATITUDE AND LONGITUDE OF CENTER OF LOCATION COORDINATES
  const center = getCenter(coordinates);

  const [viewState, setViewState] = React.useState({
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  const onMove = React.useCallback(({ viewState }) => {
    setViewState({
      longitude: viewState.longitude,
      latitude: viewState.latitude,
    });
  }, []);

  console.log(seletedLocation);

  return (
    <Map
      {...viewState}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/joy70/cl0evdpqf001714o27fgruzra"
      mapboxAccessToken={process.env.mapbox_key}
      onMove={onMove}
    >
      {searchResults.map((item, index) => {
        return (
          <div key={index}>
            <Marker
              key={`marker-${index}`}
              longitude={item.long}
              latitude={item.lat}
              anchor="top"
            >
              <img
                onClick={() => setSelectedLocation(item)}
                src="../pin.png"
                alt="pin"
                className="h-6 animate-bounce"
                aria-label="push-pin"
              ></img>
            </Marker>

            {seletedLocation.lat === item.lat ? (
              <Popup
                key={index}
                onClose={() => setSelectedLocation({})}
                closeOnClick={false}
                latitude={item.lat}
                longitude={item.long}
              >
                <div className="flex items-center space-x-2 p-1">
                  <Image
                    src={item.img}
                    layout="fixed"
                    objectFit="cover"
                    height={30}
                    width={30}
                  ></Image>
                  <p className="text-xs">{item.title}</p>
                </div>
              </Popup>
            ) : (
              false
            )}
          </div>
        );
      })}
    </Map>
  );
}

export default AirbnbMap;
