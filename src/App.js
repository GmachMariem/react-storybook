import logo from './logo.svg';
import './App.css';

import Container from './components/Container';
import AutoComplete from "./components/AutoComplete";
const  App=()=> {
  return (
    <>
      <Container>
        {({ searchValue, onSearchChange, articles }) => (
          <AutoComplete
            articles={articles}
            onSearchChange={onSearchChange}
            searchValue={searchValue}
          ></AutoComplete>
        )}
      </Container>
    </>
  );
}

export default App;
