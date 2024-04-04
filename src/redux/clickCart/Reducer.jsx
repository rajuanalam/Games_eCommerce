import { CLICKCART } from "./ActionsTypes";

// Initial State
const initialState = {
  data: [],
};

// Reducer
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICKCART:
      return {
        ...state,
        data: [action.payload],
      };

    default:
      return state;
  }
};

export default Reducer;
