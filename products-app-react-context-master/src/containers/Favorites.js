import React, { useContext } from "react";
import { ProductsContext } from "../context/products-context";

import FavoriteItem from "../components/Favorites/FavoriteItem";
import "./Products.css";

const Favorites = () => {
  const favoriteProducts = useContext(ProductsContext).products.filter(
    (p) => p.isFavorite
  );
  console.log(favoriteProducts);
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
