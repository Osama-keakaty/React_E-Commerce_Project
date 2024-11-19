import { Routes, Route } from "react-router-dom";
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import Checkout from './routes/checkout/checkout.component'
import { useEffect } from 'react';

import { setCurrentUser } from "./store/user/user.action.js";
import { useDispatch } from "react-redux";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils.js';


import { getCategoriesAndDocuments } from "./utils/firebase/firebase.utils.js";
import { setCategories } from './store/category/categories.action';

const App = () => {

  const dispatch = useDispatch();
  

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);


  useEffect(() => {
    //TODO if we call async function inside useEffect callback function, we have to create a async function to do that 
    const getCategoriesMap = async () => {

      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    }
    getCategoriesMap();
  }, [dispatch])

  
  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          {/* //! /* in shop allows the Shop component to render content based on the nested path or to manage its own nested routes. */}
          <Route path="shop/*" element={<Shop />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
