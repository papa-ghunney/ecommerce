import { combineReducers } from 'redux'
import { cartReducer } from './cartReducers'
import { userDetailsReducer, userRegisterReducer, userSignInReducer, userUpdateProfileReducer } from './userReducer'
import { productListReducer, productDetailsReducer, productCreateReducer } from './productReducer'
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, orderMineListReducer } from './orderReducers'

export const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productCreate: productCreateReducer,
    cart: cartReducer,
    userSignIn: userSignInReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMineList: orderMineListReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer

})