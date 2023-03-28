import React, { Components, useEffect, useState } from 'react';
import BreweryInfo from "./Components/breweryInfo";
import { Input } from "semantic-ui-react";
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [numFilteredResults, setNumFilteredResults] = useState(0);
  const [numFilteredTypes, setNumFilteredTypes] = useState({
    micro: 0,
    nano: 0,
    regional: 0,
    brewpub: 0,
    large: 0,
    planning: 0,
    bar: 0,
    contract: 0,
    proprietor: 0,
    closed: 0
  });

  const searchItems = searchValue => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = list.filter((lst) => 
        (lst.name.toLowerCase()
          .includes(searchValue.toLowerCase())) || 
          (lst.city.toLowerCase()
          .includes(searchValue.toLowerCase())) ||
          (lst.brewery_type.toLowerCase()
          .includes(searchValue.toLowerCase()))
      )
      setFilteredResults(filteredData);
      setNumFilteredResults(filteredData.length)
    } else {
      setFilteredResults(list);
      setNumFilteredResults(list.length);
    }
    setTypes();
  };

  const setTypes = () => {
    if (filteredResults.length === 0) {
      for (let i = 0; i < (list.length); i++) {
        if (list[i].brewery_type == "micro") {
          setNumFilteredTypes(numFilteredResults.micro += 1)
        }
        else if (list[i].brewery_type == "nano") {
          setNumFilteredTypes(numFilteredResults.nano += 1)
        }
        else if (list[i].brewery_type == "regional") {
          setNumFilteredTypes(numFilteredResults.regional += 1)
        }
        else if (list[i].brewery_type == "brewpub") {
          setNumFilteredTypes(numFilteredResults.brewpub += 1)
        }
        else if (list[i].brewery_type == "large") {
          setNumFilteredTypes(numFilteredResults.large += 1)
        }
        else if (list[i].brewery_type == "planning") {
          setNumFilteredTypes(numFilteredResults.planning += 1)
        }
        else if (list[i].brewery_type == "bar") {
          setNumFilteredTypes(numFilteredResults.bar += 1)
        }
        else if (list[i].brewery_type == "contract") {
          setNumFilteredTypes(numFilteredResults.contract += 1)
        }
        else if (list[i].brewery_type == "proprietor") {
          setNumFilteredTypes(numFilteredResults.proprietor += 1)
        }
        else {
          setNumFilteredTypes(numFilteredResults.closed += 1)
        }
      }
    }
    else {
      for (let i = 0; i < (list.length); i++) {
        if (filteredResults[i].brewery_type == "micro") {
          setNumFilteredTypes(numFilteredResults.micro += 1)
        }
        else if (filteredResults[i].brewery_type == "nano") {
          setNumFilteredTypes(numFilteredResults.nano += 1)
        }
        else if (filteredResults[i].brewery_type == "regional") {
          setNumFilteredTypes(numFilteredResults.regional += 1)
        }
        else if (filteredResults[i].brewery_type == "brewpub") {
          setNumFilteredTypes(numFilteredResults.brewpub += 1)
        }
        else if (filteredResults[i].brewery_type == "large") {
          setNumFilteredTypes(numFilteredResults.large += 1)
        }
        else if (filteredResults[i].brewery_type == "planning") {
          setNumFilteredTypes(numFilteredResults.planning += 1)
        }
        else if (filteredResults[i].brewery_type == "bar") {
          setNumFilteredTypes(numFilteredResults.bar += 1)
        }
        else if (filteredResults[i].brewery_type == "contract") {
          setNumFilteredTypes(numFilteredResults.contract += 1)
        }
        else if (filteredResults[i].brewery_type == "proprietor") {
          setNumFilteredTypes(numFilteredResults.proprietor += 1)
        }
        else {
          setNumFilteredTypes(numFilteredResults.closed += 1)
        }
      }
    }
  }

  useEffect(() => {
    const fetchAllCoinData = async () => {
      const response = await fetch( 
        "https://api.openbrewerydb.org/v1/breweries?by_state=new_york&per_page=200"
      );
      const json = await response.json();
      setList(json);
    };
    fetchAllCoinData().catch(console.error);
    setNumFilteredResults(list.length)
    setTypes();
  }, []);

  return (
    <div className='whole-page'>
      <h1>New York State Breweries</h1>
      <div>
        <div>
          <h2>Number of Brewery Companies</h2>
          <p>{numFilteredResults}</p>
        </div>
        <div>
          <h2>Number of Companies by types</h2>
          <p>{numFilteredTypes}</p>
        </div>
        <div>

        </div>
      </div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(inputString) => searchItems(inputString.target.value)}
      />
        {searchInput.length > 0
          ? filteredResults.map((brewery, index) => 
              <BreweryInfo
                index={index}
                name={brewery.name}
                city={brewery.city}
                breweryType={brewery.brewery_type}
                phone={brewery.phone}
                address={brewery.address_1}
              />
          ):
          list && list.map((brewery, index) => 
            <BreweryInfo
              index={index}
              name={brewery.name}
              city={brewery.city}
              breweryType={brewery.brewery_type}
              phone={brewery.phone}
              address={brewery.address_1}
            />
        )}
    </div>
  )
}

export default App
