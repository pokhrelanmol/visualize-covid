import React from "react";
import "../css/mapCards.css";
import GoogleMapReact from "google-map-react";
import useCoordinates from "./useCoordinates";
const Map = () => {
  const { latLong } = useCoordinates();
  return (
    <div>
      <div
        className="min-h-screen min-w-full"
        style={{ height: "100vh", width: "100%" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD3oraUzGoYXlmbF-5Yb8l48R8OC7gpOcY" }}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33,
          }}
          defaultZoom={0}
        >
          {latLong
            ? latLong.map(
                ({ lat, long, country, confirmed, deaths, active }) => {
                  return (
                    <div lat={lat} lng={long} className="map-cards">
                      <p>{`Country: ${country}`}</p>
                      <p>{`Confirmed: ${confirmed}`}</p>
                      <p>{`Deaths: ${deaths}`}</p>
                      <p>{`Active:  ${active}`}</p>
                    </div>
                  );
                }
              )
            : () => <div> unable to fetch data</div>}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
