import React, { useState } from "react";

const data = [
  "apple",
  "orange",
  "apricot",
  "durian",
  "water melon",
  "water chestnut",
];

const Filter = () => {
  const [filterText, setFilterText] = useState("");

  const handleFilterTextChange = (e) => {
    setFilterText(e.target.value);
  };

  return (
    <div data-testid="filter">
      <h3>Filter</h3>
      <input aria-label="filter-text" onChange={handleFilterTextChange} />
      {data
        .filter((text) => text.indexOf(filterText) >= 0)
        .map((data) => (
          <div key={data}>{data}</div>
        ))}
    </div>
  );
};

export default Filter;
