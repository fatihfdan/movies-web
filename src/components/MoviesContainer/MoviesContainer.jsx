import { Button } from "antd";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import MovieCard from "../MovieCard/MovieCard";
import MoviesPagination from "../MoviesPagination/MoviesPagination";
import "./moviescontainer.css";

function MoviesContainer() {
  const { genres, movies } = useContext(GlobalContext);

  const genreArray = Object.entries(genres).map(([id, name]) => ({ id, name }));

  return (
    <div className="movies-container">
      <div className="filters-button">
        {genreArray.map((genre) => (
          <Button className="genres-button" key={genre.id}>
            {genre.name}
          </Button>
        ))}
      </div>
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} id={movie.id} {...movie} />
        ))}
      </div>
      <div className="movies-container-pagination">
        <MoviesPagination />
      </div>
    </div>
  );
}

export default MoviesContainer;
