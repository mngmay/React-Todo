import React from "react";

const Search = props => {
  return (
    <input
      type="text"
      name="search"
      placeholder="Search"
      onChange={props.handleChanges}
    />
  );
};

export default Search;
