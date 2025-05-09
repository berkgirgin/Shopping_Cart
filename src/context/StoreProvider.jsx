import { useContext, createContext, useState } from "react";
import { fetchStoreData } from "../data/fetchStoreData";
import { formatToTwoDecimals } from "../utilities/formatToTwoDecimals";

const shoppingCartContext = createContext();

function useStore() {
  return useContext(shoppingCartContext);
}

function StoreProvider({ children }) {
  const allProductsList = fetchStoreData();

  function getProductsByCategory(category) {
    if (category === "all") {
      return allProductsList;
    }

    const filteredProductsList = allProductsList.filter(
      (product) => product.category === category
    );

    return filteredProductsList;
  }

  function getProductsBySearchQuery(searchQuery) {
    const query = searchQuery.toLowerCase();

    return allProductsList.filter((product) => {
      const fieldsToSearch = [
        product.title,
        // product.description,
        product.category,
      ]
        .join(" ")
        .toLowerCase();

      return fieldsToSearch.includes(query);
    });
  }

  const [currentCart, setCurrentCart] = useState([]);

  const cart = {
    currentCart,
    getTotalCartCount,
    getTotalPriceSum,
    getItemPriceSum,
    addToCart,
    increaseCartQuantity,
    decreaseCartQuantity,
    getItemQuantity,
    resetCartQuantity,
  };

  function getTotalCartCount() {
    // returns the total amount of items on the cart
    let totalCount = 0;
    for (let i = 0; i < currentCart.length; i++) {
      totalCount = totalCount + currentCart[i].quantity;
    }

    return totalCount;
  }

  function getTotalPriceSum() {
    let priceSum = 0;

    for (let i = 0; i < currentCart.length; i++) {
      let currentItem = currentCart[i];
      let itemPrice = currentItem.price * currentItem.quantity;
      priceSum = priceSum + itemPrice;
    }

    return priceSum;
  }

  function getItemPriceSum(itemID) {
    let priceSum = 0;

    const itemToFind = currentCart.find((item) => item.id === itemID);
    if (itemToFind == null) {
      throw new Error("item does not exist in Cart");
    }

    let itemPrice = itemToFind.price * itemToFind.quantity;
    priceSum = priceSum + itemPrice;

    return priceSum;
  }

  function addToCart(itemID) {
    const itemToFind = currentCart.find((item) => item.id === itemID);
    if (itemToFind != null) {
      throw new Error("this is already in Cart!");
    }

    increaseCartQuantity(itemID);
  }

  function increaseCartQuantity(itemID) {
    const itemToFind = currentCart.find((item) => item.id === itemID);

    if (itemToFind == null) {
      const itemToAdd = allProductsList.find((item) => item.id === itemID);
      setCurrentCart([...currentCart, { ...itemToAdd, quantity: 1 }]);
    } else {
      setCurrentCart(
        currentCart.map((item) => {
          if (item.id === itemID) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        })
      );
    }

    console.log(currentCart);
  }

  function decreaseCartQuantity(itemID) {
    const itemToFind = currentCart.find((item) => item.id === itemID);

    if (itemToFind == null) {
      return;
    } else if (itemToFind.quantity <= 1) {
      setCurrentCart(currentCart.filter((item) => item.id !== itemID));
    } else {
      setCurrentCart(
        currentCart.map((item) => {
          if (item.id === itemID) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        })
      );
    }
  }

  function resetCartQuantity(itemID) {
    setCurrentCart(currentCart.filter((item) => item.id !== itemID));
  }

  function getItemQuantity(itemID) {
    const itemToFind = currentCart.find((item) => item.id === itemID);

    if (itemToFind == null) {
      return 0;
    } else {
      return itemToFind.quantity;
    }
  }

  return (
    <>
      <shoppingCartContext.Provider
        value={{
          allProductsList,
          getProductsByCategory,
          getProductsBySearchQuery,
          cart,
        }}
      >
        {children}
      </shoppingCartContext.Provider>
    </>
  );
}

export { StoreProvider, useStore };
