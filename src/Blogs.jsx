import React from "react";
import pic1 from "./images/studypic3.jpg";
import pic2 from "./images/studypic7.jpg";
import pic3 from "./images/studypic8.jpg";

const Blogs = () => {
	return (
		<>
			<h1> Welcome Blogs Page </h1>

			<div
				id="carouselExampleSlidesOnly"
				className="carousel slide "
				data-bs-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src={pic1} className="d-block w-10" alt="pic1" />
					</div>
					<div className="carousel-item ">
						<img src={pic2} className="d-block w-10" alt="pic2" />
					</div>
					<div className="carousel-item ">
						<img src={pic3} className="d-block w-10" alt="pic3" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Blogs;
