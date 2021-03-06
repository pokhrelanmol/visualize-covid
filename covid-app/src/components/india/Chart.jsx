import React from "react";
import { Bar } from "react-chartjs-2";
import useChartData from "./useChartData";

const Chart = () => {
  const { data } = useChartData();
  return (
    <div className="w-1/2  mt-12 mx-auto">
      <Bar
        data={{
          labels: ["Confirmed", "deaths", "recovered", "active"],
          datasets: [
            {
              label: "India Covid Data",
              data: [
                data.confirmed,
                data.deaths,
                data.recovered,
                data.confirmed - (data.deaths + data.recovered),
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
              ],
              // borderWidth: 1,
            },
          ],
        }}
        width={600}
        height={400}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default Chart;
