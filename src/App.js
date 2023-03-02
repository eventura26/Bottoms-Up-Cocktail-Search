import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import CocktailList from './components/CocktailList';
import FilteredCocktails from './components/FilteredCocktails';
import SearchResults from './components/SearchResults';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [userOfAge, setUserOfAge] = useState(false);

  const ofAge = () => {
    setUserOfAge(true);
    console.log(userOfAge)
    localStorage.setItem('isUserOfAge', JSON.stringify(true));

  };

  const notOfAge = () => {
    setUserOfAge(false);
    localStorage.setItem('isUserOfAge', JSON.stringify(false));
  };


  useEffect(() => {
    const isUserOfAge = JSON.parse(localStorage.getItem('isUserOfAge'));
    if (isUserOfAge !== null) {
      setUserOfAge(isUserOfAge);
      console.log(userOfAge)
    }
  }, []);

  return userOfAge ? (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktails" element={<CocktailList />} />
          <Route path="/cocktails/:id" element={<FilteredCocktails />} />
          <Route path="/searchresults/:name" element={<SearchResults />} />
        </Routes>
      </header>
    </div>
  ) : (
    <div className='age-wrap'>
    <div className="age-verification">
      <h2>You must be 21 or over to enter!</h2>
      <div>
        <button onClick={ofAge}>
          I am 21 or over
        </button>
        <button onClick={notOfAge}>
          <a href="https://www.responsibility.org/prevent-underage-drinking">
            I am under 21
          </a>
        </button>
      </div>
    </div>
    </div>
  );
}

export default App;
