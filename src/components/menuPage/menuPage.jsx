import styles from './menupage.module.css';
import ProductList from './ProductList/ProductList';

export default function MenuPage() {
  return (
        <>
            <div className={styles.layout}>
                <header className={styles.header}>
                    <h1>Desserts</h1>
                </header>

                <main>
                    <ProductList />
                </main>
            </div>
        </>
    );
}