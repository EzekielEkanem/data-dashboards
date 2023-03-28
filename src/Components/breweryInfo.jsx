import React, { Components, useEffect, useState } from "react";

const BreweryInfo = ({ index, name, city, breweryType, phone, address }) => {
    return(
        <li className="main-list" key={index}>
            Name: {name}, City: {city}, Brewery Type: {breweryType}, 
            Phone Number: {phone}, Address: {address} 
        </li>
    )
};
  
export default BreweryInfo;