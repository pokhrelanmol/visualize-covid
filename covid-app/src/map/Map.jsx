import React from "react";

import GoogleMapReact from "google-map-react";
import useCoordinates from "./useCoordinates";
const Map = () => {
  const { latLong } = useCoordinates();
  console.log(latLong);
  return (
    <div>
      <div style={{ height: "100vh", width: "100%" }}>
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
                    <div
                      lat={lat}
                      lng={long}
                      className="w-20 p-4 hover:bg-black transform scale-150 h-20 hover:z-100 rounded-md bg-blue-400 text-white text-center"
                    >
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
