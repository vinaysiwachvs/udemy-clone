import first from "../../../assets/first.jpg";
import "./carousel.css";
import React, { useState, useEffect } from "react";

const Carousel = () => {
	return (
		<div className='caraousel'>
			<div className='image'>
				<div className='photo'>
					<img src={first} alt='first' />
					<div className='box'>
						<h1>Subsrcibe to the best of Udemy</h1>
						<p>
							With Personal Plan, you get access to 8,000 of our
							top-rated courses in tech, business, and more.
						</p>
						<a href='/#'>Learn More.</a>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Carousel;
