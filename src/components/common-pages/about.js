import React from "react";

import faces from "../../../static/assets/logo/LoversgazeFull.jpg";

export default function About() {
	return (
		<div className="about-wrapper">
			<div
				className="leftside-wrapper"
				style={{
					background: "url(" + faces + ") no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>
			<div className="rightside-wrapper">
				<div className="title-wrapper">
					<h2>About Us</h2>
				</div>
				<div className="info-wrapper">
					<span className="about-us-text">
						We started doing wood crafts as a hobby a few years ago.
						Only recently have we started doing enough works to
						setup a stall at our local market, as well as doing some
						pieces of commisioned work. If you would like to help us
						to continue to grow as a small business please check out
						our wares and feel free to request to get prices and a
						possible turn around time on your product.
					</span>
				</div>
			</div>
		</div>
	);
}
