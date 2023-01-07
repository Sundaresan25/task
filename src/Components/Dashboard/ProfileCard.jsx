import { Avatar, Typography } from "@mui/material";
import clsx from "clsx";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Divider from "@mui/material/Divider";

import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    cardRoot: {
      "& h6": {
        color: "#4D4F5C",
      },
      "& p": {
        color: "#4D4F5C",
      },
    },
    Avatar: {
      width: "100px !important",
      height: "100px !important",
    },
    "@media (max-width: 900px)": {},
    "@media (max-width: 600px)": {},
  })
);
export const ProfileCard = (props) => {
  const { avatar } = props;
  const classes = useStyles();

  const Users = [
    {
      name: "Drew James",
      sub: "United states",
      sub2: "Mobile : 8715674877",
      img: "",
    },
    {
      name: "Drew James",
      sub: "United states",
      sub2: "Mobile : 8715674877",
      img: "",
    },
    {
      name: "Drew James",
      sub: "United states",
      sub2: "Mobile : 8715674877",
      img: "",
    },
  ];
  return (
    <>
      <div className={clsx(classes.cardRoot, "bg-white rounded p-3")}>
        <div className="text-center">
          <div className=" d-flex justify-content-center">
            <Avatar
              className={classes.Avatar}
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
          </div>

          <Typography variant="h6">Nick Herasimenka</Typography>
          <p>United States</p>
          <div style={{ color: "#EBEBF2" }}>
            <TwitterIcon className="m-2" />
            <FacebookOutlinedIcon className="m-2" />
            <LinkedInIcon className="m-2" />
            <WhatsAppIcon className="m-2" />
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p>Other Users</p>
            <MoreVertRoundedIcon />
          </div>
        </div>
        <Divider />
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {Users.map((data, index) => (
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={data.img}></Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <p className="mb-0" style={{ color: "" }}>
                    {data.name}
                  </p>
                }
                secondary={
                  <div className="d-flex justify-content-between">
                    <small style={{ color: "#4D4F5C" }}>{data.sub}</small>
                    <small style={{ color: "#4D4F5C" }}>{data.sub2}</small>
                  </div>
                }
              />
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};
