import { useStore } from "../context/StoreProvider";
import { CartItemCard } from "../components/CartItemCard";
import { formatToTwoDecimals } from "../utilities/formatToTwoDecimals";

import classes from "../styles/CartPage.module.css";
import paymentOptionsImg from "../assets/images/payment_options_image.png";

function CartPage() {
  const store = useStore();
  const cart = store.cart;
  const currentCart = cart.currentCart;

  const cartItemsCards = currentCart.map((item, index) => {
    return <CartItemCard key={item.id} item={item} />;
  });

  const totalCartCount = cart.getTotalCartCount();

  return (
    <>
      {/* <div className="cart-main-container">
        <div className="cart-page-header-container"></div>
        <div className="cart-item-cards-container"></div>
        <div className="checkout-container"></div>
      </div> */}

      {/* <h1>Cart Page</h1> */}
      <div className={`${classes["cart-main-container"]}`}>
        <div className={`${classes["cart-page-header-container"]}`}>
          <div className={`${classes["cart-page-title"]}`}>
            Your Shopping Cart
          </div>
          <div className={`${classes["cart-page-count-status"]}`}>
            {totalCartCount} items
          </div>
        </div>

        <div className={`${classes["cart-item-cards-container"]}`}>
          {cartItemsCards}
        </div>

        <div className={`${classes["checkout-container"]}`}>
          <div className={`${classes["checkout-header"]}`}>
            <div>Estimated Total</div>
            <div>$ {formatToTwoDecimals(cart.getTotalPriceSum())}</div>
          </div>

          <button className={`${classes["checkout-button"]}`}>
            Proceed to checkout
          </button>
          <div className={`${classes["payment-options-image-container"]}`}>
            <img src={paymentOptionsImg} alt="payment options" />
          </div>
        </div>
      </div>
    </>
  );
}

export { CartPage };
