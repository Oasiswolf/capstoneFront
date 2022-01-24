import React from "react";

import owners from "../../../static/assets/logo/OwnerOperator.jpg";

export default function Contact() {
	return (
		<div className="contact-wrapper">
			<div
				className="leftside-wrapper"
				style={{
					background: "url(" + owners + ") no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>
			<div className="rightside-wrapper">
				<h2>Contact Page</h2>
				<div className="location-wrapper">
					<div className="location-icon"></div>
					<div className="location-text">China,Texas</div>
				</div>
				<div className="fbgroup-info">
					<div className="fbgroup-icon"></div>
					<div className="fbgroup-link">
						<a
							href="https://www.facebook.com/JukeboxsWoodCrafts"
							target="_blank"
						>
							Jukebox Wood Crafts
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
