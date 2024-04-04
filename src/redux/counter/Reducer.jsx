import { INCREMENT, DECREMENT } from "./ActionsTypes";

// Initial State
const initialState = {
    value: 0,
}

// Reducer 
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + action.payload
            }
        case DECREMENT:
            return {
                ...state,
                value: state.value - action.payload
            }
        default:
            return state;
    }
}

export default Reducer;