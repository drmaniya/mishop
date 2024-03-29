import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../mi.png';
import cart from '../cart.png';
class Navbar extends Component
{
	render()
	{
		return(
			<nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
				<Link to="/">
					<img src={logo} className="navbar-brand" alt="store" />
				</Link>
				<ul className="navbar-nav align-items-center">
					<li className="nav-item ml-5">
						<Link to="/" className="nav-links">
							MI PRODUCTS
						</Link>
					</li>
				</ul>
				<Link to="/cart" className="ml-auto set-btn">
					<button>
					    <img src={cart} className="set-cart" alt="st"/>
						MY CART
					</button>	
				</Link>
			</nav>

		);
	}

}

export default Navbar;