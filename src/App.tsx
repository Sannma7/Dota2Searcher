import React, { useState } from 'react';
import './App.css';
import { itemFilter } from './servies/ItemFilter';
import { heroFilter } from './servies/HeroFilter';
import { SearchResults } from './components/SearchResults';
import { SearchBar } from './components/SearchBar';

export const App: React.FC = () => {

  const [filteredResult, setFilteredResult] = useState(itemFilter(""));

  const handleFilterTextChange = (e: string) => {
    setFilteredResult(itemFilter(e));
  }

  return (
    <body>
      <SearchBar handleFilterTextChange={handleFilterTextChange} />
      <SearchResults items={filteredResult} />
    </body>
  );
};

export default App;
