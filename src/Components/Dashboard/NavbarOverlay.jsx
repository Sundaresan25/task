import React, { useContext } from "react";

import { NavLink } from "react-router-dom";
import { createStyles, makeStyles } from "@mui/styles";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

import Person2Icon from "@mui/icons-material/Person2";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import Divider from "@mui/material/Divider";

const useStyles = makeStyles({
  root: {
    width: "0",
    opacity: 0,
    zIndex: -1,
    transform: "translateY(-50px)",
    transition: "all 0.3s ease",
  },
  open: {
    opacity: 1,
    zIndex: 99,
    transform: "translateY(0px)",
    width: "auto",
  },
  wrapper: {
    padding: "5px",
    position: "absolute",
    top: "28px",
    right: "0",
    border: "1px solid #e8e8e8",
    background: "#fff",
    borderRadius: "4.5px",
    boxShadow: "0 3px 4px #00000036",

    zIndex: 99,
    "&::before": {
      content: "''",
      width: "0",
      height: "0",
      border: "10px solid transparent",
      borderTop: 0,
      borderBottom: "15px solid #EEE",
      position: "absolute",
      top: "-15px",
      right: "28px",
    },
  },
  overlay: {
    position: "fixed",
    background: "transparent",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
    visibility: "hidden",
    color: "transparent",
    minWidth: "100%",
    minHeight: "100%",
    cursor: "initial",
  },
  overlayOpen: {
    zIndex: 10,
    visibility: "visible",
  },
  listItem: {
    display: "flex",
    color: "#000",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    "& p": {
      fontSize: "1rem",
      margin: "5px 0",
      width: "75px",
      color: "#43425D",
    },
    "& svg": {
      width: "1.5rem",
      height: "1.5rem",
      fill: "#0000001A",
    },
    "&:hover": {
      textDecoration: "none",
      color: "#000",
      background: "#e8e8e8",
      cursor: "pointer",
    },
  },
});

export const NavbarOverlay = (props) => {
  const classes = useStyles();
  const { isOpen, onClose, notification } = props;
  const Users = [
    {
      name: "Drew James",
      sub: "Assigned you on the call with Sara",
      sub2: "2 min ago",
      img: "",
    },
    {
      name: "Alexa Marry",
      sub: "Marked the task New UI as done",
      sub2: "5 min ago",
      img: "",
    },
    {
      name: "Eva Maria",
      sub: "Added a new comment on Sales task",
      sub2: "10 min ago",
      img: "",
    },
  ];
  return (
    <>
      <div className={`${classes.root} ${isOpen ? classes.open : ""}`}>
        <div
          className={classes.wrapper}
          style={{ width: notification ? "400px" : "180px" }}
        >
          {notification ? (
            <>
              {Users.map((data, index) => (
                <>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={data.img}></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <p className="mb-0" style={{ color: "#4D4F5C" }}>
                          {data.name}
                        </p>
                      }
                      secondary={
                        <div className="d-flex justify-content-between">
                          <small style={{ color: "#4D4F5C" }}>{data.sub}</small>
                          <small style={{ color: "#4D4F5C" }}>
                            {data.sub2}
                          </small>
                        </div>
                      }
                    />
                  </ListItem>
                </>
              ))}
              <Divider />
              <small
                style={{ color: "#3B86FF" }}
                className="d-flex justify-content-center"
              >
                Show More
              </small>
            </>
          ) : (
            <>
              <div className={classes.listItem}>
                <Person2Icon style={{ color: "#F0F0F7" }} className="mx-2" />
                <Typography>My Profile</Typography>
              </div>
              <div className={classes.listItem}>
                <ReceiptLongRoundedIcon className="mx-2" />
                <Typography>Billing</Typography>
              </div>
              <div className={classes.listItem}>
                <LogoutIcon className="mx-2" />
                <Typography>Logout</Typography>
              </div>
            </>
          )}
        </div>
      </div>

      <div
        className={`${classes.overlay} ${isOpen ? classes.overlayOpen : ""}`}
        onClick={onClose}
      >
        Overlay
      </div>
    </>
  );
};
