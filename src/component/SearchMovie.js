import { useEffect, useState } from "react";
import MovieDetails from "./MovieDetails";
import "./SearchMovie.css";
function SearchMovie() {
  const [movieName, setMovieName] = useState("");
  const [search, setSearch] = useState("");
  const [found, isFound] = useState(false);
  const [suggestion, setSuggestion] = useState([]);
  const [move, setMove] = useState("");
  const [val, setVal] = useState("");
  useEffect(() => {
    fetch(
      `https://data-imdb1.p.rapidapi.com/movie/imdb_id/byTitle/${movieName}/`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "b184d67371msh8b3cd5e22e0bcc5p142e66jsn19570dc5f5b3",
          "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setSuggestion([...response.Result]);
        // console.log(response.Result[0].imdb_id);
        setSearch(response.Result[0].imdb_id);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [movieName]);
  const searchHandler = () => {
    isFound(true);
    setSuggestion([]);
    setMove(movieName);
    setVal(search);
    // console.log(search);
    // console.log(movieName);
  };
  const suggestionHandler = (e) => {
    setMovieName(e.target.value);
    isFound(false);
  };
  return (
    <div>
      <div className="wrap">
        <div className="search">
          <input
            className="searchTerm"
            type="text"
            placeholder="Type the movie name to search"
            onChange={suggestionHandler}
            value={movieName}
          />
          <button className="searchButton" onClick={searchHandler}>
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
      {suggestion.length > 0 && (
        <div className="suggestion">
          {suggestion.map((e) => (
            <p
              onClick={() => {
                setMovieName(e.title);
              }}
            >
              {e.title}
            </p>
          ))}
        </div>
      )}
      {suggestion.length === 0 && !found && <h4>Search a proper movie name</h4>}
      {<MovieDetails val={val} movie={move} />}
    </div>
  );
}

export default SearchMovie;
