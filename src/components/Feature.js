import React from "react";

function Feature({ imgSrc, title, children }) {
  return (
    <div className="feature-item">
      <img src={imgSrc} alt="Feature Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{children}</p>
    </div>
  );
}

export default Feature;
