import { useState, useEffect } from "react";
import axios from "axios";
const useChartData = () => {
  const [data, setData] = useState({
    confirmed: "",
    recovered: "",
    deaths: "",
  });
  useEffect(() => {
    const grossData = async () => {
      const response = await axios.get(
        `https://covid19.mathdro.id/api/countries/india/`
      );
      setData({
        confirmed: await response.data.confirmed.value,
        deaths: await response.data.deaths.value,
        recovered: await response.data.recovered.value,
      });
      console.log(data);
    };
    grossData();
  }, []);

  return { data };
};

export default useChartData;
