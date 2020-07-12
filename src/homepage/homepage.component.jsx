import React from "react";
import "./homepage.styles.scss";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage">
        <div className="homepage__menu">
          <div className="homepage__content">
            <h1 className="homepage__content__title">HATS</h1>
            <p className="homepage__content__subtitle">SHOP NOW</p>
          </div>
        </div>

        <div className="homepage__menu">
          <div className="homepage__content">
            <h1 className="homepage__content__title">JACKETS</h1>
            <p className="homepage__content__subtitle">SHOP NOW</p>
          </div>
        </div>

        <div className="homepage__menu">
          <div className="homepage__content">
            <h1 className="homepage__content__title">SNEAKERS</h1>
            <p className="homepage__content__subtitle">SHOP NOW</p>
          </div>
        </div>

        <div className="homepage__menu">
          <div className="homepage__content">
            <h1 className="homepage__content__title">WOMENS</h1>
            <p className="homepage__content__subtitle">SHOP NOW</p>
          </div>
        </div>

        <div className="homepage__menu">
          <div className="homepage__content">
            <h1 className="homepage__content__title">MENS</h1>
            <p className="homepage__content__subtitle">SHOP NOW</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
