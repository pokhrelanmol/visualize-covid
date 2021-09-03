import React, { useEffect, useState } from "react";
import useCountryNames from "../customHooks/useCountryNames";
import axios from "axios";
const useCoordinates = () => {
  const { countries } = useCountryNames();
  const [latLong, setLatLong] = useState();
  console.log(countries);
  const formatData = (data) => {
    const formattedData = {
      lat: data.lat,
      long: data.long,
      confirmed: data.confirmed,
      deaths: data.deaths,
      active: data.active,
      country: data.countryRegion,
    };
    return formattedData;
  };
  const getCountryData = async (country) => {
    let data;
    try {
      const res = await axios.get(
        `https://covid19.mathdro.id/api/countries/${country}/confirmed`
      );
      // console.log(res);
      data = await res.data[0];
      data = formatData(data);
    } catch (error) {
      throw new Error();
    }
    return data;
  };
  useEffect(() => {
    async function init() {
      if (countries.length > 0) {
        const allLatLng = [];
        for (let i = 0; i < countries.length; i++) {
          try {
            let data = await getCountryData(countries[i]);
            data = { ...data };
            allLatLng.push(data);
          } catch (error) {
            console.log(error);
          }
        }
        setLatLong(allLatLng);
      }
    }
    init();
  }, []);
  return { latLong };
};

export default useCoordinates;
