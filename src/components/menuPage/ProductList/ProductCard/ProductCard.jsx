import React from "react";
import PropTypes from "prop-types";

/**
 * Simple product card showing image, name and cost.
 * File: /c:/Users/klima/Documents/JUNEPRJCTS/my-product-list/src/components/menuPage/ProductList/ProductCard/ProductCard.jsx
 */
const ProductCard = ({ image, name, cost, className = "", imgClassName = "", onClick }) => {
  const formattedCost =
    typeof cost === "number"
      ? new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(cost)
      : cost;

  return (
    <div className={`product-card ${className}`} onClick={onClick} role={onClick ? "button" : undefined}>
      <img src={image} alt={name} className={`product-card__img ${imgClassName}`} />
      <div className="product-card__body">
        <div className="product-card__name">{name}</div>
        <div className="product-card__cost">{formattedCost}</div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  cost: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  imgClassName: PropTypes.string,
  onClick: PropTypes.func,
};

ProductCard.defaultProps = {
  image: "",
  name: "Product",
  cost: 0,
  className: "",
  imgClassName: "",
  onClick: undefined,
};

export default ProductCard;