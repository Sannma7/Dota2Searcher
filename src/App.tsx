import React, { useState } from 'react';
import './App.css';
import { itemFilter } from './servies/ItemFilter';
import { heroFilter } from './servies/HeroFilter';
import { SearchResults } from './components/SearchResults';
import { SearchBar } from './components/SearchBar';

export const App: React.FC = () => {

  const [filteredItemResult, setFilteredItemResult] = useState(itemFilter(""));
  const [filteredHeroResult, setFilteredHeroResult] = useState(heroFilter(""));
  const [keyword, setKeyword] = useState("")
  const [searchMode, setSearchMode] = useState("item");
  let fliterResult;

  const handleFilterTextChange = () => {
    if (searchMode === "item") setFilteredItemResult(itemFilter(keyword));
    if (searchMode === "hero") setFilteredHeroResult(heroFilter(keyword));
    console.log(keyword);
  }

  const handleSearchModeChange = () => {
    if (searchMode === "item") {
      setSearchMode("hero");
      setFilteredHeroResult(heroFilter(keyword));
    }
    if (searchMode === "hero") {
      setSearchMode("item");
      setFilteredHeroResult(heroFilter(keyword));
    }

  }

  if (searchMode === "item") {
    fliterResult = <SearchResults results={filteredItemResult} mode={searchMode} />
  }
  if (searchMode === "hero") {
    fliterResult = <SearchResults results={filteredHeroResult} mode={searchMode} />
  }


  return (
    <body>
      <SearchBar
        handleFilterTextChange={handleFilterTextChange}
        handleSearchModeChange={handleSearchModeChange}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      {fliterResult}
    </body>
  );

};

export default App;
