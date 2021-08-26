import React, { useEffect, useState } from "react";

import axios from "axios";
import { filterIsoCodes } from "../utils";

const CountryWiseData = () => {
  const [country, setCountry] = useState([]);
  const [countryWiseData, setCountryWiseData] = useState([
    {
      country: "",
      confirmed: "",
      deaths: "",
      recovered: "",
    },
  ]);
  // get all country names
  useEffect(() => {
    let countryNames = [];
    const getCountryName = async () => {
      const res = await axios.get("https://covid19.mathdro.id/api/countries");
      const data = await res.data;

      data.countries.map((elem) => {
        countryNames.push(elem.name);
      });
      setCountry(countryNames);
    };
    getCountryName();
  }, []);
  // fetching data countrywise
  useEffect(() => {
    const getCountryWiseData = async () => {
      if (country) {
        for (let i = 0; i < country.length; i++) {
          try {
            let res = await axios.get(
              `https://covid19.mathdro.id/api/countries/${country[i]}`
            );

            const confirmed = res.data.confirmed.value;
            const deaths = res.data.deaths.value;
            const recovered = res.data.recovered.value;
            setCountryWiseData([
              ...countryWiseData,
              { country: country[i], confirmed, deaths, recovered },
            ]);
          } catch (error) {
            console.log(error);
          }
        }
      }
    };
    getCountryWiseData();
  }, []);
  return <div></div>;
};

export default CountryWiseData;
