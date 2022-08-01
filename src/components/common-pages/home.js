import React, { Component } from "react";
import Dropdown from "reactstrap/src/Dropdown";
import DropdownToggle from "reactstrap/src/DropdownToggle";
import DropdownMenu from "reactstrap/src/DropdownMenu";
import DropdownItem from "reactstrap/src/DropdownItem";

import Product from "../product-area/product";

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
		};
		this.productItems = this.productItems.bind(this);
		this.handleFilter = this.handleFilter.bind(this);
		this.generateSearchMenu = this.generateSearchMenu.bind(this);
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
		console.log("test");
		fetch("https://jukebox-wood-crafts.herokuapp.com/item/get")
			.then((response) => response.json())
			.then((data) => {
				if (filter) {
					this.setState({
						data: data.filter((item) => {
							return item.category === filter;
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
		console.log("test2");
		if (filter === "RESET") {
			this.getProductItems();
		} else {
			console.log(filter);
			this.getProductItems(filter);
		}
	}

	generateSearchMenu() {
		const searchButtons = [
			"flag",
			"emblem",
			"tray",
			"misc",
			"wreath",
			"wagon",
			"cross",
			"family",
			"stall",
			"igy6",
			"heart",
			"desk",
			"mother",
			"puzzle",
			"christmas",
			"valentine",
			"light",
		];

		return searchButtons.map((button) => {
			return (
				// <option
				// 	key={`${button}`}
				// 	className="btn"
				// 	onClick={() => {
				// 		console.log("test3");

				// 		this.handleFilter(`${button}`);
				// 	}}>{`${button}`}</option>
				<DropdownItem
					key={`${button}`}
					className="btn"
					onClick={() => {
						console.log("test3");

						this.handleFilter(`${button}`);
					}}>
					{`${button}`}
				</DropdownItem>
			);
		});
	}

	handleChange(event) {
		// select feature
		// to catch the on select active event to change the options selected
	}

	render() {
		return (
			<div className="home-page-wrapper">
				<div className="title-wrapper">
					Product Page
					<div className="select-options">
						{/* <label htmlFor="Select Filter">Filter</label>
						<select
							id="Select Filter"
							name="Select Filter"
							size="1"
							className="selectFilter">
							<option
								className="btn"
								onClick={() => this.handleFilter("RESET")}>
								ALL
							</option>
							{this.generateSearchMenu()}
						</select>
					</div> */}
						{/* <div className="filter-drop"> */}
						<Dropdown
							direction="end"
							toggle={function noRefCheck() {}}>
							<DropdownToggle
								caret
								id="Select Filter"
								name="Select Filter"
								size="1"
								className="selectFilter">
								Filter Items
							</DropdownToggle>
							<DropdownMenu>
								{/* <DropdownItem header>Header</DropdownItem> */}
								<DropdownItem
									className="btn"
									onClick={() => this.handleFilter("RESET")}>
									Display All
								</DropdownItem>
								{/* <DropdownItem text>
									Dropdown Item Text
								</DropdownItem> */}
								{/* <DropdownItem disabled>
									Action (disabled)
								</DropdownItem> */}
								<DropdownItem divider />
								{this.generateSearchMenu()}
								{/* <DropdownItem>Bar Action</DropdownItem>
								<DropdownItem>Quo Action</DropdownItem> */}
							</DropdownMenu>
						</Dropdown>
					</div>
				</div>
				<div className="column-wrapper">
					<div className="right-column">{this.productItems()}</div>
				</div>
			</div>
		);
	}
}
