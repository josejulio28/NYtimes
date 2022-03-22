import React, { useState } from "react";
import "./Searchbar.css";
const SearchBar = ({ searchTerm }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchTerm(text);
  };
  return (
    <>
      <form className="form_searchabr" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a word or phrase"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchBar;
