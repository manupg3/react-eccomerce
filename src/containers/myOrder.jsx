import React, {useContext} from 'react'
import '../styles/myOrder.css'
import AppContext from '../context/AppContext';
import OrderItem from '../components/orderItem';

const MyOrder = () =>{
    const {state} = useContext(AppContext)
    console.log("STATE TRAIDO", state.cart.images)

    const total = () =>{
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price
    const sumTotal = state.cart.reduce(reducer, 0)
    return sumTotal    
}
    return(
        <aside class="product-detail" >
        <div class="title-container">
          <img src="./icons/flechita.svg" alt="arrow" />
          <p class="title">My order</p>
        </div>
    
        <div class="my-order-content">
        {state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
				))}
          <div class="order">
            <p>
              <span>Total</span>
            </p>
            <p>${total()}</p>
          </div>
    
          <button class="primary-button">
            Checkout
          </button>
        </div>
      </aside>
        )
    }
export default MyOrder