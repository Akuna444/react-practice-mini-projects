import React, { useState } from "react";

export const ProductsContext = React.createContext({
  products: [
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ],
  toggleFav: (id) => {},
});

const ProductsContextProvider = (props) => {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const toggleFavourite = (productId) => {
    setProductsList((currentProdState) => {
      const prodIndex = currentProdState.findIndex((p) => p.id === productId);
      const newFavStatus = !currentProdState[prodIndex].isFavorite;
      const updatedProducts = [...currentProdState];
      updatedProducts[prodIndex] = {
        ...currentProdState[prodIndex],
        isFavorite: newFavStatus,
      };
      console.log(updatedProducts);
      return updatedProducts;
    });
  };
  console.log(productsList);
  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFav: toggleFavourite }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
