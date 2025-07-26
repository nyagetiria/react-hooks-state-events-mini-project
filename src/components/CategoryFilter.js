import React from "react";

const CategoryFilter = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-btn ${selectedCategory === category ? "selected" : ""}`}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;