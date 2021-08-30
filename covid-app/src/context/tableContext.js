import React, { createContext, useEffect, useState } from "react";

export const TableContext = createContext("");
export const TableContextProvider = ({ children }) => {
  const [data, setData] = useState("");
  console.log(data ? data : "loading....");

  return (
    <TableContext.Provider value={{ data, setData }}>
      {children}
    </TableContext.Provider>
  );
};
