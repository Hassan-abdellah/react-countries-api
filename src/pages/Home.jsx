import axios from "axios";
import React, { useEffect, useState } from "react";
import CountriesGrid from "../components/countriesgrid/CountriesGrid";
import Header from "../components/header/Header";
import Loader from "../components/loader/Loader";
import PillContinent from "../components/pillcontinet/PillContinent";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Where in the world | Home";
    const getCountries = async () => {
      setIsLoading(true);
      try {
        const res = await axios("https://restcountries.com/v3.1/all");
        const data = res.data;
        // console.log(data.slice(0,10));
        setCountries(data);
      } catch (err) {
        console.log(err.message);
      }
      setIsLoading(false);
    };
    getCountries();
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="home">
      <Header />
      <PillContinent />
      <CountriesGrid countries={countries} />
    </div>
  );
};

export default Home;
