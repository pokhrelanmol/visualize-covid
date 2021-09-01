import React, { useEffect, useState } from "react";

import axios from "axios";
import Table from "../components/Table";
import useCountryNames from "../customHooks/useCountryNames";

export const CountryWiseData = () => {
  const [countryWiseData, setCountryWiseData] = useState([{}]);
  const formatCountryData = (data) => {
    const formattedData = {
      confirmed: data.confirmed.value,
      recovered: data.recovered.value,
      deaths: data.deaths.value,
      lastUpdate: data.lastUpdate,
    };
    return formattedData;
  };

  // get all country names from custom hook
  const { countries } = useCountryNames();
  const getCountryData = async (country) => {
    let data;
    try {
      const res = await axios.get(
        `https://covid19.mathdro.id/api/countries/${country}`
      );
      data = await res.data;
      data = formatCountryData(data);
    } catch (error) {
      throw new Error();
    }
    return data;
  };

  // state to load a number countries and their data  functionality on -> load more button
  const [numberOfData, setNumberOfData] = useState(15);
  useEffect(() => {
    async function init() {
      if (countries.length > 0) {
        const _countryWiseData = [];
        for (let i = 0; i < numberOfData; i++) {
          try {
            let data = await getCountryData(countries[i]);
            data = { ...data, country: countries[i] };
            _countryWiseData.push(data);
          } catch (error) {
            console.log(error);
          }
        }
        setCountryWiseData(_countryWiseData);
      }
    }
    init();
  }, [countries, numberOfData]);
  return (
    <Table
      countriesData={countryWiseData}
      setNumberOfData={setNumberOfData}
      numberOfData={numberOfData}
    />
  );
};
export default CountryWiseData;
