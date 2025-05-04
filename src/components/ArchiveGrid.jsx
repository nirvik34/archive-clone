import React, { useState, useEffect, useRef } from 'react';

const allItems = [/* Your archive data (objects with title, type, etc.) */];

const categories = ['All', 'Books', 'Movies', 'Software'];

export default function ArchiveGrid() {
  const [items, setItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        loadMore();
      }
    });

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.disconnect();
    };
  }, [loaderRef, items, selectedCategory]);

  const loadMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  const filteredItems = allItems.filter(item =>
    selectedCategory === 'All' ? true : item.type === selectedCategory
  );

  return (
    <div className="archive-container">
      <div className="filter-bar">
        <label htmlFor="filter">Filter: </label>
        <select
          id="filter"
          value={selectedCategory}
          onChange={e => {
            setSelectedCategory(e.target.value);
            setVisibleCount(8); // Reset count when changing filter
          }}
        >
          {categories.map(cat => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="grid">
        {filteredItems.slice(0, visibleCount).map((item, i) => (
          <div className="card" key={i}>
            <h3>{item.title}</h3>
            <p>Type: {item.type}</p>
          </div>
        ))}
      </div>

      <div ref={loaderRef} className="loader" />
    </div>
  );
}
