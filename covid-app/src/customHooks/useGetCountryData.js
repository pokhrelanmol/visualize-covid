import axios from "axios";
const useGetCountryData = async (country, formatCountryData) => {
  let data;
  try {
    const res = await axios.get(
      `https://covid19.mathdro.id/api/countries/${country}`
    );
    data = await res.data;
    data = formatCountryData(data);
  } catch (error) {
    // throw new Error();
    console.log(error);
  }
  return { data };
};
export default useGetCountryData;
