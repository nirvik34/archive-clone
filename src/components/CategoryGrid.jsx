import React from "react";
import "./CategoryGrid.css";

const categories = [
  { name: "Texts", color: "#A370F7", label: "Literature" },
  { name: "Movies", color: "#FFC857", label: "Film & Video" },
  { name: "Software", color: "#FF8C94", label: "Apps & Games" },
  { name: "Audio", color: "#76C7C0", label: "Music & Podcasts" },
];

const CategoryGrid = ({ onCategoryClick }) => {
  return (
    <div className="grid-container">
      {categories.map((cat, i) => (
        <div
          key={i}
          className="grid-item"
          style={{ border: `3px solid ${cat.color}`
}}
          onClick={() => onCategoryClick(cat.name.toLowerCase())}
        >
          <div className="grid-item-label">{cat.label}</div>
          <div className="grid-item-name">{cat.name}</div>
          <button className="grid-item-btn">Explore</button>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
