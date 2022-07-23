import React, {useContext} from 'react';
import close from '../assets/icons/icon_close.png'
import '../styles/orderItem.css'
import AppContext from '../context/AppContext';

const OrderItem = ({product}) => {
	const {removeFromSideCart} = useContext(AppContext)
    const handleRemove = product =>{
		removeFromSideCart(product)
	}
	
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt="bike" />
			</figure>
			<p>{product.title}</p>
			<p>${product.price} </p>
			<img src={close}  alt="close" onClick={()=> handleRemove(product)}/>
		</div>
	);
}

export default OrderItem;