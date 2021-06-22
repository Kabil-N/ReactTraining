import "./Movie.css";
function Movie(props) {
  const { prop } = props;
  return (
    <div>
      <h2>
        {prop.title} {` (${prop.year})`}
      </h2>

      <table>
        <tr>
          <td rowspan="2">
            <img src={prop.image_url}></img>
          </td>
          <td className="td">
            <p>
              <b>Description :</b> {prop.description}
            </p>
          </td>
        </tr>
        <tr>
          <td className="td">
            <p>
              <b>Plot :</b> {prop.plot}
            </p>
          </td>
        </tr>
      </table>
      {/* <img src={prop.banner}></img> */}
      <h5>Released Date: {prop.release}</h5>
      <h5>LMDB Rating:{prop.rating}</h5>

      <h5>Content Rating :{prop.content_rating}</h5>
      <h5>
        Genres: {prop.gen !== undefined && prop.gen.map((e) => e.genre + " ,")}
      </h5>
      <p>Movie Length:{prop.movie_length} minutes</p>
      <p>Popularity: {prop.popularity}</p>
      <iframe src={prop.trailer}></iframe>
    </div>
  );
}

export default Movie;
