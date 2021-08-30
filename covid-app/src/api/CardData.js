import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import CountryWiseData from "./CountryWiseData";
const baseUrl = "https://covid19.mathdro.id/api";
const CardData = () => {
  const [apiData, setApiData] = useState({
    confirmed: null,
    deaths: null,
    recovered: null,
  });
  useEffect(() => {
    const getApiData = async () => {
      try {
        let res = await axios.get(baseUrl);
        const confirmed = await res.data.confirmed.value;
        const recovered = await res.data.recovered.value;
        const deaths = await res.data.deaths.value;
        setApiData({
          confirmed,
          recovered,
          deaths,
        });
      } catch (error) {
        console.log(error)
      }
    };
    getApiData();
  }, []);
  return (
    <>
      <Card ApiData={apiData} />
      <CountryWiseData />
    </>
  );
};
export default CardData;
