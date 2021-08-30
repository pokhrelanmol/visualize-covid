import React, { useEffect, useState, useContext } from "react";
import dayjs from "dayjs"
import relativePlugin from "dayjs/plugin/relativeTime"

import axios from "axios";

dayjs.extend(relativePlugin)

export const CountryWiseData = () => {
  const [countries, setCountries] = useState([])
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

  // get all country names
  useEffect(() => {
    let countryNames = [];
    const getCountryName = async () => {
      try {
        const res = await axios.get("https://covid19.mathdro.id/api/countries");
        const data = await res.data;

        data.countries.map((elem) => {
          countryNames.push(elem.name.toLowerCase());
        });
        setCountries(countryNames);
      } catch (error) {
        console.log(error);
      }
    };
    getCountryName();
  }, []);

    const getCountryData = async (country) => {
      let data;
      try {
        const res = await axios.get(
          `https://covid19.mathdro.id/api/countries/${country}`
        );
        data = await res.data;
        data = formatCountryData(data);
      } catch (error) {
        throw new Error()
      }
      return data
    };
  useEffect(() => {
    async function init() {
      if (countries.length > 0) {
        const _countryWiseData = []
        for (let i = 0; i < 30; i++){
          try{
          let data = await getCountryData(countries[i])
          data = {...data, country: countries[i]}
          _countryWiseData.push(data)
          }catch(error) {
            console.log(error)
          }
        }
        setCountryWiseData(_countryWiseData)
      }
    }
      init()
  }, [countries]);
  return (
    <table>
      <thead>
        <tr>
          <th>Country</th>
          <th>Confirmed</th>
          <th>Deaths</th>
          <th>Recovered</th>
          <th>Last Update</th>
        </tr>
      </thead>
      <tbody>
      {countryWiseData.length>0? countryWiseData.map((data, index) => (
        <tr key={index}>
          <td>{data.country}</td>
          <td>{data.confirmed}</td>
          <td>{data.deaths}</td>
          <td>{data.recovered}</td>
          <td>{dayjs(data.lastUpdate).fromNow()}</td>

        </tr>
      )):(

        <tr>
          Loading....
        </tr>
      )}

      </tbody>
    </table>
  );
};
export default CountryWiseData;
