import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import CocktailList from './components/CocktailList';
import FilteredCocktails from './components/FilteredCocktails';
import SearchResults from './components/SearchResults';
import ExitPage from './components/ExitPage';
import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';

function App(){

let [userOfAge, setUserOfAge] = useState(false)


  let ofAge= () => {
    setUserOfAge(true)
  }

  let notOfAge= () => {
    setUserOfAge(false)
  }




  return userOfAge?(
       <div className="App">
      <header className="App-header">
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cocktails" element={<CocktailList/>}/>
          <Route path="/cocktails/:id" element={<FilteredCocktails/>}/>        
          <Route path="/searchresults/:name" element={<SearchResults/>}/>
          <Route path="/exit" element={<ExitPage />}/>
        </Routes>
        
      </header>
    </div>
         ):
<div className='age-verification'>
        <h2>You must be 21 or over to enter!</h2>
        <button onClick={ofAge}>I am 21 or over</button> 
        <button onClick={notOfAge}>I am under 21</button>
      </div>
      

       
}

export default App;
