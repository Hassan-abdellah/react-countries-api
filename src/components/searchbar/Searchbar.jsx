import React, { useState } from "react";
import "./searchbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Searchbar = () => {
  const [name,setName] = useState('');
  const navigate = useNavigate();
  const searchCountry = () => {
    if(name){
      navigate(`country/${name}`);
    }
  }
  return (
    <div className="searchbar-container">
      <input type="text" placeholder="Search for a country..." value={name} onChange={e => setName(e.target.value)}/>
      <AiOutlineSearch onClick={() => searchCountry()}/>
    </div>
  );
};

export default Searchbar;
