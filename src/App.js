import "./App.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import FirstPage from "./components/first-page";
import SecondPage from "./components/second-page";
import ThirdPage from "./components/third-page";
import FourthPage from "./components/fourth-page";

import Navbar from "./components/navbar";

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

export default function App() {
  const classes = useStyles();
  return (
    <div>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
    </div>
  );
}
