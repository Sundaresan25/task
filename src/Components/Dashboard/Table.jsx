import { createStyles, makeStyles } from "@mui/styles";
import Index from "../../Pages/Dashboard";

const useStyles = makeStyles(() =>
  createStyles({
    tableCard: {
      "& td": {
        color: "#4D4F5C",
      },
    },
    text: {
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
export const Table = () => {
  const classes = useStyles();
  const tableData = [
    {
      Location: "google.com",
      Views: "3746",
      Sales: "752",
      Conversion: "43%",
    },
    {
      Location: "google.com",
      Views: "3746",
      Sales: "752",
      Conversion: "43%",
    },
    {
      Location: "google.com",
      Views: "3746",
      Sales: "752",
      Conversion: "43%",
    },
    {
      Location: "google.com",
      Views: "3746",
      Sales: "752",
      Conversion: "43%",
    },
    {
      Location: "google.com",
      Views: "3746",
      Sales: "752",
      Conversion: "43%",
    },
    {
      Location: "google.com",
      Views: "3746",
      Sales: "752",
      Conversion: "43%",
    },
    {
      Location: "google.com",
      Views: "3746",
      Sales: "752",
      Conversion: "43%",
    },
    {
      Location: "google.com",
      Views: "3746",
      Sales: "752",
      Conversion: "43%",
    },
    {
      Location: "google.com",
      Views: "3746",
      Sales: "752",
      Conversion: "43%",
    },
  ];
  return (
    <>
      <div className="bg-white rounded p-3">
        <p className={classes.text}>Referrer</p>
        <div class="table-responsive">
          <table class="table">
            <caption style={{ color: "#3B86FF" }}>Show More</caption>
            <thead
              className="py-2"
              style={{
                background: "#F5F6FA",
                color: " #A3A6B4",
              }}
            >
              <tr>
                <th
                  style={{
                    border: "none",
                  }}
                  scope="col"
                >
                  Location
                </th>
                <th
                  style={{
                    border: "none",
                  }}
                  scope="col"
                >
                  Views
                </th>
                <th
                  style={{
                    border: "none",
                  }}
                  scope="col"
                >
                  Sales
                </th>
                <th
                  style={{
                    border: "none",
                  }}
                  scope="col"
                >
                  Converstion
                </th>
              </tr>
            </thead>
            <tbody className={classes.tableCard}>
              {tableData.map((data, Index) => (
                <tr>
                  <td>{data.Location}</td>
                  <td>{data.Views}</td>
                  <td>{data.Sales}</td>
                  <td>{data.Conversion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
