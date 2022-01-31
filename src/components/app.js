import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./common-pages/home";
import About from "./common-pages/about";
import Contact from "./common-pages/contact";
import Products from "./product-area/product";
import Navigation from "./navigation/navigation-bar.js";
import ContactForm from "./form/form";
import Admin from "./form/admin";

export default class App extends Component {
	constructor() {
		super();
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
							<Route path="/form" component={ContactForm} />
							<Route path="/add" component={Admin} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}
