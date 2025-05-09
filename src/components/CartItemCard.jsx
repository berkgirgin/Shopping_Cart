import { useStore } from "../context/StoreProvider";
import { useImage } from "../utilities/useImage";
import { formatToTwoDecimals } from "../utilities/formatToTwoDecimals";

import classes from "../styles/CartItemCard.module.css";
// import placeholderImg from "../assets/images/no_image_available.png";

function CartItemCard({ item }) {
  const store = useStore();
  const cart = store.cart;

  const itemImage = useImage({
    src: item.image,
    alt: item.title,
    loaderClassName: classes["loader"],
  });

  const itemQuantityInCart = cart.getItemQuantity(item.id);
  const itemSumText = `$ ${formatToTwoDecimals(item.price)} x ${
    item.quantity
  } = $ ${formatToTwoDecimals(cart.getItemPriceSum(item.id))}`;

  return (
    <>
      <>
        <div className={`${classes["cart-item-card-container"]}`}>
          {/* <h3>Cart Item Card</h3> */}
          {/* add image here */}
          <div className={`${classes["cart-item-left-container"]}`}>
            <div className={`${classes["cart-item-image-container"]}`}>
              {itemImage}
            </div>
          </div>
          <div className={`${classes["cart-item-right-container"]}`}>
            <div className={`${classes["cart-item-title"]}`}>{item.title}</div>

            <div className={`${classes["cart-buttons-and-price-container"]}`}>
              <div className={`${classes["cart-item-price"]}`}>
                {itemSumText}
              </div>
              <div className={`${classes["cart-add-and-remove-buttons"]}`}>
                <button
                  onClick={() => {
                    cart.decreaseCartQuantity(item.id);
                  }}
                >
                  -
                </button>
                <div className={`${classes["cart-current-item-quantity"]}`}>
                  {itemQuantityInCart}
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
                className={`${classes["cart-remove-from-cart-button"]}`}
                onClick={() => {
                  cart.resetCartQuantity(item.id);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export { CartItemCard };
