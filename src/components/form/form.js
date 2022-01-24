import React, { Component } from "react";
import { Form, FormGroup, Label, Col, Input, Row } from "reactstrap";

export default class ContactForm extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Form>
				<FormGroup row>
					<Label for="exampleEmail" sm={2}>
						Email
					</Label>
					<Col sm={10}>
						<Input
							id="exampleEmail"
							name="email"
							placeholder="user@email.com"
							type="email"
						/>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label for="exampleText" sm={2}>
						Text Area
					</Label>
					<Col sm={10}>
						<Input
							id="exampleText"
							name="text"
							type="textarea"
							placeholder="Questions or Comments"
						/>
					</Col>
				</FormGroup>
				<FormGroup>
					<Label for="exampleAddress" sm={2}>
						Address
					</Label>
					<Input
						id="exampleAddress"
						name="address"
						placeholder="1234 Main St"
					/>
				</FormGroup>
				<FormGroup>
					<Label for="exampleAddress2">Address 2</Label>
					<Input
						id="exampleAddress2"
						name="address2"
						placeholder="Apartment, studio, or floor"
					/>
				</FormGroup>
				<Row form>
					<Col md={6}>
						<FormGroup>
							<Label for="exampleCity">City</Label>
							<Input
								id="exampleCity"
								name="city"
								placeholder="City"
							/>
						</FormGroup>
					</Col>
					<Col md={1}>
						<FormGroup>
							<Label for="exampleState">State</Label>
							<Input
								id="exampleState"
								name="state"
								placeholder="2 Letter State"
							/>
						</FormGroup>
					</Col>
					<Col md={2}>
						<FormGroup>
							<Label for="exampleZip">Zip</Label>
							<Input
								id="exampleZip"
								name="zip"
								placeholder="Zip code"
							/>
						</FormGroup>
					</Col>
				</Row>
				{/* <InputGroup>
					<Input placeholder="username" />
					<InputGroupText>@example.com</InputGroupText>
				</InputGroup> */}
			</Form>
		);
	}
}
