import React from "react";
import GoogleMapReact from "google-map-react";
import useCountryNames from "../customHooks/useCountryNames";

const Map = () => {
  const { countries } = useCountryNames();
  console.log(countries);
  return (
    <div>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD3oraUzGoYXlmbF-5Yb8l48R8OC7gpOcY" }}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33,
          }}
          defaultZoom={1}
        >
          <div lat={19.449759} lng={76.108221}>
            marker
          </div>
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
