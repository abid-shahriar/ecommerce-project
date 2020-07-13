import React from "react";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, name, imageUrl }) => (
          <div key={id}>{name}</div>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
