import { Outlet, useSearchParams, NavLink } from "react-router-dom";
import { useStore } from "../context/StoreProvider";
import { StoreItemCard } from "../components/StoreItemCard";

import classes from "../styles/StorePage.module.css";

// className={`${classes["store-item-card-container"]}`}

function StorePage({ sortCategory }) {
  const store = useStore();

  const [searchParams, setSearchParams] = useSearchParams({ productQuery: "" });
  const productQuery = searchParams.get("productQuery") || "";

  let productsList;

  if (productQuery != "") {
    productsList = store.getProductsBySearchQuery(productQuery);
  } else {
    productsList = store.getProductsByCategory(sortCategory);
  }

  const storeItemsCards = productsList.map((product, index) => {
    return <StoreItemCard key={product.id} item={product} />;
  });

  function handleSearchbarInput(e) {
    const newQuery = e.target.value;
    setSearchParams({ productQuery: newQuery }, { replace: true });
  }

  const searchStatusInfo =
    productsList.length === 0 ? (
      <div className={`${classes["warning-red"]}`}>
        No Items Found for these keywords
      </div>
    ) : (
      <div>Displaying a total of {productsList.length} items</div>
    );

  return (
    <>
      <div className={`${classes["store-main-container"]}`}>
        <div className={`${classes["store-navbar-container"]}`}>
          <div className={`${classes["store-navbar-links-container"]}`}>
            <NavLink
              to="/store/category/all"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              All Collection
            </NavLink>
            <NavLink
              to="/store/category/men's_clothing"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              Men's Clothing
            </NavLink>
            <NavLink
              to="/store/category/jewelery"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              Jewelery
            </NavLink>
            <NavLink
              to="/store/category/electronics"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              Electronics
            </NavLink>
            <NavLink
              to="/store/category/women's_clothing"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              Women's Clothing
            </NavLink>
          </div>

          <div className={`${classes["store-title-and-searchbar-container"]}`}>
            {/* <h1>Store Page</h1> */}
            <div className={`${classes["store-searchbar-container"]}`}>
              <div className={`${classes["searchbar-container"]}`}>
                <input
                  type="text"
                  placeholder=" search items by keywords..."
                  onChange={(e) => handleSearchbarInput(e)}
                />
                <div className={`${classes["searchbar-status"]}`}>
                  <i>{searchStatusInfo}</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${classes["store-item-cards-container"]}`}>
          {storeItemsCards}
        </div>
      </div>
    </>
  );
}

export { StorePage };
