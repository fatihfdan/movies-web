import { Button } from "antd";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import MovieCard from "../MovieCard/MovieCard";
import MoviesPagination from "../MoviesPagination/MoviesPagination";
import "./moviescontainer.css";

function MoviesContainer() {
  const {
    genres,
    movies,
    handleGenreClick,
    selectedGenres,
    setSelectedGenres,
  } = useContext(GlobalContext);

  useEffect(() => {
    // Bileşen her yüklendiğinde seçili kategorileri sıfırlayın
    setSelectedGenres([]);
  }, []);

  const genreArray = Object.entries(genres).map(([id, name]) => ({
    id: parseInt(id),
    name,
  }));

  return (
    <div className="movies-container">
      <div className="filters-button">
        {genreArray.map((genre) => (
          <Button
            className={`genres-button ${
              selectedGenres.includes(genre.id) ? "selected" : ""
            }`}
            key={genre.id}
            onClick={() => handleGenreClick(genre.id)}
          >
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
