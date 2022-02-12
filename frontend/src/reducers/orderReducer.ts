import { OrderDetail, OrderList, PlaceOrder } from "../constants"
import { FetchedOrderType, OrderDetailAction, OrderDetailState, OrderListAction, OrderListState, orderType, PlaceOrderAction, PlaceOrderState } from "../interfaces"

const initState: PlaceOrderState = {
    order: {} as orderType,
    error: "",
    loading: false,
    success: false,
}

export const orderReducer = (state: PlaceOrderState = initState, action: PlaceOrderAction) => {
    switch (action.type) {
        case PlaceOrder.REQUEST:
            return { ...state, loading: true, error: "" }

        case PlaceOrder.SUCCESS:
            return {
                ...state,
                order: action.payload,
                loading: false,
                success: true
            }

        case PlaceOrder.FAIL:
            return {
                ...state,
                error: action.payload,
                success: false,
                loading: false,
            }


        case PlaceOrder.RESET:
            return {
                ...state,
                order: {} as orderType,
                error: "",
                success: false,
                loading: false
            }

        default:
            return state
    }

}


const initOrderDetailState = {
    order: {} as FetchedOrderType,
    error: "",
    loading: true,
    success: false,
}

export const orderDetailReducer = (state: OrderDetailState = initOrderDetailState, action: OrderDetailAction) => {

    switch (action.type){


        case OrderDetail.REQUEST:
            return { ...state, loading: true, error: "" }

        case OrderDetail.SUCCESS:
            return {
                ...state,
                order: action.payload as FetchedOrderType,
                loading: false,
                success: true
            }

        case OrderDetail.FAIL:
            return {
                ...state,
                error: action.payload,
                success: false,
                loading: false,
            }


        case OrderDetail.RESET:
            return initOrderDetailState

        default:
            return state
    }

}



const initOrderListState = {
    orders: null as unknown as FetchedOrderType[],
    error: "",
    loading: true,
    success: false,
}


export const orderListReducer = (state: OrderListState = initOrderListState, action: OrderListAction) => {

    switch (action.type){


        case OrderList.REQUEST:
            return { ...state, loading: true, error: "" }

        case OrderList.SUCCESS:
            return {
                ...state,
                orders: action.payload as FetchedOrderType[],
                loading: false,
                success: true
            }

        case OrderList.FAIL:
            return {
                ...state,
                error: action.payload,
                success: false,
                loading: false,
            }


        case OrderList.RESET:
            return initOrderListState

        default:
            return state
    }

}