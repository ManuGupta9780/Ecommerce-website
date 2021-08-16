import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<NavLink className="navbar-brand" to="/">
					Zathura
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto ">
						<li className="nav-item ">
							<NavLink
								activeClassName="menu_active"
								exact
								className="nav-link "
								aria-current="page"
								to="/">
								Home
							</NavLink>
						</li>

						<li className="nav-item ">
							<NavLink
								activeClassName="menu_active"
								className="nav-link"
								aria-current="page"
								to="/allProducts">
								All Products
							</NavLink>
						</li>
						<li className="nav-item ">
							<NavLink
								activeClassName="menu_active"
								className="nav-link"
								aria-current="page"
								to="/men">
								Men
							</NavLink>
						</li>
						<li className="nav-item ">
							<NavLink
								activeClassName="menu_active"
								className="nav-link"
								aria-current="page"
								to="/women">
								Women
							</NavLink>
						</li>
						<li className="nav-item ">
							<NavLink
								activeClassName="menu_active"
								className="nav-link"
								aria-current="page"
								to="/blogs">
								Blogs
							</NavLink>
						</li>
						<li className="nav-item ">
							<NavLink
								activeClassName="menu_active"
								className="nav-link"
								aria-current="page"
								to="/contact">
								Contact us
							</NavLink>
						</li>
						<li className="nav-item ">
							<NavLink
								activeClassName="menu_active"
								className="nav-link"
								aria-current="page"
								to="/profile">
								Profile
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
// const Navbar = () => {
// 	return (
// 		<>
// 			<div className="container-fluid nav_bg">
// 				<div className="row">
// 					<div className="col-10 mx-auto">
//
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

export default Navbar;
