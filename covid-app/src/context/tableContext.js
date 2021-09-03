import React, { createContext, useEffect, useState } from "react";

export const TableContext = createContext("");
export const TableContextProvider = ({ children }) => {
  const [_countriesData, _setCountriesData] = useState("");
  return (
    <TableContext.Provider value={{ _countriesData, _setCountriesData }}>
      {children}
    </TableContext.Provider>
  );
};
