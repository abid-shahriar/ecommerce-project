import React from "react";
import { withRouter } from "react-router-dom";
import "./homepage-menu.styles.scss";

const HomepageMenu = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div
    className={`directory__menu ${size}`}
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    <div
      className="directory__content"
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <h1 className="directory__content__title">{title}</h1>
      <p className="directory__content__subtitle">SHOP NOW</p>
    </div>
  </div>
);

export default withRouter(HomepageMenu);
