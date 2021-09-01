import React, { createContext, useEffect, useState } from "react";

export const TableContext = createContext("");
export const TableContextProvider = ({ children }) => {
  const [countriesData, setCountriesData] = useState("");
  return (
    <TableContext.Provider value={{ countriesData, setCountriesData }}>
      {children}
    </TableContext.Provider>
  );
};
