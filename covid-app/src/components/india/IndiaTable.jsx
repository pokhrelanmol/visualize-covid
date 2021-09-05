import React, { useContext, useEffect } from "react";
import { IndiaDataContext } from "../../context/ IndiaDataContext";
import IndiaTableData from "./IndiaTableData";

import relativePlugin from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

dayjs.extend(relativePlugin);
const IndiaTable = ({ data }) => {
  console.log(data);
  return (
    <div>
      <table className="table-auto mx-auto mt-12 ">
        <thead className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
          <tr>
            <th className="px-4 py-3 ">state</th>
            <th className=" px-4 py-3 ">confirmed</th>
            <th className="py-3 px-4">deaths</th>
            <th className=" py-3 px-4">Active</th>
            <th className="px-4 py-3">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map(
              ({ provinceState, confirmed, deaths, active, lastUpdate }) => {
                return (
                  <tr className="border border-t-2">
                    <td className="px-4 py-3 ">{provinceState}</td>
                    <td className="px-4 py-3 ">{confirmed}</td>
                    <td className="px-4 py-3 ">{deaths}</td>
                    <td className="px-4 py-3 ">{active}</td>

                    <td className="px-4 py-3 ">
                      {dayjs(lastUpdate).fromNow()}
                    </td>
                  </tr>
                );
              }
            )}
        </tbody>
      </table>
    </div>
  );
};

export default IndiaTable;
