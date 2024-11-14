import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils"; //!  we dont need it any more. 
// import SHOP_DATA from "../shop-data"; //! we dont need it any more. 

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    //! I run it once and comment it to ensure that the SHOP_DATA added one time not every page refresh so we dont need it any more
    // useEffect(()=>{
    //     addCollectionAndDocuments('categories',SHOP_DATA)
    // },[])
    const [categoriesMap, setCategoriesMap] = useState({});
    useEffect(()=>{
        //TODO if we call async function inside useEffect callback function, we have to create a async function to do that 
        const getCatigoriesMap = async () =>{

            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }  
        getCatigoriesMap();
    },[])
    const value = { categoriesMap }
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    );
} 