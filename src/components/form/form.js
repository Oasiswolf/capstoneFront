import React, { Component } from "react";
// import { useFormspark } from "@formspark/use-formspark";
import axios from "axios";

export default class ContactForm extends Component {
	constructor() {
		super();

		this.state = {
			name: "",
			email: "",
			comments: "",
			action_link: "https://submit-form.com/P1aNvCUN",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	handleSubmit(event) {
		axios
			.post(this.state.action_link)
			.then((response) => {
				console.log("response Good", response);
				this.setState({
					name: "",
					email: "",
					comments: "",
				});
			})
			.catch((error) => {
				console.log("Error posting message", error);
			});

		event.preventDefault();
		// console.log("You clicked Submit", event);
	}

	render() {
		return (
			<form
				action="https://submit-form.com/P1aNvCUN"
				onSubmit={this.handleSubmit}
			>
				<div className="name-email-wrapper">
					<label>Name</label>
					<input
						type="text"
						name="name"
						placeholder="Name"
						value={this.state.name}
						onChange={this.handleChange}
						required={true}
					/>
					<label>Email</label>
					<input
						type="email"
						name="email"
						placeholder="Email"
						value={this.state.email}
						onChange={this.handleChange}
						required={true}
					/>
				</div>
				<div className="comment-question-wrapper">
					<label>Question & Comments</label>
					<textarea
						name="comments"
						value={this.state.comments}
						placeholder="Please place your Questions or Comments with a brief item description "
						onChange={this.handleChange}
						required={true}
					></textarea>
				</div>
				<div className="btn-wrapper">
					<button type="submit">Send</button>
				</div>
			</form>
		);
	}
}
