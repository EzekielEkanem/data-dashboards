import React, { Components, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BreweryInfo = ({ index, name, city, breweryType, phone, address }) => {
    return(
        <tr className="main-list" key={index}>
            <Link
                  to={`/BreweryDetail/${name}`}
                  key={name}
                >
                  <th>{name}</th>
            </Link> 
            <th>{city}</th>
            <th>{breweryType}</th>
            <th>{phone}</th>
            <th>{address}</th>
        </tr>
    )
};
  
export default BreweryInfo;