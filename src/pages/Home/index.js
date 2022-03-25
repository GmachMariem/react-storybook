import React from "react";
import AutoComplete from "../../components/AutoComplete";
import Container from "../../components/Container";
import './styles.scss'
const Home=()=>{
    return (
      <div className="home-page-container">
        <img src="./google.png" alt="logo" />

        <Container>
          {({ searchValue, onSearchChange, articles }) => (
            <AutoComplete
              searchValue={searchValue}
              onSearchChange={onSearchChange}
              articles={articles}
            />
          )}
        </Container>
      </div>
    );
}

export default Home

