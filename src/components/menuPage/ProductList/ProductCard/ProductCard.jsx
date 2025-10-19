import styles from "./ProductCard.module.css";
import QuantitySpoiler from "./QuantitySpoiler/QuantitySpoiler";

const ProductCard = ({ item }) => {
  return (
    <article className={styles.card}>
      <div className={styles.imgwrapper}>
        <QuantitySpoiler item={item} />
      </div>
      <div className={styles.info}>
        <p className={styles.category}>{item.category}</p>
        <h4 className={styles.title}>{item.name}</h4>
        <p className={styles.price}>${item.price.toFixed(2)}</p>
      </div>
    </article>
  );
};

export default ProductCard;
