import { PieChart } from "react-minimal-pie-chart";
import DonutChart from "donut-chart-js";
import * as React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import Divider from "@mui/material/Divider";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

const useStyles = makeStyles(() =>
  createStyles({
    chart: {
      height: "260px",
    },
    head: {
      color: "#4D4F5C",
    },
    value: {
      fontSize: "9px",
      color: "#4D4F5C",
    },
    "@media (max-width: 900px)": {
      logoconatiner: {
        width: "80%",
      },
    },
    "@media (max-width: 600px)": {
      paratext: {
        fontSize: "10px",
      },
      logoconatiner: {
        width: "100%",
      },
      Formcontainer: {
        height: "420px",
      },
    },
  })
);

function PieChartgraph() {
  const classes = useStyles();

  const labels = [
    { label: "France", value: 250, color: "#80E2FF" },
    { label: "Italy", value: 100, color: "#F49FA8" },
    { label: "Japan", value: 150, color: "#FFDF94" },
    { label: "Canada", value: 180, color: "#B5B3FB" },
  ];
  React.useEffect(() => {
    new DonutChart(document?.getElementById("myChart"), {
      data: labels,
      holeSize: 0.6,
      // animationSpeed: 0.5,
    });
  }, []);

  return (
    <div className="bg-white rounded p-3">
      <p className={classes.head}>Sales Distribution</p>
      {/*  
    // <PieChart
    // style={{height:"235px"}}
    //   data={[
    //     { title: "One", value: 15, color: "#0FC588" },
    //     { title: "Two", value: 25, color: "#8732DF" },

    //   ]}
    // /> */}
      <div className="d-flex align-items-center justify-content-center postion-relative">
        <p
          style={{
            position: "absolute",
            textAlign: "center",
          }}
        >
          230,0900 <br /> sales
        </p>
        <canvas id="myChart" className={classes.chart}></canvas>
      </div>
      <Divider className="my-2" />
      <div className="text-center">
        {labels.map((data, index) => (
          <>
            <small className="mx-1">
              <FiberManualRecordRoundedIcon style={{ color: data.color }} />
              {data.label}{" "}
              <span className={classes.value}>{data.value} sales</span>
            </small>
            {index === 1 ? <br /> : ""}
          </>
        ))}
      </div>
    </div>
  );
}

export default PieChartgraph;
