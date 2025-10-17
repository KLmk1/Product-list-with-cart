import ProductCard from "../ProductCard/ProductCard";
import products from "./products.json";

/**
 * Simple ProductList component
 * - expects a local products.json (array of product objects)
 * - expects a ProductCard component that accepts product props (id, title, price, image, etc.)
 */

const ProductList = () => {
    if (!Array.isArray(products) || products.length === 0) {
        return <div className="product-list empty">No products available.</div>;
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id ?? product.title} {...product} />
            ))}
        </div>
    );
};

export default ProductList;