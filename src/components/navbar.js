import "../App.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar
        position="static"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          boxShadow: "none"
        }}
      >
        <Toolbar>
          <Typography
            style={{ color: "rgba(4, 4, 4, 0.6)" }}
            variant="h6"
            className={classes.title}
          >
            Personal Website
          </Typography>
          <Button style={{ color: "rgba(4, 4, 4, 0.6)" }}> Test </Button>
          <Button style={{ color: "rgba(4, 4, 4, 0.6)" }}> Test </Button>
          <Button style={{ color: "rgba(4, 4, 4, 0.6)" }}> Test </Button>
          <Button style={{ color: "rgba(4, 4, 4, 0.6)" }}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
