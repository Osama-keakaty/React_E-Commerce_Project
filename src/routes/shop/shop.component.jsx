import { Route, Routes } from 'react-router-dom'
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from '../category/category.component';

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview />}/>
            {/* //TODO you have to path the name of component in or our case 'category' */}
                <Route path=':category' element={<Category />} />
        </Routes>
    );

}

export default Shop;