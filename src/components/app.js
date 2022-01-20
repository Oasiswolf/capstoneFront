import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import Home from "./common-pages/home";
import About from "./common-pages/about";
import Contact from "./common-pages/contact";
import Products from "./product-area/product";
import Navigation from "./navigation/navigation-bar.js";

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			data: [],
		};
	}
	componentDidMount() {
		this.getProductItems();
	}

	homeItems() {
		return this.state.data.map((item) => {
			return <Home key={item.id} item={item} />;
		});
	}

	productItems() {
		return this.state.data.map((item) => {
			return <Products key={item.id} item={item} />;
		});
	}

	getProductItems() {
		axios
			.get("https://jukebox-wood-crafts.herokuapp.com/item/get")
			.then((response) => {
				console.log("Getting Product Items", response);
				this.setState({
					data: response.data,
				});
			})
			.catch((error) => {
				console.log("Error Getting items", error);
			});
	}

	render() {
		return (
			<div className="app">
				<Router>
					<div>
						<Navigation />

						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/about" component={About} />
							<Route path="/contact" component={Contact} />
							<Route path="/products" component={Products} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}
