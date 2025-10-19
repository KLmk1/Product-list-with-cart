import styles from './menupage.module.css';
import ProductList from './ProductList/ProductList';

export default function MenuPage() {
  return (
        <>
            <div className={styles.layout}>
                <main>
                    <ProductList />
                </main>
            </div>
        </>
    );
}