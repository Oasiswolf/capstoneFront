import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavbarText } from "reactstrap";

import logo from "../../../static/assets/logo/JukeboxWoodCraft.jpg";

export default class Navigation extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="navigation-wrapper">
				<Navbar color="secondary" dark expand="md">
					<div className="img-wrapper">
						<NavbarText>
							<img src={logo} />
						</NavbarText>
					</div>
					<div className="navbar-noimg">
						<NavbarBrand href="/">
							<p>Jukebox Wood Crafts</p>
						</NavbarBrand>
					</div>
					<div className="links">
						<Nav navbar>
							<NavItem>
								<NavLink exact to="/" className="navbarLinks">
									Home
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to="/about/" className="navbarLinks">
									About
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to="/contact" className="navbarLinks">
									Contact
								</NavLink>
							</NavItem>
						</Nav>
					</div>
				</Navbar>
			</div>
		);
	}
}
