import { SET_CURRENT_TYPES } from "./user.types";

const INITIAL_STATE = {
    currentUser: null
}
export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_CURRENT_TYPES.SET_CURRENT_USER:
            return {
                // the entire previous state values and overwrite the currentUser value.
                ...state,
                currentUser: payload
            }
        default:
            // we will return the current state in default situation 
            return state;
    }

}
