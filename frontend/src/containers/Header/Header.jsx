import React from 'react';
import { NavBar } from "../../components/"
import "./styles.css";

const Header = ({handleAirline}) => {
  return (
    <div className='header'>
      <NavBar handleAirline={handleAirline} />
    </div>
  )
}

export default Header