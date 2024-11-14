import { useContext, useEffect, useState } from 'react';
import './category.styles.scss'
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/category.context';
import ProductCard from '../../components/product-card/product-card.component';
const Category = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap]);
    return (
        <>
        <h2 className='category-title'>{category}</h2>
            <div className="category-Route-container">
                {
                    products.map((product => <ProductCard key={product.id} product={product} />))
                }
            </div>
        </>
    );
}
export default Category;