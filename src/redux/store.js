import { applyMiddleware, compose, createStore } from 'redux'
import { reducer } from './reducers/index'
import thunk from 'redux-thunk'

const initialStore = {
    cart: {
        userSignIn: {
            userInfo: localStorage.getItem('userInfo')
                ? JSON.parse(localStorage.getItem('userInfo'))
                : null
        },
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingAddress: localStorage.getItem('shippingAddress')
            ? JSON.parse(localStorage.getItem('shippingAddress'))
            : {},
        paymentMethod: 'PayPal'
    }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, initialStore, composeEnhancer(applyMiddleware(thunk)))


export default store