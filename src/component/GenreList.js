import { useEffect } from "react";
import { useState } from "react";
import MovieList from "./MovieList";
import Load from "./Loader";
import "./GenreList.css";
function GenreList() {
  const [genres, setGenres] = useState([]);
  const [by, setby] = useState("");
  const [val, setVal] = useState("");
  const [index, setIndex] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  // const [error,setError]=useState(false);
  useEffect(() => {
    fetch("https://data-imdb1.p.rapidapi.com/genres/", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "b184d67371msh8b3cd5e22e0bcc5p142e66jsn19570dc5f5b3",
        "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
      },
    })
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((response) => {
        // console.log(response.Genres);
        setGenres(response.Genres);
      })
      .catch((err) => {
        console.error(err);
        // setError(true);
      });
  }, []);
  
  const getMoviesByGenre = (e) => {
    setVal(e.target.value);
    // alert(e.target.value);
    setIndex(e.target.value);
    setby("Gen");
    setGenre(e.target.value);
  };
  const getMoviesByYear = (e) => {
    setVal(e.target.value);
    // alert(e.target.value);
    setIndex(e.target.value);
    setby("Year");
    setYear(e.target.value);
  };
  const onFilter = () => {
    setby("Year");
    setIndex(`${year}--${genre}`);
    setVal(`${year}/byGen/${genre}`);
  };
  const arr = [];
  for (var i = 1982; i <= 2021; i++) {
    arr.push(i);
  }
  return (
    <div className="">
      <h1>Genres</h1>
      <select
        className="slct"
        onChange={(e) => {
          getMoviesByGenre(e);
        }}
      >
        <option value="Select any Genre">Select any Genre</option>
        {genres.map((e) => (
          <option value={e.genre}>{e.genre}</option>
        ))}
      </select>
      &nbsp;&nbsp;
      <select
        className="slct"
        onChange={(e) => {
          getMoviesByYear(e);
        }}
      >
        <option value="Select any Year">Select any Year</option>
        {arr.map((e) => (
          <option value={e}>{e}</option>
        ))}
      </select>
      &nbsp;&nbsp;&nbsp;
      <button className="btn" onClick={onFilter}>
        filter
      </button>
      {/* {genres.length===0 && <Load/>} */}
      <MovieList by={by} val={val} index={index} />
    </div>
  );
}

export default GenreList;
