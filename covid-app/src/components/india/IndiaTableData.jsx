import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { IndiaDataContext } from "../../context/ IndiaDataContext";
import IndiaTable from "./IndiaTable";

const IndiaTableData = () => {
  // const { tableData, setTableData } = useContext(IndiaDataContext);
  const [tableData, setTableData] = useState(null);
  const _stateWiseData = [];
  useEffect(() => {
    const getStateWiseData = async () => {
      const response = await axios.get(
        "https://covid19.mathdro.id/api/countries/in/confirmed"
      );
      const data = await response.data;

      data.map(({ confirmed, deaths, active, lastUpdate, provinceState }) => {
        _stateWiseData.push({
          provinceState,
          confirmed,
          lastUpdate,
          active,
          deaths,
        });
      });
      // setTableData(_stateWiseData);

      setTableData(_stateWiseData);
    };
    getStateWiseData();
  }, []);
  return (
    <div>
      <IndiaTable data={tableData} />
    </div>
  );
};

export default IndiaTableData;
