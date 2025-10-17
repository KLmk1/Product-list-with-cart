import styles from "./ProductCard.module.css";

const ProductCard = ({ item }) => {
  return (
    <article className={styles.card}>
      <img
        src={item.image.thumbnail}
        alt={item.name}
        className={styles.image}
      />
      <div className={styles.info}>
        <h3 className={styles.title}>{item.name}</h3>
        <p className={styles.category}>{item.category}</p>
        <p className={styles.price}>${item.price.toFixed(2)}</p>
      </div>
    </article>
  );
};

export default ProductCard;
