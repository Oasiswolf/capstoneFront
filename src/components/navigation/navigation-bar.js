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
							<h1>Jukebox Wood Crafts</h1>
						</NavbarBrand>
					</div>
					<div className="links">
						<Nav navbar>
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
							<NavItem>
								<NavLink to="/products" className="navbarLinks">
									Products
								</NavLink>
							</NavItem>
						</Nav>
					</div>
				</Navbar>
				{/* <div className="flexdiv">
					<div className="logo-img">
						<img src={logo} />
					</div>
					<div className="site-name">Jukebox Wood Crafts</div>
					<div className="navBtnDiv">
						<select name="Nav-Links">
							<option as={Link} to="/">
								Home
							</option>
							<option as={Link} to="/products">
								Products
							</option>
							<option as={Link} to="/about">
								About
							</option>
							<option as={Link} to="/contact">
								Contact
							</option>
						</select>
					</div>
				</div> */}
			</div>
		);
	}
}
