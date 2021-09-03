import React, { useState, useEffect } from "react";
import axios from "axios";
const useCountryNames = () => {
  const [countries, setCountries] = useState([]);
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
  }, [countries]);
  return { countries };
};
export default useCountryNames;
