import { Route, Routes } from 'react-router-dom'
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from '../category/category.component';
// import { useEffect } from 'react';
// import { setCategories } from '../../store/category/categories.action';
// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";
// import { useDispatch } from "react-redux";

const Shop = () => {

  // const dispatch = useDispatch();
    
  // useEffect(() => {
  //   //TODO if we call async function inside useEffect callback function, we have to create a async function to do that 
  //   const getCategoriesMap = async () => {

  //     const categoriesArray = await getCategoriesAndDocuments();
  //     dispatch(setCategories(categoriesArray));
  //   }
  //   getCategoriesMap();
  // }, [dispatch])

    return (
        <Routes>
            <Route index element={<CategoriesPreview />}/>
            {/* //TODO you have to path the name of component in or our case 'category' */}
                <Route path=':category' element={<Category />} />
        </Routes>
    );

}

export default Shop;