// import { useContext } from "react";
// import { CategoriesContext } from '../../contexts/category.context';
import CategoryPreview from "../../components/category-preview/category-preview.component";
// import { useSelector } from "react-redux";
// import { selectCategories } from "../../store/category/categories.selector";

import { useCategoryStore } from "../../zustand-store/category/category.store";
import { useShallow } from "zustand/shallow";
const CategoriesPreview = () => {

    // const categoriesMap  = useSelector(selectCategories);
    const categoriesMap  = useCategoryStore(useShallow((state)=>state.categoriesMap));
    return (
        <>
            {
                Object.keys(categoriesMap).map(title =>(
                    <CategoryPreview key={title} title={title} category={categoriesMap[title]} />
                ))
            }
        </>
    );

}

export default CategoriesPreview;

//! using context API
// import { useContext } from "react";
// import { CategoriesContext } from '../../contexts/category.context';
// import CategoryPreview from "../../components/category-preview/category-preview.component";


// const CategoriesPreview = () => {

//     const { categoriesMap } = useContext(CategoriesContext);
//     return (
//         <>
//             {
//                 Object.keys(categoriesMap).map(title =>(
//                     <CategoryPreview key={title} title={title} category={categoriesMap[title]} />
//                 ))
//             }
//         </>
//     );

// }

// export default CategoriesPreview;