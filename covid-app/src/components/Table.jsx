import React, { useContext, useEffect } from "react";
import axios from "axios";

import relativePlugin from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import LoadingAnimation from "./LoadingAnimation";
import Search from "./Search";
import { TableContext } from "../context/tableContext";

dayjs.extend(relativePlugin);

const Table = ({ countriesData, setNumberOfData, numberOfData }) => {
  const { _countriesData } = useContext(TableContext);
  console.log(_countriesData);
  useEffect(() => {}, [countriesData, numberOfData]);
  const handleLoadMore = () => {
    setNumberOfData(numberOfData + 15);
  };

  return (
    <div className="p-20 w-full">
      <Search />
      <table className="flex flex-col items-center h-96 mx-auto   border-black border bg-gray-200 overflow-y-scroll   overflow-scroll ">
        <thead className="w-full">
          <tr className=" text-white  flex justify-around items-center w-full  bg-black border-b border-gray-600 uppercase ">
            <th className="">Country</th>
            <th className=" ">Confirmed</th>
            <th className=" ">Deaths</th>
            <th className="">Recovered</th>
            <th className=" ">Last Update</th>
          </tr>
        </thead>
        <tbody className="flex justify-center items-center flex-col ">
          {_countriesData ? (
            <tr className="text-center w-full text-gray-500">
              <td className=" border w-64 border-gray-600 p-3 capitalize ">
                {_countriesData.country}
              </td>
              <td className=" border w-64  hover:bg-yellow-300 border-gray-600  p-3">
                {_countriesData.confirmed}
              </td>
              <td className=" border w-64 hover:bg-red-300  border-gray-600 p-3">
                {_countriesData.deaths}
              </td>
              <td className=" border w-64 hover:bg-green-300  border-gray-600 p-3">
                {_countriesData.recovered}
              </td>
              <td className=" border w-64 border-gray-600 p-3  text-gray-500">
                {dayjs(_countriesData.lastUpdate).fromNow()}
              </td>
            </tr>
          ) : countriesData.length >= numberOfData ? (
            countriesData.map((data, index) => (
              <tr className="text-center w-full text-gray-500" key={index}>
                <td className=" border w-64 border-gray-600 p-3 capitalize ">
                  {data.country}
                </td>
                <td className=" border w-64  hover:bg-yellow-300 border-gray-600  p-3">
                  {data.confirmed}
                </td>
                <td className=" border w-64 hover:bg-red-300  border-gray-600 p-3">
                  {data.deaths}
                </td>
                <td className=" border w-64 hover:bg-green-300  border-gray-600 p-3">
                  {data.recovered}
                </td>
                <td className=" border w-64 border-gray-600 p-3  text-gray-500">
                  {dayjs(data.lastUpdate).fromNow()}
                </td>
              </tr>
            ))
          ) : (
            <LoadingAnimation />
          )}
        </tbody>
      </table>
      <button
        className="text-blue-500 float-right mr-20 mt-2"
        onClick={handleLoadMore}
      >
        Load more
      </button>
    </div>
  );
};

export default Table;
