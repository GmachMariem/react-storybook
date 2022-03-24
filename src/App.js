import logo from './logo.svg';
import './App.css';
import Autocomplete from "react-autocomplete";
import "react-autocomplete-input/dist/bundle.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const[value,setValue]=useState('');
  const[items,setItems]=useState([]);
useEffect(()=>{
  axios.get(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${value}`)
      .then((response)=>{
        const parsedResponse=[];
        for(let i=0; i < response.data[1].length;i++){
          parsedResponse.push({
            id: response.data[3][i],
            label: response.data[1][i],
          });
        }
        console.log(response);
      setItems(parsedResponse)
      })
      .catch((error)=>{
        console.log(error);
        debugger;

      })


},[value])
 
  return (
    <Autocomplete
      getItemValue={(item) => item.label}
      items={items}
      renderItem={(item, isHighlighted) => (
        <div style={{ background: isHighlighted ? "lightgray" : "white" }}>
          {item.label}
        </div>
      )}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onSelect={(value) => setValue(value)}
    />
  );
}

export default App;
