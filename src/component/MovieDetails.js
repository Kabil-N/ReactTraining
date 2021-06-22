import { useEffect } from "react";
import { useState } from "react";
import Movie from "./Movie";
import Load from "./Loader";
function MovieDetails(props) {
  const [movie, setMovie] = useState({});
  const [error, isError] = useState(true);
  const [Loader,setLoader]=useState(true);
  useEffect(() => {
    fetch(`https://data-imdb1.p.rapidapi.com/movie/id/${props.val}/`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "b184d67371msh8b3cd5e22e0bcc5p142e66jsn19570dc5f5b3",
        "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
      },
    })
      .then((response) => {
        return response.json();
        //console.log(response[`Movies ${props.genre}`]);
        // setMovieList(response);
      })
      .then((response) => {
        // setMovieList(response[`Movies ${props.index}`]);
        //console.log(response);
        isError(false);
        setLoader(false);
        setMovie(response[props.movie]);
        // console.log(response[props.movie]);
      })
      .catch((err) => {
        console.error(err);
        isError(true);
        setLoader(false);
      });
  }, [props.val, props.movie]);
  if (movie === undefined || error) {
    return <div>{Loader && <Load/>}</div>
  }

  return (
    <div>
      {/* {Loader && <Load/>}
      <Load/> */}
      <Movie prop={movie} />
    </div>
  );
}

export default MovieDetails;
