import { Button } from "antd";
import { useContext, useState } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import MovieCard from "../MovieCard/MovieCard";
import MoviesPagination from "../MoviesPagination/MoviesPagination";
import "./moviescontainer.css";

function MoviesContainer() {
  const { genres, movies } = useContext(GlobalContext);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const genreArray = Object.entries(genres).map(([id, name]) => ({ id, name }));

  const filterMoviesByGenre = (movie) => {
    return !selectedGenre || movie.genre_ids.includes(selectedGenre);
  };

  return (
    <div className="movies-container">
      <div className="filters-button">
        {genreArray.map((genre) => (
          <Button
            className="genres-button"
            key={genre.id}
            onClick={() => setSelectedGenre(parseInt(genre.id))}
            type={selectedGenre === parseInt(genre.id) ? "primary" : "default"}
          >
            {genre.name}
          </Button>
        ))}
        <Button
          className="genres-button"
          onClick={() => setSelectedGenre(null)}
          type={!selectedGenre ? "primary" : "default"}
        >
          Tüm Filmler
        </Button>
      </div>
      <div className="movies-list">
        {movies.filter(filterMoviesByGenre).map((movie) => (
          <MovieCard key={movie.id} id={movie.id} {...movie} />
        ))}
      </div>
      <MoviesPagination />
    </div>
  );
}

export default MoviesContainer;
