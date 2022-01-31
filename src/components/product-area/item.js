import React from "react";

export default function Item(props) {
	return (
		<div className="item-wrapper">
			{`props.item.${id}`}
			<div className="title">{`props.item.${title}`}</div>
			<div className="image">{`props.item.${item_img}`}</div>
		</div>
	);
}
