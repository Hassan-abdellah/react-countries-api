import React from 'react'
import CountryCard from '../countrycard/CountryCard';
import './countriesgrid.css'
import {useSelector} from 'react-redux';
const CountriesGrid = ({countries}) => {
  const {continents} = useSelector((state) => state.continent);
  
  
  let filtered = []

  continents.forEach((continent) => {
    const filter = countries.filter((country) => country.region.includes(continent));
    filter.forEach((item) => {
      filtered.push(item);
    })

  })

  return (
    <div className='wrapper grid'>
        {
          filtered.length > 0 ? 
          filtered.map((country,index) => (
              <CountryCard country={country} key={index}/>
          ))
          :
          countries.slice(0,20).map((country,index) => (
              <CountryCard country={country} key={index}/>
          ))
        }
    </div>
  )
}

export default CountriesGrid