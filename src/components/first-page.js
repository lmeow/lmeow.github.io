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
import painting from "./images/painting_bw.JPG";

export default function FirstPage() {
	return (
		<div style={{ position: "relative" }}>
			<img
				className="picture-first-page"
				src={painting}
				alt="Painting in black and white"
			/>
			<div className="logo">Maja Frankiewicz</div>
		</div>
	);
}
