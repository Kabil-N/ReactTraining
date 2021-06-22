import { useEffect } from "react";
import { useState } from "react";
import MovieDetails from "./MovieDetails";
import "./MovieList.css";
import "./GenreList.css";
function MovieList(props) {
  const [movieList, setMovieList] = useState([]);
  const [error, isError] = useState(true);
  const [movieId, setMovieId] = useState("");
  const [movie, setMovie] = useState("");
  const [page, setPage] = useState(0);
  const [more, setMore] = useState(10);
  useEffect(() => {
    fetch(
      `https://data-imdb1.p.rapidapi.com/movie/by${props.by}/${props.val}/`,
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
        //console.log(response[`Movies ${props.genre}`]);
        // setMovieList(response);
      })
      .then((response) => {
        let array = response[`Movies ${props.index}`];
        setMovieList(array);
        isError(false);
        setMovie(array[0].title);
        setMovieId(array[0].imdb_id);
        // setPage((i)=>i+1);
      })
      .catch((err) => {
        console.error(err);
        isError(true);
      });
  }, [props.by, props.val, props.index]);
  if (movieList === undefined || error) {
    return <div>Select any genre or year</div>;
  }
  const prevPageHandler = () => {
    if (page > 0) {
      setPage((i) => i - 1);
      setMovie(movieList[page - 1].title);
      setMovieId(movieList[page - 1].imdb_id);
    }
  };
  const nextPageHandler = () => {
    if (page < movieList.length - 1) {
      setPage((i) => i + 1);
      setMovie(movieList[page + 1].title);
      setMovieId(movieList[page + 1].imdb_id);
    }
  };
  const listHandler = (i, e) => {
    setMovieId(e.imdb_id);
    setMovie(e.title);
    setPage(i + 1);
  };
  return (
    <div>
      <h4></h4>
      <table className="table">
        <tr>
          <td className="list" valign="top">
            <ul>
              {movieList.slice(0, more).map((e, i) => {
                return (
                  <li>
                    <a
                      href="#"
                      onClick={() => {
                        listHandler(i, e);
                      }}
                    >
                      {e.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <button className="more" onClick={() => setMore((i) => i + 10)}>
              More...
            </button>
          </td>
          <td className="movie" valign="top">
            <MovieDetails val={movieId} movie={movie} />
            <button className="btn" onClick={prevPageHandler}>
              Previous
            </button>
            <div className="next">
              <button className="nxt" onClick={nextPageHandler}>
                Next
              </button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}
/**/
export default MovieList;
