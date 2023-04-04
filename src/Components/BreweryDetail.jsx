import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BreweryDetail = () => {
    let { name } = useParams();
    const [fullDetails, setFullDetails] = useState([]);

    useEffect(() => {
        const getBreweryDetail = async () => {
          const details = await fetch(
            `https://api.openbrewerydb.org/v1/breweries?by_name=${name}&per_page=1`
        );

          const detailsJson = await details.json();
        
          setFullDetails(detailsJson);
        };
        getBreweryDetail().catch(console.error);
    }, []);
    console.log({fullDetails})

    return (
        <div>
            {fullDetails.length > 0 ?
                <div>
                    <h1>{fullDetails[0].name}</h1>
                    <h3>Brewery Type: {fullDetails[0].brewery_type}</h3>
                    <div>
                        <p>Address: {fullDetails[0].address_1}</p>
                        <p>City: {fullDetails[0].city}</p>
                        <p>State: {fullDetails[0].state}</p>
                        <p>Postal Code: {fullDetails[0].postal_code}</p>
                        <p>Country: {fullDetails[0].country}</p>
                        <p>Longitude: {fullDetails[0].longitude}</p>
                        <p>Laatitude: {fullDetails[0].latitude}</p>
                        <p>Phone: {fullDetails[0].phone}</p>
                        <p>Website: <a href={fullDetails[0].website_url} target="_blank">{fullDetails[0].website_url}</a></p>
                    </div>
                </div> :
                null
            }
            
        </div>
    )
}

export default BreweryDetail;