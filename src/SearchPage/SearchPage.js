import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "./Searchbar";
import { ArticlesList } from "./ArticlesList";
import "./SearchPage.css";
import { selectArticles, setArticlesAction } from "../redux";

const SearchPage = () => {
  const [term, setTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // dont forget to use put your key on your page and put it here as an argument
        const res = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=rMnnwxlW2Sw1eluF4mTGAf0cXg9GhGDq`
        );
        const articles = await res.json();
        console.log(articles.response.docs);
        setSearchResults(articles.response.docs);
        dispatch(setArticlesAction(articles.response.docs));
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();
  }, [term, dispatch]);

  return (
    <div className="Container">
      <h1>New York Times Searcher</h1>
      <p className="description">
        In this page you are able to find relevant article from the New York
        Times according to your search. By default, if you don't search for a
        word, it will give you ten interesting articles. To read the article on
        the New York Times website, click on the tilte.
      </p>
      <SearchBar searchTerm={(text) => setTerm(text)} />
      <ArticlesList articles={searchResults} />
      {/* {articles && <ArticlesList articles={articles} />} */}
    </div>
  );
};

export default SearchPage;
