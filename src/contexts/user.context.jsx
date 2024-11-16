import {useEffect, useReducer } from 'react';
import { createContext } from 'react';
import { onAuthStateChangedListener } from '../utils/firebase/firebase.utils.js';
// create a user context and pass a default values
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => { },

});
export const SET_CURRENT_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const INITIAL_STATE = {
    currentUser: null
}
const userReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_CURRENT_TYPES.SET_CURRENT_USER:
            return {
                // the entire previous state values and overwrite the currentUser value.
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhadled type ${type} in userReducer`)
    }

}

export const UserProvider = ({ children }) => {
    // useReducer takes two arguments, the Reducer function and the init state
    const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const setCurrentUser = (user) => {
        // you have to call dispatch function to pass the action into it to change the action in userReducer
        dispatch(
            {
                type: SET_CURRENT_TYPES.SET_CURRENT_USER,
                payload: user
            }
        )}

        useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);
    const values = { currentUser, setCurrentUser };
    return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}






//! this is using a useState method
// import { useState, useEffect } from 'react';
// import { createContext } from 'react';
// import { onAuthStateChangedListener } from '../utils/firebase/firebase.utils.js';
// // create a user context and pass a default values
// export const UserContext = createContext({
//     currentUser: null,
//     setCurrentUser: () => { },

// });

// export const UserProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState(null);
//     useEffect(() => {
//         const unsubscribe = onAuthStateChangedListener((user) => {
//             setCurrentUser(user);
//         });
//         return unsubscribe;
//     }, []);
//     // this is the value that I want to pass
//     const values = { currentUser, setCurrentUser };
//     return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
// }
