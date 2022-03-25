import React from "react";
import Autocomplete from "react-autocomplete";
import "react-autocomplete-input/dist/bundle.css";
import "./styles.scss"
import Input from "../Input";

const AutoComplete = ({ articles, searchValue, onSearchChange }) => {
    return (
      <>
        <Autocomplete
          getItemValue={(item) => item.label}
          renderInput={Input}
          inputProps={{ placeholder: "Input a search term" }}
          items={articles}
          renderMenu={(Children, value, style) => {
            return articles && articles.length ? (
              <div style={{ ...style }} className="input-suggestions">
                {Children}
                <a href={`/search?query=${value}`} className="search-link">
                  See all results
                </a>
              </div>
            ) : (
              <></>
            );
          }}
          renderItem={(item, isHighlighted) => (
            <div
              className="input-suggestions-item"
              style={{ background: isHighlighted ? "lightgray" : "white" }}
            >
              {item.label}
            </div>
          )}
          value={searchValue}
          onChange={onSearchChange}
        />
      </>
    );
};
export default AutoComplete;