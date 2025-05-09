import { useState } from "react";
import { useStore } from "../context/StoreProvider";
import { useImage } from "../utilities/useImage";
import { formatToTwoDecimals } from "../utilities/formatToTwoDecimals";

import classes from "../styles/StoreItemCard.module.css";
import placeholderImg from "../assets/images/no_image_available.png";

function StoreItemCard({ item }) {
  const store = useStore();
  const cart = store.cart;
  // const [imageLoaded, setImageLoaded] = useState(false);

  const itemImage = useImage({
    src: item.image,
    alt: item.title,
    loaderClassName: classes["loader"],
  });

  const itemQuantityInCart = cart.getItemQuantity(item.id);

  let cartButtonsToDisplay;

  if (itemQuantityInCart === 0) {
    cartButtonsToDisplay = (
      <>
        <button
          className={`${classes["store-add-to-cart-button"]}`}
          onClick={() => {
            cart.addToCart(item.id);
          }}
        >
          Add to Cart
        </button>
      </>
    );
  } else {
    cartButtonsToDisplay = (
      <>
        <div className={`${classes["store-add-and-remove-buttons"]}`}>
          <button
            onClick={() => {
              cart.decreaseCartQuantity(item.id);
            }}
          >
            -
          </button>
          <div className={`${classes["store-current-item-quantity"]}`}>
            <div>{itemQuantityInCart}</div>
          </div>
          <button
            onClick={() => {
              cart.increaseCartQuantity(item.id);
            }}
          >
            +
          </button>
        </div>

        <button
          className={`${classes["store-remove-from-cart-button"]}`}
          onClick={() => {
            cart.resetCartQuantity(item.id);
          }}
        >
          Remove from Cart
        </button>
      </>
    );
  }

  return (
    <>
      <div className={`${classes["store-item-card-container"]}`}>
        {/* <h3>Store Item Card</h3> */}

        <div className={`${classes["store-item-image-container"]}`}>
          {itemImage}
        </div>
        {/* <div>
          Category: <b>{item.category}</b>
        </div> */}
        <div className={`${classes["store-item-title"]}`}>{item.title}</div>
        <div className={`${classes["store-item-price-and-rating"]}`}>
          <div className={`${classes["store-item-price"]}`}>
            $ {formatToTwoDecimals(item.price)}
          </div>
          {/* <div>Rating: {item.rating.rate} / 5</div> */}
          <div
            className={`${classes["rating-stars-container"]}`}
            style={{ "--rating": item.rating.rate }}
          ></div>
        </div>

        <div className={`${classes["store-cart-buttons-container"]}`}>
          {cartButtonsToDisplay}
        </div>
      </div>
    </>
  );
}

export { StoreItemCard };
