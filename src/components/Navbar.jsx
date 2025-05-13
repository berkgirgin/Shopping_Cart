import { NavLink } from "react-router-dom";
import { useStore } from "../context/StoreProvider";

import classes from "../styles/Navbar.module.css";
import appLogoImage from "../assets/images/berlin_bear_logo.png";

// className={`${classes["enter-class-name"]}`}

function NavBar() {
  const store = useStore();
  const cart = store.cart;

  const totalItemsInCart = cart.getTotalCartCount();
  const shoppingCartLogoHTML = (
    <div className={`${classes["shoppingbasket"]}`}>
      <div className={`${classes["top"]}`}></div>
      <div className={`${classes["bottom"]}`}></div>
      <div className={`${classes["left"]}`}></div>
      <div className={`${classes["right"]}`}></div>
      <div className={`${classes["basketitems"]}`}>{totalItemsInCart}</div>
    </div>
  );

  return (
    <>
      <div className={`${classes["navbar-main-container"]}`}>
        <div className={`${classes["logo-container"]}`}>
          <NavLink to="/">
            {/* <div className={`${classes["navbar-title"]}`}>
              BERK'S FAKE STORE
            </div> */}
            <div className={`${classes["navbar-logo-image-container"]}`}>
              <img src={appLogoImage} alt="" />
            </div>
          </NavLink>
        </div>

        <div className={`${classes["navbar-links-container"]}`}>
          <div className={`${classes["home-container"]}`}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              Home
            </NavLink>
          </div>
          <div className={`${classes["home-container"]}`}>
            <NavLink
              to="/store"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              Shop
            </NavLink>
          </div>
          <div className={`${classes["cart-link-container"]}`}>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              Cart
            </NavLink>
            <div className={`${classes["cart-count"]}`}>
              {/* <b> {totalItemsInCart}</b> */}
              {shoppingCartLogoHTML}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { NavBar };
