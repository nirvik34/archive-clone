import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import "./SearchResults.css";
import Navbar from "../components/Navbar";


const SearchResults = () => {

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q");

  const fetchResults = async (searchQuery) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `http://localhost:5000/api/search?q=${encodeURIComponent(searchQuery)}`
      );
      const data = await response.json();
      setResults(data.response.docs);
    } catch (err) {
      console.error("Error fetching search results:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchResults(query);
    }
  }, [query]);

  return (
    <div>
        <Navbar />

      <h1>Search Results</h1>
      <SearchBar />

      <div style={{ maxWidth: "800px", margin: "30px auto" }}>
        {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
        {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}

        {!loading && results.length === 0 && !error && (
          <p style={{ textAlign: "center" }}>
            No results found for <strong>{query}</strong>.
          </p>
        )}

        {results.map((item, index) => (
          <div key={index} className="grid-item">
            <div className="grid-item-icon">📄</div>
            <div className="grid-item-name">{item.title || "Untitled"}</div>
            <div className="grid-item-count">
              {item.creator ? `by ${item.creator}` : "Unknown Creator"}
            </div>
            <div style={{ fontSize: "14px", marginTop: "8px" }}>
              Type: <strong>{item.mediatype}</strong>
            </div>
            <a
              href={`https://archive.org/details/${item.identifier}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "10px",
                textDecoration: "none",
                color: "#0072c6",
              }}
            >
              View on Archive.org →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
