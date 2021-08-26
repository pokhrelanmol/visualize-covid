import React, { useEffect } from "react";
const Card = ({ ApiData }) => {
  useEffect(() => {}, [ApiData]);
  if (ApiData) {
    return (
      <div className="container bg-gray-50 min-w-full min-h-screen flex justify-center pt-8 gap-8 flex-wrap ">
        <div className="bg-yellow-400 text-white font-extrabold text-3xl w-52 h-40 shadow-md rounded-md grid place-content-center">
          <h3 className="text-gray-500 pb-4">Confirmed</h3>
          {ApiData.confirmed}
        </div>
        <div className="bg-red-400 text-white  font-extrabold text-3xl w-52 h-40 shadow-md rounded-m grid place-content-center">
          <h3 className="text-gray-500 pb-4">Deaths</h3>
          {ApiData.deaths}
        </div>

        <div className="bg-green-400 text-white font-extrabold text-3xl w-52 h-40 shadow-md rounded-md grid place-content-center">
          <h3 className="text-gray-500 pb-4">Recovered</h3>
          {ApiData.recovered}
        </div>
        <div className="bg-green-400 text-white font-extrabold text-3xl w-52 h-40 shadow-md rounded-md grid place-content-center">
          <h3 className="text-gray-500 pb-4">Active</h3>
          {ApiData.confirmed - (ApiData.recovered + ApiData.deaths)}
        </div>
      </div>
    );
  }
};

export default Card;
