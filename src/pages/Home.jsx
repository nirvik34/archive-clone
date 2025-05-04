import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryGrid from "../components/CategoryGrid";
import Navbar from "../components/Navbar";
import "./Home.css"

const Home = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    if (!query.trim()) return;

    const url = `https://archive.org/advancedsearch.php?q=${encodeURIComponent(
      query
    )}&fl[]=identifier,title,description,mediatype&rows=10&page=1&output=json`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setResults(data.response.docs);
    } catch (err) {
      console.error("Search failed:", err);
    }
  };

  const handleCategoryClick = async (mediaType) => {
    const url = `https://archive.org/advancedsearch.php?q=mediatype:${mediaType}&fl[]=identifier,title,description,mediatype&rows=10&page=1&output=json`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setResults(data.response.docs);
    } catch (err) {
      console.error("Category filter failed:", err);
    }
  };

  return (
    <>
      <Navbar />
      <section className="hero-section">
      <h1 className="hero-heading">
      Internet Archive <span className="typing">Rewind</span>
      </h1>

        <p className="hero-subtext">
          Preserving millions of free texts, movies, software, and more.
        </p>
        <SearchBar onSearch={handleSearch} results={results} />
        <CategoryGrid onCategoryClick={handleCategoryClick} />
      </section>
    </>
  );
};

export default Home;
