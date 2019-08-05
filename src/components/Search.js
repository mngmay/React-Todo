import React from "react";

const Search = props => {
  return (
    <input
      type="text"
      name="search"
      placeholder="Search"
      onChange={props.handleChanges}
      className="search-field"
    />
  );
};

export default Search;
