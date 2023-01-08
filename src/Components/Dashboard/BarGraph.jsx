import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { createStyles, makeStyles } from "@mui/styles";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

const useStyles = makeStyles(() =>
  createStyles({
    staticsChart: {
      // width: "100%",
      height: "300px !important",
    },
    chartText: {
      color: "#4D4F5C",
    },
    text: {
      color: "#4D4F5C",
    },
    "@media (max-width: 900px)": {},
    "@media (max-width: 600px)": {
      staticsChart: {
        height: "100% !important",
      },
    },
  })
);

// Graph component
export const BarGraph = (props) => {
  const classes = useStyles();

  // data set for line graph
  useEffect(() => {
    let labels = ["Jan", "Feb", "March", "Apr", "May", "Jun"];
    let data = {
      labels: labels,
      datasets: [
        {
          label: "Products Sold",
          data: [7, 9, 15, 6, 20, 15, 8],
          borderColor: "#A3A0FB",
          backgroundColor: "#A3A0FB",
          borderWidth: 1,
        },
        {
          label: "Total Views",
          data: [5, 3, 13, 17, 12, 22],
          borderColor: "#80E2FF",
          backgroundColor: "#80E2FF",
          borderWidth: 1,
        },
      ],
    };

    // config for line graph
    const config = {
      type: "line",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    const chart = new Chart(document.getElementById("lineChart"), config);
    // when component unmounts
    return () => {
      chart.destroy();
    };
  }, []);
  const labels = [
    { label: "Products Sold", color: "#A3A0FB" },
    { label: "Total Views", color: "#80E2FF" },
  ];

  return (
    <>
      <Grid className="bg-white rounded p-3">
        <div className="d-flex justify-content-between">
          <p className={classes.text}>Statistics</p>

          <select style={{ outline: 0, border: "none", padding: "0" }}>
            <option>6 months</option>
          </select>
        </div>

        {/* using id generate line graph */}
        <canvas
          className={classes.staticsChart}
          id="lineChart"
          style={{ padding: "20px" }}
        ></canvas>

        <div className="text-center">
          {labels.map((data, index) => (
            <>
              <small className={classes.chartText}>
                <FiberManualRecordRoundedIcon style={{ color: data.color }} />
                {data.label}{" "}
              </small>
            </>
          ))}
        </div>
      </Grid>
    </>
  );
};
