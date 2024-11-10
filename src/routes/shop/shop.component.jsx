import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.styles.scss'
const Shop = () => {
    const { products } = useContext(ProductsContext);
    return (
        <div className="product-cards-container">
            {
                products.map(
                    ({ imageUrl, id, name, price }) =>

                        <ProductCard
                            key={id}
                            name={name}
                            imgURl={imageUrl}
                            price={price}
                        />
                )
            }
        </div>
    );

}

export default Shop;