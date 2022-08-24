import React from 'react'
import './pillcontinent.css';
import { useSelector,useDispatch } from "react-redux";
import {IoCloseOutline} from 'react-icons/io5';
import { removeContinent } from '../../features/continents/continentSlice';

const PillContinent = () => {
    const {continents} = useSelector((state) => state.continent);
    const dispatch = useDispatch();
    return (
    <div className="pills wrapper">
        {continents.map((continent,index) => (
            <div className="pill" key={index}>
                <span>{continent}</span>
                <IoCloseOutline onClick={() => dispatch(removeContinent(index))}/>
            </div>
        ))}
    </div>
  )
}

export default PillContinent