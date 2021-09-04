import React from "react";
import Nav from "../src/components/Nav";
import CardData from "./api/CardData";
import Chart from "./components/india/Chart";
import Precautions from "./components/Precautions";
import Table from "./components/Table";
import { TableContextProvider } from "./context/tableContext";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Map from "./map/Map";
function App() {
  return (
    <div>
      <TableContextProvider>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/">
              <CardData />
              <Precautions />
            </Route>

            {/* <Route exact path="/" /> */}
            <Route exact path="/map" component={Map} />
            <Route exact path="/india" component={Chart} />
          </Switch>
        </BrowserRouter>
      </TableContextProvider>
    </div>
  );
}

export default App;
