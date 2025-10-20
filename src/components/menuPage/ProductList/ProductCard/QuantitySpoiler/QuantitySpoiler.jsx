import { useCart } from "../../../../../useCart/useCart";
import styles from "./QuantitySpoiler.module.css";
import { useState } from "react";

export default function QuantitySpoiler({ item }) {
  const [isHovered, setIsHovered] = useState(false);
  const { updateQuantity, getTotalQty} = useCart();
  const quantity = getTotalQty(item.id);

  return (
    <>
      <img
        src={item.image.desktop}
        alt={item.name}
        className={styles.cardimage}
        style={{ borderColor: !isHovered && !quantity ? "rgba(0,0,0,0)" : "var(--red)" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />

      <div
        className={styles.overlay}
        style={{ backgroundColor: !isHovered && !quantity ? "white" : "var(--red)" }}
        tabIndex={0}
        aria-label="Cart actions"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles.spoilerwrapper}>
          {!isHovered && !quantity ? (
            <>
              <img
                src="/assets/images/icon-add-to-cart.svg"
                alt="cartadd"
                aria-hidden="true"
                className={styles.cartimg}
              />
              <h5 className={styles.spoiler}>Add to cart</h5>
            </>
          ) : (
            <div className={styles.actions}>
              <button
                className={styles.minbutton}
                aria-label="Remove item"
                onClick={() => updateQuantity(item, -1)}
              >
                <img
                  src="/assets/images/icon-decrement-quantity.svg"
                  alt=""
                  aria-hidden="true"
                />
              </button>
              <span className={styles.quantity}>{quantity}</span>
              <button
                className={styles.addbutton}
                aria-label="Add item"
                onClick={() => updateQuantity(item, 1)}
              >
                <img
                  src="/assets/images/icon-increment-quantity.svg"
                  alt=""
                  aria-hidden="true"
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
