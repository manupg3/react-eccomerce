import React, { useState,useContext } from 'react';
import '../styles/productItem.css';
import addToCartImg from '../assets/icons/bt_add_to_cart.svg';
import useInitialState from '../hooks/useInitialState';
import AppContext from '../context/AppContext';

const ProductItem = ({product}) => {
const {addToCart} = useContext(AppContext)
	const handleClick = (item) => {
     addToCart(item)
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={()=>handleClick(product)} >
					<img src={addToCartImg} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;