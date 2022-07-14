import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "#00e674",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "#00b35a",
      borderBottom: "1px solid #228B22",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
// emerald green - #50C878
// hover green - #228B22
  return (
    <AppBar position="fixed" style={{ background: 'white' }}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo} color="secondary">
        <img src={'https://i.postimg.cc/9XyDWmWt/namaste-startup-1.gif'} alt="logo:" width="300" height="50"/>

        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            {/* <Link to="/fundingquest" className={classes.link}>
              Funding Quest
            </Link> */}
            <Link to="/bdocuments" className={classes.link}>
              Business Documents
            </Link>
            <Link to="/partners" className={classes.link}>
              Partners
            </Link>
            <Link to="/register" className={classes.link}>
              Register
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
