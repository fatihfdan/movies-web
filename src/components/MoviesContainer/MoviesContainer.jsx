import { Button } from "antd";
import { useContext, useState } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import MovieCard from "../MovieCard/MovieCard";
import MoviesPagination from "../MoviesPagination/MoviesPagination";
import "./moviescontainer.css";

function MoviesContainer() {
  const { genres, movies } = useContext(GlobalContext);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const genreArray = Object.entries(genres).map(([id, name]) => ({
    id: parseInt(id),
    name,
  }));

  const handleGenreClick = (genreId) => {
    // Kategoriyi seçili kategoriler listesine ekle veya çıkar
    if (selectedGenres.includes(genreId)) {
      setSelectedGenres(selectedGenres.filter((id) => id !== genreId));
    } else {
      setSelectedGenres([...selectedGenres, genreId]);
    }
  };

  const filteredMovies = selectedGenres.length
    ? movies.filter((movie) =>
        selectedGenres.every((genreId) => movie.genre_ids.includes(genreId))
      )
    : movies;

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
        {filteredMovies.map((movie) => (
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
