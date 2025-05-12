import { useNavigate } from "react-router-dom";

import classes from "../styles/HomePage.module.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`${classes["homepage-main-container"]} homepage-main-container`}
      >
        <div className={`${classes["homepage-titles-container"]}`}>
          <div className={`${classes["homepage-big-title"]}`}>
            FakeBear Shop
          </div>
          <div className={`${classes["homepage-small-title"]}`}>
            ALL YOU NEED FROM BERLIN
          </div>
        </div>
        {/* <h1>Home Page</h1> */}
        <button
          className={`${classes["homepage-shop-now-button"]}`}
          onClick={() => {
            navigate("/store");
          }}
        >
          SHOP NOW
        </button>
      </div>
    </>
  );
}

export { HomePage };
