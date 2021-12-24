import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

//include images into your bundle
import Model from "../../img/new.png";
//create your first component
const Clothing = () => {
	return (
		<main>
			<section className="lef">
				<div className="product-info1">
					<h1>Clothing</h1>
					<p>New Selection of Clothes</p>
					<h2>$50 - $100</h2>
					<div className="info-btns">
						<div className="btn discover-btn">more info</div>
						<Link to="/Products">
						<div className="btn cart-btn">Shop For Clothes</div>
						</Link>
					</div>
				</div>
			</section>
			<section className="next">
				<img src="new.png" width="600px" height="660px" alt=""></img>
			</section>
		</main>
	);
};

export default Clothing;
