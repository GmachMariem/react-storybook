import logo from './logo.svg';
import './App.css';
import Autocomplete from "react-autocomplete";
import "react-autocomplete-input/dist/bundle.css";
import { Children, useEffect, useState } from 'react';
import { useSearch, useDebounce, useSearchForm } from "./Hooks";
import Input from './components/Input/index'

function App() {
  const{searchValue,onSearchChange}=useSearchForm()

  const { articles } = useSearch(useDebounce(searchValue, 500));

  return (
    <>
      <Autocomplete
        getItemValue={(item) => item.label}
        renderInput={Input}
        inputProps={{ placeholder: "Input a search term" }}
        items={articles}
        renderMenu={(Children, value, style) => {
          return articles && articles.length ?
          <div style={{ ...style }} className="input-suggestions">
            {Children}
            <a href={`/search?query=${value}`} className="search-link">
              See all results
            </a>
          </div>
          :<></>
        }}
        renderItem={(item, isHighlighted) => (
          <div style={{ background: isHighlighted ? "lightgray" : "white" }}>
            {item.label}
          </div>
        )}
        value={searchValue}
        onChange={onSearchChange}
     
      />
    </>
  );
}

export default App;
