import React, { Components, useEffect, useState } from "react";

const BreweryInfo = ({ index, name, city, breweryType, phone, address }) => {
    return(
        <tr className="main-list" key={index}>
            <th>{name}</th> 
            <th>{city}</th>
            <th>{breweryType}</th>
            <th>{phone}</th>
            <th>{address}</th>
        </tr>
    )
};
  
export default BreweryInfo;