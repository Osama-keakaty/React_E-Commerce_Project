import { useEffect ,lazy,Suspense } from 'react';
import { Routes, Route  } from "react-router-dom";
// import Home from './routes/home/home.component'

// import Navigation from './routes/navigation/navigation.component'

// import Authentication from './routes/authentication/authentication.component'
// import Shop from './routes/shop/shop.component'

// import Checkout from './routes/checkout/checkout.component'

// import { setCurrentUser } from "./store/user/user.action.js";

// import { useDispatch } from "react-redux";
// import { setCategories } from './store/category/categories.action';

import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils.js';
import { getCategoriesAndDocuments } from "./utils/firebase/firebase.utils.js";

import { useShallow } from "zustand/shallow";
import { useUserStore } from "./zustand-store/user/user.store.js";
import { useCategoryStore } from "./zustand-store/category/category.store.js";
import { useCartStore } from "./zustand-store/cart/cart.store.js";
import Spinner from './components/spinner/spinner.component.jsx';


const Authentication = lazy(()=>import('./routes/authentication/authentication.component'))
const Shop = lazy(()=>import('./routes/shop/shop.component'))
const Navigation= lazy ( ()=> import('./routes/navigation/navigation.component'))
const Home= lazy  (()=>import( './routes/home/home.component'))
const Checkout= lazy(()=>import('./routes/checkout/checkout.component')) 


const App = () => {

//! using Redux 
  // const dispatch = useDispatch();
  
  // useEffect(() => {
    //   const unsubscribe = onAuthStateChangedListener((user) => {
  //     if (user) {
    //       createUserDocumentFromAuth(user);
    //     }
    //     dispatch(setCurrentUser(user));
    //   });
    
    //   return unsubscribe;
    // }, [dispatch]);
    
    // useEffect(() => {
    //   //TODO if we call async function inside useEffect callback function, we have to create a async function to do that 
    //   const getCategoriesMap = async () => {
      
      //     const categoriesArray = await getCategoriesAndDocuments();
      //     dispatch(setCategories(categoriesArray));
    //   }
    //   getCategoriesMap();
    // }, [dispatch])

    const setCurrentUser = useUserStore(useShallow((state) => state.setCurrentUser));
    const setCategoriesMap = useCategoryStore(useShallow((state) => state.setCategoriesMap));
    const setLoading = useCategoryStore(useShallow((state) => state.setLoading));
    const { setProductNum, setTotalItemPrice, cartItems } = useCartStore(useShallow((state) => ({
      cartItems: state.cartItems,
      setProductNum: state.setProductNum,
      setTotalItemPrice: state.setTotalItemPrice,
  
    })));

    //! using Zustand 

    useEffect(() => {
      try {

      const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
          createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
      });
      return unsubscribe;
    } catch (error){
      console.log(error)
    } 
  }, [setCurrentUser]);

  useEffect(() => {
    //TODO if we call async function inside useEffect callback function, we have to create an async function to do that 
    const getCatigoriesMap = async () => {
      try {
        const categoryMap = await getCategoriesAndDocuments();
        setCategoriesMap(categoryMap);
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false)
      }
    }
    getCatigoriesMap();
  }, [setCategoriesMap, setLoading]);

  useEffect(() => {
    const totalPriceValue = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0)
    setTotalItemPrice(totalPriceValue);
    const newProductNum = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setProductNum(newProductNum);
  }, [cartItems, setProductNum, setTotalItemPrice]);

  return (
    <div className="App" >
    <Suspense fallback = {<Spinner/>}>
    <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          {/* //! /* in shop allows the Shop component to render content based on the nested path or to manage its own nested routes. */}
          <Route path="shop/*" element={<Shop />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </Suspense>
    </div>
  );
}

export default App;
