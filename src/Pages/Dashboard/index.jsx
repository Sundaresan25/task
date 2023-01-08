import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { createStyles, makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import PieChartgraph from "../../Components/Dashboard/Piechart";
import { BarGraph } from "../../Components/Dashboard/BarGraph";
import { Table } from "../../Components/Dashboard/Table";
import { ProductVideo } from "../../Components/Dashboard/ProductVideo";
import { ProfileCard } from "../../Components/Dashboard/ProfileCard";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import InsertChartOutlinedTwoToneIcon from "@mui/icons-material/InsertChartOutlinedTwoTone";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { NavbarOverlay } from "../../Components/Dashboard/NavbarOverlay";
import profile_pic from "../../Assets/Images/DsK2dHMg.jpeg";
import clsx from "clsx";

const drawerWidth = 240;

// create styles using makestyles in mui
const useStyles = makeStyles(() =>
  createStyles({
    Drawer: {
      "& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper": {
        background: "#43425D",
      },
    },
    findStyle: {
      "& .css-whebh7-MuiInputBase-root-MuiInput-root:before ": {
        borderBottom: "none",
      },
    },
    btnClass: {
      //   "& .css-qpwsza-MuiButtonBase-root-MuiButton-root": {
      background: "#6763E3 !important",
      textTransform: "none !important",
      //   },
    },
    bottomGrid: {
      marginTop: "-90px !important",
    },
    badge: {
      color: "white",
      borderRadius: "30px",
      background: "#FF4A33",
      padding: "5px 10px",
    },
    "@media (max-width: 900px)": {},
    "@media (max-width: 600px)": {
      btnClass: {
        fontSize: "10px ",
      },
      navbarTitle: {
        "& p": {
          fontSize: "10px",
          marginBottom: "0px",
        },
        "& svg": {
          width: "1rem",
        },
      },
      findStyle: {
        width: "20px !important",
      },
      bottomGrid: {
        marginTop: "0px !important",
      },
    },
  })
);

// Main component styles
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: " #f5f7fb",
    overflow: "hidden",

    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,

    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

// App component styles
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// Drawer component styles
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Index() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [isProfileMenuOpen, setIsProfileMenuOpen] = React.useState(false);
  const [isNotificationMenuOpen, setIsNotificationMenuOpen] =
    React.useState(false);

  const [windowSize, setWindowSize] = React.useState(getWindowSize());

  const [state, setState] = React.useState({
    left: false,
  });

  // Toggle drawer function to open sidebar
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // sidebar
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      style={{ height: "100vh", background: "#3C3B54" }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <DrawerHeader style={{ background: "#3C3B54" }}>
        <Typography variant="h5" className=" text-white">
          ACME
        </Typography>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {menuItems.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon style={{ color: "#B5B3FB" }}>
                <text.icon />
              </ListItemIcon>
              <ListItemText primary={text.label} style={{ color: "white" }} />
              {index !== 2 ? "" : <small className={classes.badge}>New</small>}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // sidebar Menus
  const menuItems = [
    { label: "Home", icon: OtherHousesOutlinedIcon },
    { label: "Dashboard", icon: InsertChartOutlinedTwoToneIcon },
    { label: "Inbox", icon: ArchiveOutlinedIcon },
    { label: "Products", icon: AnalyticsOutlinedIcon },
    { label: "Admin", icon: SettingsOutlinedIcon },
  ];

  // useEffect to identify the window size
  React.useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  React.useEffect(() => {
    setOpen(false);
    setState({ left: false });
  }, [windowSize]);

  // Get window size
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Navbar */}
      <AppBar
        position="fixed"
        open={open}
        style={{
          background: "white",
          borderTopLeftRadius: "20px",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={
              windowSize.innerWidth > 640
                ? handleDrawerOpen
                : toggleDrawer("left", true)
            }
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }), color: "#0000001A" }}
          >
            <MenuIcon />
          </IconButton>

          <div
            className="w-100"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              id="standard-start-adornment"
              sx={{ m: 1, width: "25ch", border: "none" }}
              className={classes.findStyle}
              placeholder="Search Invoices for help"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />

            <div
              className={clsx(classes.navbarTitle, "d-flex align-items-center")}
            >
              <NotificationsNoneOutlinedIcon
                style={{ color: "#4D4F5C" }}
                onClick={() =>
                  setIsNotificationMenuOpen(!isNotificationMenuOpen)
                }
              />
              <p
                className={clsx("text-muted mb-0 mx-md-2")}
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              >
                Jhon Doe{" "}
                {isProfileMenuOpen ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </p>
              <Avatar src={profile_pic} alt="" />
              {isProfileMenuOpen && (
                <NavbarOverlay
                  isOpen={isProfileMenuOpen}
                  onClose={() => setIsProfileMenuOpen(false)}
                />
              )}
              {isNotificationMenuOpen && (
                <NavbarOverlay
                  isOpen={isNotificationMenuOpen}
                  onClose={() => setIsNotificationMenuOpen(false)}
                  notification
                />
              )}
            </div>
          </div>
        </Toolbar>
      </AppBar>
      {/* Drawer */}
      <Drawer
        className={classes.Drawer}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader style={{ background: "#3C3B54" }}>
          <Typography variant="h5" className=" text-white">
            ACME
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon style={{ color: "#B5B3FB" }}>
                  <text.icon />
                </ListItemIcon>
                <ListItemText primary={text.label} style={{ color: "white" }} />
                {index !== 2 ? (
                  ""
                ) : (
                  <small className={classes.badge}>New</small>
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* Drawer for mobile */}
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>

      {/* Main component */}
      <Main open={open}>
        {/* drawer Header */}
        <DrawerHeader />
        <Box className="p-sm-3">
          <div className="d-flex justify-content-between m-2">
            <Typography style={{ color: "#43425D" }} variant="h5">
              Overview
            </Typography>

            {/* Add Fund button */}

            <Button
              className={classes.btnClass}
              sx={{ background: "#6763E3" }}
              variant="contained"
              endIcon={<AddCircleRoundedIcon />}
            >
              Add Funds
            </Button>
          </div>

          {/* using Grid for container*/}

          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <BarGraph />
            </Grid>
            <Grid item xs={12} sm={4}>
              <PieChartgraph />
            </Grid>
            <Grid item xs={12} sm={4} order={{ xs: -1, sm: 0 }}>
              <ProfileCard />
            </Grid>

            <Grid item xs={12} sm={8} className={classes.bottomGrid}>
              <Table />
            </Grid>
            <Grid item sx={12} sm={4}>
              <ProductVideo />
            </Grid>
          </Grid>
        </Box>
      </Main>
    </Box>
  );
}
