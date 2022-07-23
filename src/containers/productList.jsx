import React, { useEffect, useState } from 'react';
import ProductItem from '../components/productItem';
import '../styles/productList.css';
import useGetProducts from '../hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products'

const ProductList = () => {
const products = useGetProducts(API)
console.log("PRODUCTOS TRAIDOS",products)
  
	return (
		<section className="main-container">
			<div className="ProductList">
                {products.map(product =>(
                    	<ProductItem product={product} key={product.id} />
                 ))}
			
			</div>
		</section>
	);
}

export default ProductList;