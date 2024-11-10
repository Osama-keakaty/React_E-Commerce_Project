import { useState,useEffect } from 'react';
import {createContext} from 'react';
import { onAuthStateChangedListener } from '../utils/firebase/firebase.utils.js';
// create a user context and pass a default values
export const UserContext = createContext({
currentUser: null,
setCurrentUser: () => { },

});

export const UserProvider = ({children}) => {
    const [currentUser,setCurrentUser]= useState(null);
    useEffect(()=>{
       const unsubscribe = onAuthStateChangedListener((user)=>{
            setCurrentUser(user);
        });
        return unsubscribe;
    },[]);
    // this is the value that I want to pass
    const values = {currentUser,setCurrentUser};
return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}
