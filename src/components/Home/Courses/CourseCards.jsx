import React, { useState, useEffect } from "react";
import coursesData from "../../../data.json";
import "./CourseCards.css";

function CourseCards() {
	const [sortOption, setSortOption] = useState("relevance");
	const [filteredCourses, setFilteredCourses] = useState([]);

	useEffect(() => {
		filterCourses();
	}, [sortOption]);

	function filterCourses() {
		let filtered = coursesData.filter((course) =>
			course.title.toLowerCase().includes(""),
		);

		if (sortOption === "lowToHigh") {
			filtered = filtered.sort((a, b) => a.price - b.price);
		} else if (sortOption === "highToLow") {
			filtered = filtered.sort((a, b) => b.price - a.price);
		} else if (sortOption === "rating") {
			filtered = filtered.sort((a, b) => b.rating - a.rating);
		}
		setFilteredCourses(filtered);
	}

	return (
		<div>
			<div>
				<label htmlFor='sortOption'>Sort by:</label>
				<select
					id='sortOption'
					value={sortOption}
					onChange={(e) => setSortOption(e.target.value)}>
					<option value='relevance'>Relevance</option>
					<option value='lowToHigh'>Price: Low to High</option>
					<option value='highToLow'>Price: High to Low</option>
					<option value='rating'>Highest Rated</option>
				</select>
			</div>
			<div className='courseContainer'>
				{filteredCourses.map((course) => (
					<div className='courseCard' key={course.title}>
						<div className='image'>
							<img src={course.image} alt='logo' />
						</div>
						<h3>{course.title}</h3>
						<p>{course.description}</p>
						<p>Instructor: {course.instructor}</p>
						<p>
							Rating: {course.rating}{" "}
							<i class='fa-solid fa-star'></i>
						</p>
						<p>Hours: {course.hours}</p>
						<p>Lectures: {course.lectures}</p>
						<p>Price: {course.price}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default CourseCards;