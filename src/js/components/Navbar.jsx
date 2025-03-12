import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
		<div className="container-fluid">
		  <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
		  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
			<ul className="navbar-nav">
			  <li className="nav-item">
				<a className="nav-link active text-white" aria-current="page" href="#">Home</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link disabled" aria-disabled="true" href="#">About</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link disabled" aria-disabled="true" href="#">Services</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link disabled" aria-disabled="true">Contact</a>
			  </li>
			</ul>
		  </div>
		</div>
	  </nav>
	);
  };

export default Navbar;