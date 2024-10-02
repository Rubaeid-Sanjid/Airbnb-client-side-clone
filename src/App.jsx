import { useState } from 'react'
import './App.css'
import CardsSection from './Components/CardsSection'
import FilteringBar from './Components/FilteringBar'
import Navbar from './Components/Navbar'
import SearchBar from './Components/SearchBar'

function App() {
// const [searchItem, setSearchItem] = useState(""); 
const [filterItem, setFilterItem] = useState(""); 

// const handleSearch = (searchData) => {
//   setSearch(searchData);
// };

// Handle the filter criteria change
const handleFilter = (filterData) => {
  setFilterItem(filterData);
};

  return (
    <>
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <FilteringBar filterItem={filterItem} handleFilter={handleFilter}></FilteringBar>
      <CardsSection filterItem={filterItem}></CardsSection>
    </>
  )
}

export default App
