import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./common-pages/home";
import About from "./common-pages/about";
import Contact from "./common-pages/contact";
import Products from "./product-area/product";
import Navigation from "./navigation/navigation-bar.js";

export default class App extends Component {
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
