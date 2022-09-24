import React from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const BarChart = ({ data }) => {
  var arr = [
    Math.round(data.main.temp_min),
    Math.round(data.main.temp_min) - 1,
    25,
    Math.round(data.main.temp_min),
    20,
    Math.round(data.main.temp),
    10,
  ];
  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  }
  return (
    <div>
      <Line
        data={{
          labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri","Sat"],
          datasets: [
            {
              label: "°C",
              data: getMultipleRandom(arr, arr.length),
              backgroundColor: ["#c1e3f5"],
              borderColor: ["#3ea8e8"],
              borderWidth: 3,
              tension: 0.4,
              fill: true,
              pointStyle: "cir",
              pointBorderColor: "blue",
              pointBackgroundColor: "#3ea8e8",
              showLine: true,
            },
          ],
        }}
        height={400}
        width={600}
      />
    </div>
  );
};

export default BarChart;
