import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import cart from '../cart.png';
import PropTypes from 'prop-types';
export default class Product extends Component
{
	render()
	{
		const {id, title, img, price, inCart} = this.props.product;
		return(
			<div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
				<div className="card">
				   <ProductConsumer>
				    {value => (
					<div className="img-container p-5" 
					 onClick={()=>
					  {
					  	value.handleDetail(id)
					  }}>
						<Link to="/details">
						<img src={img} alt="product" className="card-img-top" />
						</Link>
						<button className="cart-btn" disabled={inCart ? true : false}
						 onClick={()=>
						   {
						   	value.addToCart(id); 
						 	value.openModal(id);
						   }} >

						{inCart ? (<p className="mb-0" disabled>{" "}IN CART</p>) : (<img src={cart} alt="product" className="cart-pro" />)}
						</button>

					</div>)}
					</ProductConsumer>
				
				<div className="card-footer d-flex justify-content-between">
					<p className="align-self-center mb-0">
						{title}
					</p>
					<h5 className="text-black font-italic mb-0">
						<span className="mr-1">$</span>
						{price} 
					</h5>
				</div>
				</div>
			</div>
			);
	}
}


Product.propTypes = {
	product:PropTypes.shape({
		id:PropTypes.number,
		img:PropTypes.string,
		title:PropTypes.string,
		price:PropTypes.number,
		inCart:PropTypes.bool,
	}).isRequired
};