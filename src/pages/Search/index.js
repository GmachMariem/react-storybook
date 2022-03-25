import React from "react";
import { useSearch } from "../../Hooks";
import Container from "../../components/Container";
import AutoComplete from "../../components/AutoComplete";
import ListItem from "../../components/ListItem";
import { useHistory } from "react-router";
 import { useParams,useLocation } from "react-router-dom";
const Search = ({...rest}) => {
 
    const location = useLocation();
    const searchl=location.search;
    console.log(searchl);
    const params = new URLSearchParams(location.search);  
    const query = params.get("query");
  


  /*const search = props.location.search;
  const params = new URLSearchParams(search);
  const query = params.get("query");
*/
  const { articles, status } = useSearch(query, 50);

  return (
   <div>
      <Container>
        {({ searchValue, onSearchChange, articles }) => (
          <AutoComplete
            searchValue={searchValue}
            onSearchChange={onSearchChange}
            articles={articles}
          />
        )}
      </Container>

      {!articles.length && status === "SUCCESS" ? (
        <h3>No articles for query: {query}</h3>
      ) : (
        articles.map((article) => <ListItem {...article} key={article.id} />)
      )}
    </div>
  );
};

export default Search;
