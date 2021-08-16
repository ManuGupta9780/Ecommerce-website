import React from "react";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Home";
import Profile from "./Profile";
import AllProducts from "./AllProducts";
import Men from "./Men";
import Women from "./Women";
import blogs from "./Blogs";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/profile" component={Profile} />
				<Route exact path="/allProducts" component={AllProducts} />
				<Route exact path="/men" component={Men} />
				<Route exact path="/women" component={Women} />
				<Route exact path="/blogs" component={blogs} />
				<Route exact path="/contact" component={Contact} />
				<Redirect to="/" />
			</Switch>
		</>
	);
};

export default App;
