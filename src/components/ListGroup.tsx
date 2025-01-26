// list made using bootstraps List Group

import { useState } from "react";

// https://getbootstrap.com/docs/5.3/components/list-group/
export default function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // Tells react that component state will change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Benefit of function: can have diff messages dependant on conditions
  const getMessage = () => {
    items.length == 0 && <p>No items found</p>;
  };

  return (
    <>
      <h1>Portfolio</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
