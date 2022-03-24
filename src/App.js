import logo from './logo.svg';
import './App.css';
import Autocomplete from "react-autocomplete";
import "react-autocomplete-input/dist/bundle.css";
import { useEffect, useState } from 'react';
import { useSearch } from "./Hooks";

function App() {
  const[value,setValue]=useState('');

  const{articles,status,error}=useSearch(value);

  return (
    <>
    <p>Status:{status}</p>
    <p>Error:{error}</p>
      <Autocomplete
        getItemValue={(item) => item.label}
        items={articles}
        renderItem={(item, isHighlighted) => (
          <div style={{ background: isHighlighted ? "lightgray" : "white" }}>
            {item.label}
          </div>
        )}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSelect={(value) => setValue(value)}
      />
    </>
  );
}

export default App;
