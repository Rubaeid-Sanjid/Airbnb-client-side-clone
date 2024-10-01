
import './App.css'
import CardsSection from './Components/CardsSection'
import FilteringBar from './Components/FilteringBar'
import Navbar from './Components/Navbar'
import SearchBar from './Components/SearchBar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <FilteringBar></FilteringBar>
      <CardsSection></CardsSection>
    </>
  )
}

export default App
