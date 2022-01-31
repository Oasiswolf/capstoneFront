import React from "react";

// import Item from "../product-area/item";

export default function Products(props) {
	const { id, title, category, item_img } = props.item;
	// <Item
	// 	id={props.item.id}
	// 	title={props.item.title}
	// 	image={props.item.item_img}
	// />;
	return (
		<div className="product-wrapper">
			<div className="item-name">
				{props.item.title}
				<div className="item-id">{props.item.id}</div>
			</div>
			<div className="item-category">{props.item.category}</div>
			<div className="item-img-wrapper">
				<img src={props.item.item_img} decoding="auto" />
			</div>
		</div>
	);
}
