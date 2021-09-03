import React from "react";
import Nav from "../src/components/Nav";
import CardData from "./api/CardData";
import Chart from "./components/india/Chart";
import Precautions from "./components/Precautions";
import Table from "./components/Table";
import { TableContextProvider } from "./context/tableContext";
import Map from "./map/Map";
function App() {
  return (
    <div>
      <TableContextProvider>
        {/* <Nav />
        <CardData />
        <Precautions /> */}
        {/* <Chart /> */}
        <Map />
      </TableContextProvider>
    </div>
  );
}

export default App;
