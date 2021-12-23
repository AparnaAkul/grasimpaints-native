import { LOGIN_PASSWORD, LOGIN_USERNAME, STORE_TITLE ,ADD_ITEM_TO_CART, ITEM_COUNT, ITEM_COUNT_DECREASE, ITEM_COUNT_INCREASE, REMOVE_ITEM_FROM_CART } from "./types"

export const loginUserName = (userName) => {
    return {
        type: LOGIN_USERNAME,
        payload: userName
    }
}
export const loginPassword = (password) => {
    return {
        type: LOGIN_PASSWORD,
        payload: password
    }
}

export const storeTitle = (title) => {
    return {
        type: STORE_TITLE,
        payload: title
    }
}

export const itemCount = (count) => {
    return {
        type: ITEM_COUNT,
        payload: count
    }
}

export const itemCountIncrease = (countIncrease) => {
    return {
        type: ITEM_COUNT_INCREASE,
        payload: countIncrease
    }
}

export const itemCountDecrease = (countDecrease) => {
    return {
        type: ITEM_COUNT_DECREASE,
        payload: countDecrease
    }
}

export const addItemToCart = (items) =>{
    return{
        type:ADD_ITEM_TO_CART,
        payload:items
    }
};

export const removeItemFromCart = () =>{
    return{
        type:REMOVE_ITEM_FROM_CART
    }
}