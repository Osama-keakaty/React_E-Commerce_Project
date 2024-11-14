import ProductCard from "../product-card/product-card.component";
import './category-preview.styles.scss'
import { useNavigate } from "react-router-dom";
const CategoryPreview = ({ title, category }) => {
    const navigate = useNavigate()
    const changethePath= (title) =>{
        navigate(title)
    } 
    return (

        <div className="category-preview-container" key={title}>
            <h2>
                <span className="title" onClick={()=> changethePath(title)}>
                    {title.toUpperCase()}
                </span>
            </h2>
            <div className="preview">
                {
                    category.map(
                        (product, i) =>
                            i < 4 ? (
                                <ProductCard
                                    key={product.id}
                                    product={product} />
                            ) : null
                    )
                }
            </div>
        </div>
    );
}

export default CategoryPreview;
