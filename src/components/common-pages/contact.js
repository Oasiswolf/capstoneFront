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
					<div className="location-text">
						<a
							href="https://goo.gl/maps/hz9EjzZaiiYw3vc16"
							target="_blank"
						>
							China Springs,Texas
						</a>
					</div>
				</div>
				<div className="fbgroup-info">
					<div className="fbgroup-icon"></div>
					<div className="fbgroup-link">
						<a
							href="https://www.facebook.com/JukeboxsWoodCrafts"
							target="_blank"
						>
							Jukebox Wood Crafts Facebook Page
						</a>
					</div>
				</div>
				<div className="etsygroup-info">
					<div className="etsygroup-icon"></div>
					<div className="etsygroup-link">
						<a
							href="https://www.etsy.com/shop/JukeBoxWoodCrafts?ref=shop_sugg"
							target="_blank"
						>
							Jukebox Wood Crafts on Etsy
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
