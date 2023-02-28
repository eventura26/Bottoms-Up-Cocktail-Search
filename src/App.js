import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import CocktailList from './components/CocktailList';
import FilteredCocktails from './components/FilteredCocktails';
import SearchResults from './components/SearchResults';
import { Route, Routes } from 'react-router';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cocktails" element={<CocktailList/>}/>
          <Route path="/cocktails/:id" element={<FilteredCocktails/>}/>        
          <Route path="/searchresults/:name" element={<SearchResults/>}/>
        </Routes>
        
      </header>
    </div>
  );
}

export default App;
