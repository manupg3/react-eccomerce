import React, { useState,useContext } from 'react'
import '../styles/header.css'
import imgShoppingCart from '../assets/icons/icon_shopping_cart.svg'
import Menu from '../components/menu'
import AppContext from '../context/AppContext'
import MyOrder from '../containers/myOrder'

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const {state} = useContext(AppContext)
    const [toggleSideCart, setToggleSideCart] = useState(false)

    const handleToogle = () => {
        setToggle(!toggle)
    }
    return (
        <nav>
            <img src="../assets/icons/icon_menu.svg" alt="menu" className="menu" />

            <div className="navbar-left">
                <img src="../assets/logos/logo_yard_sale.svg" alt="logo" className="logo" />

                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToogle}>platzi@example.com</li>
                    <li className="navbar-shopping-cart" onClick={()=> setToggleSideCart(!toggleSideCart)}>
                        <img src={imgShoppingCart} alt="shopping cart" />
                        <div>{state.cart.length > 0 ? state.cart.length : 0 } </div>
                    </li>
                </ul>
            </div>
            {toggle &&
                <Menu />
            }
            {toggleSideCart &&
                <MyOrder />
            }
        </nav>

    )
}
export default Header