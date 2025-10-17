import styles from './menupage.module.css';
import ProductList from './ProductList/ProductList';

export default function menuPage() {
  return (
        <>
            <header className={styles.header}>
                <h1>Desserts</h1>
            </header>
            <ProductList />
        </>
    );
}