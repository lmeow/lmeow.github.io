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

export default function SecondPage() {
	return (
		<div>
			<Container
				maxWidth="sm"
				style={{
					borderColor: "red",
					borderWidth: "2px",
					borderRadius: "1px"
				}}
			>
				<span className="about-over-header" />
				<div className="about-header">About me:</div>
				<div className="about-below-header"></div>
				<p className="content">Profession: Full Stack Developer </p>
				<span>
					<br /> <br /> <br />
				</span>

				<p className="content">
					I'm born and raised in Malmö, the third biggest city in
					Sweden, which also is a 30 minutes train ride from
					Copenhagen, the capital of Denmark. I have a background in
					music, dancing, astrophysics and civil engineering.
					Recently, I discovered my BIG passion for programming
					(finally my fast typing (somewhat) has come handy) and moved
					to San Francisco to study Computer Science full time.
					<br />
					<br />
					Today I work as a full stack developer at Nikolai
					Development AB, a startup in Malmö focused on digitizing the
					construction industry.
				</p>

				<span>
					<br />
					<br />
					<br />
				</span>
				<p className="content">Skills:</p>
				<span>
					<br />
				</span>
				<p className="content">
					Python, Java, React.js, Node.js, Neo4j, MongoDB, MySQL,
					Linux/Unix, Git
				</p>
			</Container>
		</div>
	);
}
