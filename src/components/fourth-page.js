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

import {
	Grid,
	List,
	Form,
	Input,
	Checkbox,
	TextArea,
	Divider,
	Segment
} from "semantic-ui-react";
import axios from "axios";

export default function FourthPage() {
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
				<div className="about-header">Contact me:</div>
				<div className="about-below-header"></div>

				<Segment style={{ background: "white" }}>
					<Grid stackable columns={1}>
						<Grid.Row>
							<Grid.Column style={{ paddingLeft: "15em" }}>
								<Form style={{ textAlign: "left" }}>
									<Form.Field
										control={Input}
										label="Name"
										placeholder="Name"
										name="name"
										type="text"
									/>
									<Form.Field
										control={Input}
										label="Email"
										placeholder="Email"
										name="email"
										type="email"
									/>

									<Form.Field
										control={TextArea}
										label="Message"
										placeholder="Message"
										name="message"
										type="textarea"
									/>
									<Form.Field
										control={Checkbox}
										label="I'm not a robot"
									/>
									<Button type="submit">Send</Button>
								</Form>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
				<span className="under-content-contact"></span>
			</Container>
		</div>
	);
}
