import React from "react";
import { NavLink } from "react-router-dom";
import web from "./bluelogo.png";
const Home = () => {
	return (
		<>
			<section id="header" className="d-flex align-items-center header-wrapper">
				<div className="container-fluid nav_bg">
					<div className="row">
						<div className="col-10 mx-auto">
							<div className="row">
								<div className="col-md-6 pt-5 pt-lg-0  order-2 order-lg-1 d-flex justify-content-center flex-column">
									<h1>
										Exclusive Online store for IITians.
										<strong className="brand-name"> Zathura </strong>
									</h1>
									<h2 className="my-3">Come buy from us.</h2>
									<div className="mt-3">
										<NavLink to="/buyacourse" className="btn-get-started ">
											Register for free
										</NavLink>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<h1>Offers</h1>
				<img src={web} className="img-fluid" alt="testing" />
			</section>
		</>
	);
};

export default Home;
/*
<div className="col-lg-6 order-1 order-lg-2 header-img">
									<img
										src={web}
										className="img-fluid animated"
										alt="home img"
									/>
								</div>
								*/
