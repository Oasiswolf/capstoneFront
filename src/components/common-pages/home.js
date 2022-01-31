import React, { Component } from "react";

import Product from "../product-area/product";

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
		};
		this.productItems = this.productItems.bind(this);
		this.handleFilter = this.handleFilter.bind(this);
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
							return item.category;
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
			this.getProductItems(filter);
		}
	}
	render() {
		return (
			<div className="home-page-wrapper">
				<div className="title-wrapper">Home Page</div>
				<div className="column-wrapper">
					<div className="left-column">
						<button
							className="btn"
							onClick={() => this.handleFilter("flag")}
						>
							Flags
						</button>
						<button className="btn">Emblems</button>
						<button className="btn">Trays</button>
						<button className="btn">Wreath</button>
						<button className="btn">Wagons</button>
						<button className="btn">Cross</button>
						<button className="btn">Family</button>
						<button className="btn">Service Members</button>
						<button className="btn">Hearts</button>
						<button className="btn">Table or Desktop</button>
						<button className="btn">Mother</button>
						<button className="btn">Puzzle</button>
						<button className="btn">Valentine</button>
						<button className="btn">Christmas</button>
						<button className="btn">Stall Days</button>
						<button className="btn">Misc</button>
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
