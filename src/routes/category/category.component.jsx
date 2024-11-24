import { useEffect, useState } from 'react';
import './category.styles.scss'
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';
// import { useSelector } from 'react-redux';
// import {selectCategories} from '../../store/category/categories.selector'
import { useShallow } from 'zustand/shallow';
import { useCategoryStore } from '../../zustand-store/category/category.store';


const Category = () => {
    // const  categoriesMap  = useSelector(selectCategories);

    const { categoriesMap, loading } = useCategoryStore(useShallow((state) => ({

        categoriesMap: state.categoriesMap,
        loading: state.loading,
    })));

    const { category } = useParams();
    const [products, setProducts] = useState([]);


    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap]);

    return (
        <div>
            <h2 className='category-title'>{category}</h2>
            {!loading ?
                (<>
                    <div className="category-Route-container">
                        { Array.isArray(products) &&
                            products.map((product => <ProductCard key={product.id} product={product} />))
                        }
                    </div>
                </>) :
               <Spinner/>
            }
        </div>
    );
}
export default Category;



//! using context API
// import { useContext, useEffect, useState } from 'react';
// import './category.styles.scss'
// import { useParams } from 'react-router-dom';
// import { CategoriesContext } from '../../contexts/category.context';
// import ProductCard from '../../components/product-card/product-card.component';

// const Category = () => {
//     const { categoriesMap } = useContext(CategoriesContext);
//     const { category } = useParams();
//     const [products, setProducts] = useState([]);
//     useEffect(() => {
//         setProducts(categoriesMap[category])
//     }, [category, categoriesMap]);
//     return (
//         <>
//         <h2 className='category-title'>{category}</h2>
//             <div className="category-Route-container">
//                 {
//                     products.map((product => <ProductCard key={product.id} product={product} />))
//                 }
//             </div>
//         </>
//     );
// }
// export default Category;