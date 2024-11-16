import { createContext, useReducer,  } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils"; //!  we dont need it any more. 
// import SHOP_DATA from "../shop-data"; //! we dont need it any more. 

export const CategoriesContext = createContext({
    categoriesMap: {},
});

const CATEGORIES_TYPES={
    CATEGORY_MAP:"CATEGORY_MAP"
}
const INITIAL_VALUES={
    categoriesMap:{},
}
const categoriesReducer = (state,action)=>{
    const {type,payload} = action;
if (type===CATEGORIES_TYPES.CATEGORY_MAP){
return {
    ...state,
    categoriesMap:payload
}
}else{
    throw new Error (`unhandled type ${type}`)
} 
}

export const CategoriesProvider = ({ children }) => {
    
    const [{categoriesMap}, dispatch] = useReducer(categoriesReducer,INITIAL_VALUES);

    const setCategoriesMap = ()=>{
        const getCatigoriesMap = async () =>{

            const categoryMap = await getCategoriesAndDocuments();
            dispatch(createAction(CATEGORIES_TYPES.CATEGORY_MAP,categoryMap))
        }  
        getCatigoriesMap();
    }
    setCategoriesMap();
    const value = { categoriesMap }
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    );
} 





// ! Category Context using useState and useEffect  
// import { createContext, useEffect, useState } from "react";
// import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
// // import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils"; //!  we dont need it any more. 
// // import SHOP_DATA from "../shop-data"; //! we dont need it any more. 

// export const CategoriesContext = createContext({
//     categoriesMap: {},
// });

// export const CategoriesProvider = ({ children }) => {
//     //! I run it once and comment it to ensure that the SHOP_DATA added one time not every page refresh so we dont need it any more
//     // useEffect(()=>{
//     //     addCollectionAndDocuments('categories',SHOP_DATA)
//     // },[])
//     const [categoriesMap, setCategoriesMap] = useState({});
//     useEffect(()=>{
//         //TODO if we call async function inside useEffect callback function, we have to create a async function to do that 
//         const getCatigoriesMap = async () =>{

//             const categoryMap = await getCategoriesAndDocuments();
//             setCategoriesMap(categoryMap);
//         }  
//         getCatigoriesMap();
//     },[])
//     const value = { categoriesMap }
//     return (
//         <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
//     );
// } 