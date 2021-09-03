import React, { useEffect } from "react";
import LoadingAnimation from "./LoadingAnimation.jsx";
import Tilt from "react-tilt";

const Card = ({ ApiData }) => {
  const active = ApiData.confirmed - (ApiData.deaths + ApiData.recovered);
  const recovered = ApiData.confirmed - (active + ApiData.deaths);
  useEffect(() => {}, [ApiData]);
  if (ApiData) {
    return (
      <>
        <h1 className="text-center mt-5 "> Live Covid Data Of the World</h1>
        <hr />
        <div className="container min-w-full   flex justify-center pt-8 gap-8 flex-wrap ">
          <Tilt
            className="Tilt"
            options={{ max: 25 }}
            style={{ height: 250, width: 250 }}
          >
            <div className="Tilt-inner">
              <div className="bg-yellow-400 text-white font-extrabold text-3xl w-52 h-40 shadow-md rounded-md grid place-content-center">
                <h3 className="text-gray-500 pb-4">Confirmed</h3>
                {ApiData.confirmed ? ApiData.confirmed : <LoadingAnimation />}
              </div>
            </div>
          </Tilt>
          <Tilt
            className="Tilt"
            options={{ max: 25 }}
            style={{ height: 250, width: 250 }}
          >
            <div className="Tilt-inner">
              <div className="bg-red-400 text-white  font-extrabold text-3xl w-52 h-40 shadow-md rounded-md grid place-content-center">
                <h3 className="text-gray-500 pb-4">Deaths</h3>
                {ApiData.deaths ? ApiData.deaths : <LoadingAnimation />}
              </div>
            </div>
          </Tilt>
          <Tilt
            className="Tilt"
            options={{ max: 25 }}
            style={{ height: 250, width: 250 }}
          >
            <div className="Tilt-inner">
              <div className="bg-green-400 text-white font-extrabold text-3xl w-52 h-40 shadow-md rounded-md grid place-content-center">
                <h3 className="text-gray-500 pb-4">Recovered</h3>
                {active ? recovered : <LoadingAnimation />}
              </div>
            </div>
          </Tilt>
          <Tilt
            className="Tilt"
            options={{ max: 25 }}
            style={{ height: 250, width: 250 }}
          >
            <div className="Tilt-inner">
              <div className="bg-pink-300 text-white font-extrabold text-3xl w-52 h-40 shadow-md rounded-md grid place-content-center">
                <h3 className="text-gray-500 pb-4">Active</h3>
                {active ? active : <LoadingAnimation />}
              </div>
            </div>
          </Tilt>
        </div>
      </>
    );
  }
};

export default Card;
