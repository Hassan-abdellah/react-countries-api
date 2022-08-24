import React from 'react'
import './countrycard.css';
import {Link} from 'react-router-dom';
const CountryCard = ({country}) => {
  // console.log(country?.capital)
  console.log(typeof(country.population));

  // function to format the number of population with commas 

  const numberCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return (

    <Link to={`/country/${country.name.common}`}>
        <div className="card">
            <div className="country-image">
                <img src={country?.flags?.png} alt={country?.name?.common} />
            </div>
            <div className="country-info">
                <h2>{country?.name?.common}</h2>
                {/* <h4>Population: <span>{country?.population}</span></h4> */}
                <h4>Population: <span>{numberCommas(country?.population)}</span></h4>
                <h4>Region: <span>{country?.region}</span></h4>
                <h4>Capital: <span>{country.capital ? country.capital[0]:'N/A' }</span></h4>
                {/* <h4>Capital: <span>{country?.capital}</span></h4> */}
            </div>
        </div>
    </Link>
  )
}

export default CountryCard