import React, { useState } from "react";
import "./Masonry.css";
export default function Masonry(props) {
  return (
    <div style={{ columns: props.columnCount }}>
      {props.imageUrls.map((img, i) => (
        <img
          src={img}
          key={i}
          alt=" for photos"
          className="images"
          style={{ padding: props.gap / 1 }}
        />
      ))}
    </div>
  );
}
