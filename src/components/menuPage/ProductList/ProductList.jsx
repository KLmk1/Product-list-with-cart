import ProductCard from "./ProductCard/ProductCard";
import data from "../../../data/products.json";
/**
 * Simple ProductList component
 * - expects a local products.json (array of product objects)
 * - expects a ProductCard component that accepts product props (id, title, price, image, etc.)
 */

const ProductList = () => {
    return (
        <div className="product-list">
            {data.map((item, index) => (
                <ProductCard key={index} item={item} />
            ))}
        </div>
    );
};

export default ProductList;