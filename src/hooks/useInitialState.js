import { useState } from 'react'

const InitialState =
{
    cart: []
}

const useInitialState = () => {
    const [state, setState] = useState(InitialState)

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }
    const removeFromSideCart = (payload) =>{
        setState({
            ...state,
            cart: state.cart.filter(item => item.id !== payload.id)
        })
    
    }
    return {
        state,
        addToCart,
    removeFromSideCart
    }
}
export default useInitialState