import { ADDCART, DELETED, TOGGLED } from "./ActionsTypes";

// Initial State
const initialState = {
    data: []
};

// Reducer
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDCART:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
            
        case TOGGLED:
            return {
                ...state,
                data: state.data.map((item) => {
                    if(item.id === action.payload) {
                        return {
                            ...item,
                            heartCondition: !item.heartCondition
                        }
                    }
                    return item
                })
            }

        case DELETED:
            return {
                ...state,
                data: state.data.map((item) => {
                    if(item.id === action.payload) {
                        return null
                    }
                    return item
                }).filter((item) => item !== null)
            }
        default:
            return state;
    }
}

export default Reducer;