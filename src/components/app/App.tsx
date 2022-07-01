import React, { MouseEventHandler, useState } from 'react';
import FetchApi from '../fetchApi/FetchApi';
import Navbar from '../navbar/Navbar';

function App() {
  const [searchedCity, setSearchedCity] = useState('');

  const searchCityHandler = (e: React.MouseEvent, _searchedCity: string) => {
    e.preventDefault();
    setSearchedCity(_searchedCity);
  }

  return (
    <div className="App">
      <Navbar />
      <FetchApi />
    </div>
  );
}

export default App;
