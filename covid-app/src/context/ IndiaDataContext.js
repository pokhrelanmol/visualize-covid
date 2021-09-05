import { createContext, useState } from "react";

export const IndiaDataContext = createContext(null);
export const IndianDataprovider = ({ children }) => {
  const [tableData, setTableData] = useState("jjskk");
  return (
    <IndiaDataContext.Provider value={{ tableData, setTableData }}>
      {children}
    </IndiaDataContext.Provider>
  );
};
