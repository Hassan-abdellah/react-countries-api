import React, { useState } from "react";
import "./dropdown.css";
import { useDispatch } from "react-redux";
import { VscChevronDown } from "react-icons/vsc";
import { addContinent } from "../../features/continents/continentSlice";
const Dropdown = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const dispatch = useDispatch();
  const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return (
    <div className="dropdown-container">
      <div
        className="dropdown-toggler"
        onClick={() => setIsDropDown(!isDropDown)}
      >
        <span>Filter by Region</span>
        <VscChevronDown />
      </div>
      <ul className={isDropDown ? "dropdown-items active" : "dropdown-items"}>
        {continents.map((continent, index) => (
          <li
            key={index}
            onClick={() => {
              setIsDropDown(false);
              dispatch(addContinent(continent));
            }}
          >
            <span>{continent}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
