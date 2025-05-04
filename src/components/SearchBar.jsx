import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch, results }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Internet Archive..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="search-results">
        {results.map((item) => (
          <div key={item.identifier} className="search-result-card">
            <h3>{item.title?.slice(0, 60) || "Untitled"}</h3>
            {item.description && <p>{item.description.slice(0, 100)}...</p>}
            <a
              href={`https://archive.org/details/${item.identifier}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Archive.org
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
