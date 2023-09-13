import React, { useState } from "react";
import "./searchbar.css";
export default function SearchBar(props) {
  const [searchData, setSearchData] = useState({ searchterm: "" });
  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
    console.log(e.target.value)
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    props.articlesearch(searchData.searchterm);
  };
  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <input className="searchBarInput"
        
          type="text"
          placeholder="Search by key words"
          name="searchterm"
          onChange={handleChange}
          value={searchData.searchterm}
        />
        <input className="searchButton" type="submit" value="Search" />
      </form>
    </div>
  );
}
