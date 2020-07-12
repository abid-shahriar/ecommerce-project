import React from "react";
import "./homepage-menu.styles.scss";

const HomepageMenu = ({ title, imageUrl, size }) => (
  <div
    className={`directory__menu ${size}`}
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    <div className="directory__content">
      <h1 className="directory__content__title">{title}</h1>
      <p className="directory__content__subtitle">SHOP NOW</p>
    </div>
  </div>
);

export default HomepageMenu;
