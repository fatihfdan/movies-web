import { Button } from "antd";
import { useContext, useState } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import MovieCard from "../MovieCard/MovieCard";
import MoviesPagination from "../MoviesPagination/MoviesPagination";
import "./moviescontainer.css";

function MoviesContainer() {
  const { genres, movies } = useContext(GlobalContext);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const genreArray = Object.entries(genres).map(([id, name]) => ({
    id: parseInt(id),
    name,
  }));

  const handleGenreClick = (genreId) => {
    setSelectedGenre(genreId === selectedGenre ? null : genreId); // Seçilen kategoriyi güncelle
  };

  const filteredMovies = selectedGenre
    ? movies.filter((movie) => movie.genre_ids.includes(selectedGenre))
    : movies;

  return (
    <div className="movies-container">
      <div className="filters-button">
        {genreArray.map((genre) => (
          <Button
            className={`genres-button ${
              selectedGenre === genre.id ? "selected" : ""
            }`}
            key={genre.id}
            onClick={() => handleGenreClick(genre.id)} // Tıklama işlevi ekle
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
