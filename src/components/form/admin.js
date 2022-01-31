import React, { Component } from "react";

export default class Admin extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="add-item-wrapper">
				<div className="page-title-wrapper">
					<h1>Add Items</h1>
				</div>
				<div className="page-setup-wrapper">
					<div className="left-column"></div>
					<div className="center-column">
						<div className="item-title">
							<input type="text" placeholder="Item Title" />
						</div>
						<div className="item-description">
							<textarea placeholder="Tell us about this item!" />
						</div>
						<div className="item-img">
							<input type="image" />
						</div>
					</div>
					<div className="right-column"></div>
				</div>
				<div className="footer-wrapper"></div>
			</div>
		);
	}
}
