import React, { Component } from "react";

import logo from "../../../static/assets/logo/JukeboxWoodCraft.jpg";

export default class Navigation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: "",
			item_title: "",
			item_img: "",
			category: "",
		};
	}

	handleImageLoad() {}

	render() {
		return (
			<div className="navigation-wrapper">
				<div className="logo-img">
					<img src={logo} />
				</div>
				<div className="navBtnDiv">
					<button>Home</button>
					<button>Products</button>
					<button>About</button>
					<button>Contact</button>
				</div>
				<div className="site-name">Jukebox Wood Crafts</div>
			</div>
		);
	}
}
