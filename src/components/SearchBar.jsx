import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ handleChange, value }) => {
  // const [searchInput, setSearchInput] = useState("");

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Seach"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default SearchBar;
