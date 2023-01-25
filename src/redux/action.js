
export const ADD_CART = 'ADD_CART';
export const DELETE_CART = 'DELETE_CART';
export const QUANTITY_CHANGE = 'QUANTITY_CHANGE';
export const ADD_ADDRESS = 'ADD_ADDRESS';

export function AddCart(payload) {
    return {
        type: 'ADD_CART',
        payload
    }
}

export function DeleteCart(payload) {
    return {
        type: 'DELETE_CART',
        payload
    }
}

export function QuantityChange(payload) {
    return {
        type: 'QUANTITY_CHANGE',
        payload
    }
}

export function AddAddress(payload) {
    return {
        type: 'ADD_ADDRESS',
        payload
    }
}