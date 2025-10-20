import ProductCard from "./ProductCard/ProductCard";
import data from "../../../data/products.json";
import styles from "./ProductList.module.css";

const ProductList = () => {
    return (
        <>
        
            <header className={styles.header}>
                <h1 className={styles.listname}>Desserts</h1>
            </header>
            
            <ul className={styles.productlist}>
                {data.map((item, index) => (
                    <li className={styles.item} key={index}>
                        <ProductCard item={{ ...item, id: index}} />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ProductList;