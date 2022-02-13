export enum ProductList {
    REQUEST = "PRODUCT_LIST_REQUEST",
    SUCCESS = "PRODUCT_LIST_SUCCESS",
    FAIL = "PRODUCT_LIST_FAIL",
}


export enum ProductDetail {
    REQUEST = "PRODUCT_DETAIL_REQUEST",
    SUCCESS = "PRODUCT_DETAIL_SUCCESS",
    FAIL = "PRODUCT_DETAIL_FAIL",
}

export enum AddToCart {
    ADD = "ADD_TO_CART",
    REMOVE = "REMOVE_TO_CART",
    SAVE_SHIPPING = "SAVE_SHIPPING_ADDRES",
    SAVE_PAYMENT = "SAVE_PAYMENT_METHOD",
    CALCULATE_PRICE = "CALCULATE_TOTAL_PRICE",
    RESET = "RESET_THE_CART"

}



export enum UserSingIn {
    LOGOUT = 'USER_LOGOUT',

    REQUEST = "USER_DETAIL_REQUEST",
    SUCCESS = "USER_DETAIL_SUCCESS",
    FAIL = "USER_DETAIL_FAIL",
}


export enum UserSingUp {

    REQUEST = "USER_SIGN_UP_REQUEST",
    SUCCESS = "USER_SIGN_UP_SUCCESS",
    FAIL = "USER_SIGN_UP_FAIL",
}



///Place order

export enum PlaceOrder {
    REQUEST = "PLACE_ORDER_REQUEST",
    SUCCESS = "PLACE_ORDER_SUCCESS",
    FAIL = "PLACE_ORDER_FAIL",
    RESET = "PLACE_ORDER_RESET",

}


export enum OrderDetail {
    REQUEST = "ORDER_DETAIL_REQUEST",
    SUCCESS = "ORDER_DETAIL_SUCCESS",
    FAIL = "ORDER_DETAIL_FAIL",
    RESET = "ORDER_DETAIL_RESET",

}



export enum OrderList {
    REQUEST = "ORDER_LIST_REQUEST",
    SUCCESS = "ORDER_LIST_SUCCESS",
    FAIL = "ORDER_LIST_FAIL",
    RESET = "ORDER_LIST_RESET",

}
    

export enum OrderPaid {
    REQUEST = "ORDER_PAID_REQUEST",
    SUCCESS = "ORDER_PAID_SUCCESS",
    FAIL = "ORDER_PAID_FAIL",
    RESET = "ORDER_PAID_RESET",

}