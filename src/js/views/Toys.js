import React from "react";
import { Link } from "react-router-dom";
//import "../../styles/index.css";

//include images into your bundle
import Prime from "../../img/tool.png";

//create your first component
const Toys = () => {
	return (
		<main>
			<section className="left">
				<div className="product-info">
					<h1>Optimus Prime</h1>
					<p>New Selection of Toys</p>
					<h2>$70</h2>
					<div className="info-btns">
						<div className="btn discover-btn">more info</div>
						<div className="btn cart-btn">Shop For Toys</div>
					</div>
				</div>
			</section>
			<section className="right">
				<img src="tool.png" width="600px" height="630px" alt=""></img>
			</section>
		</main>
	);
};

export default Toys;
