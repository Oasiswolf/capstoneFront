import React, { Component } from "react";

import Product from "../product-area/product";

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			name: "",
		};
		this.productItems = this.productItems.bind(this);
		this.handleFilter = this.handleFilter.bind(this);
		// this.generateSearchMenu = this.generateSearchMenu.bind(this);
	}

	componentDidMount() {
		this.getProductItems();
	}

	productItems() {
		return this.state.data.map((item) => {
			return <Product key={item.id} item={item} />;
		});
	}

	getProductItems(filter = null) {
		fetch("https://jukebox-wood-crafts.herokuapp.com/item/get")
			.then((response) => response.json())
			.then((data) => {
				if (filter) {
					this.setState({
						data: data.filter((item) => {
							return item.category === this.state.name;
						}),
					});

					console.log("Good Response Filtered", data);
				} else {
					this.setState({
						data: data,
					});
					console.log("Good Response", data);
				}
			})
			.catch((error) => {
				console.log("Error Getting items", error);
			});
	}

	handleFilter(filter) {
		if (filter === "RESET") {
			this.getProductItems();
		} else {
			console.log(filter);
			this.getProductItems(filter);
		}
	}

	// generateSearchMenu() {
	// 	const searchButtons = [
	// 		"flag",
	// 		"emblem",
	// 		"tray",
	// 		"misc",
	// 		"wreath",
	// 		"wagon",
	// 		"cross",
	// 		"family",
	// 		"stall",
	// 		"igy6",
	// 		"heart",
	// 		"desk",
	// 		"mother",
	// 		"puzzle",
	// 		"christmas",
	// 		"valentine",
	// 		"light",
	// 	];

	// 	return searchButtons.map((button) => {
	// 		return (
	// 			<button
	// 				className="btn"
	// 				onClick={() => {
	// 					this.handleFilter(`${button}`);
	// 				}}
	// 			>{`${button}`}</button>
	// 		);
	// 	});
	// }
	render() {
		return (
			<div className="home-page-wrapper">
				<div className="title-wrapper">Home Page</div>
				<div className="column-wrapper">
					<div className="left-column">
						{/* {this.generateSearchMenu()} */}
						<button
							name=""
							className="btn"
							onClick={() => this.handleFilter("flag")}
						>
							Flags
						</button>
						<button
							name="emblem"
							className="btn"
							onClick={() => this.handleFilter("emblem")}
						>
							Emblems
						</button>
						<button
							className="btn"
							onClick={() => this.handleFilter("RESET")}
						>
							ALL
						</button>
					</div>
					<div className="right-column">{this.productItems()}</div>
				</div>
			</div>
		);
	}
}
