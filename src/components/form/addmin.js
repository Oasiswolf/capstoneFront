import React, { Component } from "react";

export default class Addmin extends Component {
	constructor() {
		super();
		this.state = {
			title: "",
			category: "",
			item_img: "",
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
		fetch("https://jukebox-wood-crafts.herokuapp.com/item/add", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				title: this.state.title,
				category: this.state.category,
				item_img: this.state.item_img,
			}),
		})
			.then((response) => {
				console.log("Item Submitted Good", response);
				response.json();
			})
			.then((data) => {
				console.log("Data", data);
				this.setState({
					title: "",
					category: "",
					item_img: "",
				});
			})

			.catch((error) => {
				console.log("Error Submitting New Item", error);
			});

		event.preventDefault();
	}

	render() {
		return (
			<div className="add-item-wrapper">
				<div className="page-title-wrapper">Add Items</div>
				<div className="page-setup-wrapper">
					<div className="left-column"></div>
					<div className="center-column">
						<form
							className="add-item-form"
							onSubmit={this.handleSubmit}
						>
							<div className="title">
								<h3>Title: </h3>
								<input
									type="text"
									name="title"
									className="title-input"
									placeholder="Title of Item"
									value={this.state.title}
									onChange={this.handleChange}
								/>
							</div>
							<div className="category">
								<h3>Category: </h3>
								<input
									type="text"
									name="category"
									className="category-input"
									placeholder="Please add a category for the Item"
									value={this.state.category}
									onChange={this.handleChange}
								/>
							</div>
							<div className="image">
								<h3>Image Url: </h3>
								<input
									type="url"
									name="item_img"
									className="url-input"
									placeholder="URL link for Image from hosting site"
									value={this.state.item_img}
									onChange={this.handleChange}
								/>
							</div>
							<div className="subbtn">
								<button type="submit" className="btn">
									Save
								</button>
							</div>
						</form>
					</div>
					<div className="right-column"></div>
				</div>
			</div>
		);
	}
}
