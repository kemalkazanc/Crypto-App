import React, { useState } from "react";

const Table = ({ coinsData }) => {
  const [rangeNumber, setRangeNumber] = useState(100);
  const [orderBy, setOrderBy] = useState("");

  const tableHeader = [
    "Prix",
    "MarketCap",
    "Volume",
    "1h",
    "1j",
    "1s",
    "1m",
    "6m",
    "1y",
    "ATH",
  ];

  const handleRadioChange = (el) => {
    setOrderBy(orderBy === el ? el + "reverse" : el);
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <div className="range-container">
          <span>
            Top{" "}
            <input
              type="text"
              value={rangeNumber}
              onChange={(e) => setRangeNumber(e.target.value)}
            />
          </span>
          <input
            type="range"
            min="1"
            max="250"
            value={rangeNumber}
            onChange={(e) => setRangeNumber(e.target.value)}
          />
        </div>
        {/* <ul>
          {tableHeader.map((el) => (
            <li key={el}>
              <input
                type="radio"
                name="header-el"
                id={el}
                defaultChecked={
                  el === orderBy || el === orderBy + "reverse" ? true : false
                }
                onChange={() =>
                  if (orderBy === el) {
                    setOrderBy(el, "reverse")
                  } else {
                    setOrderBy(el);
                  }
                }
              />
              <label htmlFor={el}>{el}</label>
            </li>
          ))}
        </ul>*/}
      </div>
    </div>
  );
};

export default Table;
