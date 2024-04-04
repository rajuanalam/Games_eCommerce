import { ADDCART, DELETED, TOGGLED } from "./ActionsTypes"

export const addCart = (data) => {
    return {
        type: ADDCART,
        payload: data
    }
}

export const toggled = (id) => {
    return {
        type: TOGGLED,
        payload: id
    }
}

export const deleted = (id) => {
    return {
        type: DELETED,
        payload: id
    }
}
