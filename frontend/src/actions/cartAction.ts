import axios from "axios";
import { Dispatch } from "redux";
import { AddToCart } from "../constants";
import { product } from "../interfaces";
import { State } from "../reducers";

export const cartAddItemAction = (id: any, qty: number) => async (dispatch: Dispatch, getState: () => State) => {
    const res = await axios.get(`/api/products/${id}`)
    const product = res.data as product
    console.log(product);

    dispatch({
        type: AddToCart.ADD,
        payload: {
            product_id: product._id,
            name: product.name,
            image: product.image,
            price: product.price,
            countInStock: product.countInStock,
            qty
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    // localStorage.setItem('cartItems', "")

}

export const cartRemoveItemAction = (product_id: string) => (dispatch: Dispatch, getState: ()=> State) =>{
    dispatch({type: AddToCart.REMOVE, id_toBeRemoved: product_id})
    
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    
}