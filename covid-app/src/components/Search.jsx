import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { TableContext } from "../context/tableContext";
const Search = () => {
  const { _setCountriesData } = useContext(TableContext);
  const [inputValue, setInputValue] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };
  const handleEnterKeyPress = (e) => {
    if (userInput.length > 1) {
      if (e.keyCode === 13) {
        setInputValue(e.target.value);

        setIsLoading(true);
      }
    }
  };
  const handleSearchButton = () => {
    if (userInput.length > 1) {
      setInputValue(userInput);
      setIsLoading(true);
    }
  };
  useEffect(() => {
    if (inputValue.length > 1) {
      const callApiOnInputChanges = async (value) => {
        axios
          .get(`https://covid19.mathdro.id/api/countries/${value}`)
          .then((res) => {
            setIsLoading(false);
            _setCountriesData({
              confirmed: res.data.confirmed.value,
              deaths: res.data.deaths.value,
              recovered: res.data.recovered.value,
              lastUpdated: res.data.lastUpdate,
              country: inputValue,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      };
      callApiOnInputChanges(inputValue);
    }
  }, [inputValue]);

  return (
    <div className=" py-3  text-right ">
      <input
        className="  py-2 px-5 border-b-2 border-black outline-none"
        onChange={handleChange}
        id="input"
        placeholder="search"
        onKeyDown={handleEnterKeyPress}
        type="text"
      />
      <i
        onClick={(e) => handleSearchButton(e)}
        className="fas fa-search text-gray-500 hover:text-gray-700 -ml-5 cursor-pointer "
      ></i>

      <i
        className="fas fa-redo-alt ml-5  text-gray-500 hover:text-gray-700 cursor-pointer"
        onClick={() => window.location.reload()}
      ></i>
      {isLoading ? "loading...." : ""}
    </div>
  );
};

export default Search;
