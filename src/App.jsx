import React, { Components, useEffect, useState } from 'react';
import BreweryInfo from "./Components/breweryInfo";
import BreweryChart from "./Components/BreweryChart";
import { Input } from "semantic-ui-react";
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [numList, setNumList] = useState()
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [numFilteredResults, setNumFilteredResults] = useState(0);
  const [micro, setMicro] = useState(0);
  const [nano, setNano] = useState(0);
  const [regional, setRegional] = useState(0);
  const [brewpub, setBrewpub] = useState(0);
  const [large, setLarge] = useState(0);
  const [planning, setPlanning] = useState(0);
  const [bar, setBar] = useState(0);
  const [contract, setContract] = useState(0);
  const [proprietor, setProprietor] = useState(0);
  const [closed, setClosed] = useState(0);

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
  };

  const setTypes = () => {
    const micro = list.filter((lst) => 
      lst.brewery_type.toLowerCase() == "micro"
    )
    setMicro(micro.length)
    const nano = list.filter((lst) => 
      lst.brewery_type.toLowerCase() == "nano"
    )
    setNano(nano.length)
    const regional = list.filter((lst) => 
      lst.brewery_type.toLowerCase() == "regional"
    )
    setRegional(regional.length)
    const brewpub = list.filter((lst) => 
      lst.brewery_type.toLowerCase() == "brewpub"
    )
    setBrewpub(brewpub.length)
    const large = list.filter((lst) => 
      lst.brewery_type.toLowerCase() == "large"
    )
    setLarge(large.length)
    const planning = list.filter((lst) => 
      lst.brewery_type.toLowerCase() == "planning"
    )
    setPlanning(planning.length)
    const bar = list.filter((lst) => 
      lst.brewery_type.toLowerCase() == "bar"
    )
    setBar(bar.length)
    const contract = list.filter((lst) => 
      lst.brewery_type.toLowerCase() == "contract"
    )
    setContract(contract.length)
    const proprietor = list.filter((lst) => 
      lst.brewery_type.toLowerCase() == "proprietor"
    )
    setProprietor(proprietor.length)
    const closed = list.filter((lst) => 
      lst.brewery_type.toLowerCase() == "closed"
    )
    setClosed(closed.length)
  }
      

  const selectTypes = (type) => {
    if (searchInput.length > 0) {
      const filteredData = filteredResults.filter((brewery) => 
      brewery.brewery_type.toLowerCase() == type
    )
      setFilteredResults(filteredData)
      setNumFilteredResults(filteredData.length)
    } else {
      const filteredData = list.filter((brewery) => 
      brewery.brewery_type.toLowerCase() == type
    )
    setList(filteredData)
    setNumFilteredResults(filteredData.length)
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
    setNumList(list.length)
  }, []);

  return (
    <div className='App'>
      <div className='App-sidebar'>
          <h2 className='Header'>Filter By Brewery Types: </h2>
          <ul>
            <li className='Menu-item'>
              <button className='btn' onClick={() => selectTypes("micro")}>Micro</button>
            </li>
            <li className='Menu-item'>
              <button className='btn' onClick={() => selectTypes("nano")}>Nano</button>
            </li>
            <li className='Menu-item'>
              <button className='btn' onClick={() => selectTypes("regional")}>Regional</button>
            </li>
            <li className='Menu-item'>
              <button className='btn' onClick={() => selectTypes("brewpub")}>Brewpub</button>
            </li>
            <li className='Menu-item'>
              <button className='btn' onClick={() => selectTypes("large")}>Large</button>
            </li>
            <li className='Menu-item'>
              <button className='btn' onClick={() => selectTypes("planning")}>Planning</button>
            </li>
            <li className='Menu-item'>
              <button className='btn' onClick={() => selectTypes("bar")}>Bar</button>
            </li>
            <li className='Menu-item'>
              <button className='btn' onClick={() => selectTypes("contract")}>Contract</button>
            </li>
            <li className='Menu-item'>
              <button className='btn' onClick={() => selectTypes("proprietor")}>Proprietor</button>
            </li>
            <li className='Menu-item'>
              <button className='btn' onClick={() => selectTypes("closed")}>Closed</button>
            </li>
          </ul>
        </div>
      <div className='App-row'>
        <div className='Card'>
          <h2>Total Number of Brewery Companies</h2>
          {numList > 0 ? <p>{numList}</p> : null}
          <button className='btn' onClick={() => setNumList(list.length)}>
            Click to view
          </button>
        </div>
        <div className='Card'>
          {searchInput.length > 0 ?
            <div>
              <h2>Number of Brewery Companies</h2>
              <p>{numFilteredResults}</p>
            </div> :
            <div>
              <h2>Number of Brewery Companies</h2>
              {numList > 0 ? <p>{numList}</p> : null}
            </div>
          }
        </div>
          <div className='Card'>
            <h2>Number of Companies by types</h2>
            <button className='btn' onClick={setTypes}>Click to View</button>
            {micro > 0 ? <p>Micro: {micro}</p> : null}
            {nano > 0 ? <p>Nano: {nano}</p> : null}
            {regional > 0 ? <p>Regional: {regional}</p> : null}
            {brewpub > 0 ? <p>Brewpub: {brewpub}</p> : null}
            {large > 0 ? <p>Large: {large}</p> : null}
            {planning > 0 ? <p>Planning: {planning}</p> : null}
            {bar > 0 ? <p>Bar: {bar}</p> : null}
            {contract > 0 ? <p>Contract: {contract}</p> : null}
            {proprietor > 0 ? <p>Proprietor: {proprietor}</p> : null}
            {closed > 0 ? <p>Closed: {closed}</p> : null}
          </div>
      </div>
      <div>
        <button className='btn' onClick={setTypes}>Click to View Graphs</button>
        { micro > 0 ? <BreweryChart 
          micro={micro}
          nano={nano}
          regional={regional}
          brewpub={brewpub}
          large={large}
          planning={planning}
          bar={bar}
          contract={contract}
          proprietor={proprietor}
          closed={closed}
        /> : null }
      </div>
        <div className='App-row'>
          <div className='List'>
            <input className='filter'
            type="text"
            placeholder="Search..."
            onChange={(inputString) => searchItems(inputString.target.value)}
            />
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>City</th>
                      <th>Brewery Type</th>
                      <th>Phone</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
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
                      ) : list && list.map((brewery, index) => 
                      <BreweryInfo
                        index={index}
                        name={brewery.name}
                        city={brewery.city}
                        breweryType={brewery.brewery_type}
                        phone={brewery.phone}
                        address={brewery.address_1}
                      /> ) }
                  </tbody>
                </table>
          </div>
        </div>
    </div>
  )
}

export default App
