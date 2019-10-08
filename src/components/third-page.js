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
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
	card: {
		maxWidth: 600
	}
});

export default function ThirdPage() {
	const classes = useStyles();

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
				<div className="about-header">Portfolio:</div>
				<div className="about-below-header"></div>
				<p className="content">Back-end stuff: </p>
				<br />
				<Card className={classes.card}>
					<CardActionArea>
						<CardMedia
							component="img"
							alt="Contemplative Reptile"
							height="140"
							image="/static/images/cards/contemplative-reptile.jpg"
							title="Contemplative Reptile"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="h2"
							>
								Street Sweep Info
							</Typography>
							<Typography
								variant="body2"
								color="textSecondary"
								component="p"
							>
								An app that gives you the information on when
								the street sweeper comes to your street.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size="small" color="primary">
							Share
						</Button>
						<Button size="small" color="primary">
							Learn More
						</Button>
					</CardActions>
				</Card>

				<span
					style={{
						height: "2em"
					}}
				>
					<br /> <br />
					<br />
					<br />
				</span>

				<p className="content">Front-end stuff: </p>
				<span
					style={{
						height: "2em"
					}}
				>
					<br />
				</span>

				<Card className={classes.card}>
					<CardActionArea>
						<CardMedia
							component="img"
							alt="Contemplative Reptile"
							height="140"
							image="/static/images/cards/contemplative-reptile.jpg"
							title="Contemplative Reptile"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="h2"
							>
								Nikolai Development
							</Typography>
							<Typography
								variant="body2"
								color="textSecondary"
								component="p"
							>
								The app for Nikolai Developement
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size="small" color="primary">
							Share
						</Button>
						<Button size="small" color="primary">
							Learn More
						</Button>
					</CardActions>
				</Card>
			</Container>
		</div>
	);
}
