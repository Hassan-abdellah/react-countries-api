import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import "./country.css";
import { BsArrowLeft } from "react-icons/bs";
import Loader from "../../components/loader/Loader";
const Country = () => {
  const location = useLocation();
  const countryName = location.pathname.split("/")[2];
  const [country, setCountry] = useState({});
  const [borderCountries, setBorderCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // function to format the number of population with commas

  const numberCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    const getCountry = async () => {
      setIsLoading(true);
      try {
        const res = await axios(
          `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
        );
        const data = res.data;
        setCountry(data[0]);

        if (data[0].borders) {
          const res2 = await axios(
            `https://restcountries.com/v3.1/alpha?codes=${data[0].borders}`
          );
          setBorderCountries(res2.data.slice(0, 3));
        }
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    getCountry();
    document.title = `Where in the world | ${countryName}`;
  }, [countryName]);

  if (Object.keys(country).length === 0) {
    console.log("false");
  } else {
    console.log("true");
  }
  // console.log(country);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="country wrapper">
      {Object.keys(country).length === 0 ? (
        <Loader notfound="true" />
      ) : (
        <>
          <Link to="/" className="back-link">
            <BsArrowLeft />
            <span>Back</span>
          </Link>
          <div className="country-flex">
            <div className="country-left">
              <img src={country?.flags?.png} alt={country?.name?.common} />
            </div>
            <div className="country-right">
              <h2>{country?.name?.common}</h2>
              <div className="country-data">
                <div className="country-data-left">
                  <h4>
                    Native Name:{" "}
                    <span>
                      {country?.name &&
                        Object.values(country.name.nativeName)[0].common}
                    </span>
                  </h4>
                  <h4>
                    Population: <span>{numberCommas(country?.population)}</span>
                  </h4>
                  <h4>
                    Region: <span>{country?.region}</span>
                  </h4>
                  <h4>
                    Sub Region: <span>{country?.subregion}</span>
                  </h4>
                  <h4>
                    Capital:{" "}
                    <span>{country.capital ? country.capital : "N/A"}</span>
                  </h4>
                </div>
                <div className="country-data-right">
                  <h4>
                    Top Level Domain: <span>{country?.tld}</span>
                  </h4>
                  <h4>
                    Currencies:
                    {country?.currencies &&
                      Object.values(country.currencies).map(
                        (currency, index) => (
                          <span className="currency" key={index}>
                            {" "}
                            {currency.name}
                          </span>
                        )
                      )}
                  </h4>
                  <h4>
                    Languages:
                    {country.languages &&
                      Object.values(country.languages).map(
                        (language, index) => (
                          <span className="language" key={index}>
                            {" "}
                            {language}
                          </span>
                        )
                      )}
                  </h4>
                </div>
              </div>
              {borderCountries.length > 0 && (
                <h4>
                  Border Countries: <br />{" "}
                  {borderCountries.map((borderCountry, index) => (
                    // <span className="border-country" key={index}>{borderCountry?.name?.common}</span>
                    <Link
                      to={`/country/${borderCountry.name.common}`}
                      className="border-country"
                      key={index}
                    >
                      {borderCountry?.name?.common}
                    </Link>
                  ))}
                </h4>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Country;
