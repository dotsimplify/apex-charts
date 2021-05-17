import React from "react";
import "../App.css";
import ReactApexChart from "react-apexcharts";

function Graph() {
  const series = [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 86, 89, 56, 76, 79, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 56, 67, 45, 78, 66, 52, 41],
      },
    ],
    options = {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
          "2018-09-19T07:30:00.000Z",
          "2018-09-19T08:30:00.000Z",
          "2018-09-19T09:30:00.000Z",
          "2018-09-19T09:50:00.000Z",
          "2018-09-19T09:55:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      // colors: [
      //   function ({ value, seriesIndex, w }) {
      //     if (value < 55) {
      //       return "#258E70";
      //     } else {
      //       return "#775DD0";
      //     }
      //   },
      //   function ({ value, seriesIndex, w }) {
      //     if (value < 109) {
      //       return "#ff3600";
      //     } else {
      //       return "#ff3600";
      //     }
      //   },
      // ],
    };

  return (
    <div
      className="container"
      style={{
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
      <br />
      <h2>Economy Charts</h2>
      <br />
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
}

export default Graph;
