export const addShopAction = (payload) => { 
    return {
        type: 'ADDSHOP',
        payload: payload
    }
}

export const deleteShopAction = (payload) => { 
    return {
        type: 'DELETESHOP',
        payload: payload
    }
}