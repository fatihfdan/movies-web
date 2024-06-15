import { Button, Col, Row, Spin } from "antd";
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
    loading,
  } = useContext(GlobalContext);

  useEffect(() => {
    setSelectedGenres([]);
  }, []);

  const genreArray = Object.entries(genres).map(([id, name]) => ({
    id: parseInt(id),
    name,
  }));

  return (
    <div className="movies-container">
      <Row className="filters-button">
        {genreArray.map((genre) => (
          <Col key={genre.id}>
            <Button
              className={`genres-button ${
                selectedGenres.includes(genre.id) ? "selected" : ""
              }`}
              onClick={() => handleGenreClick(genre.id)}
            >
              {genre.name}
            </Button>
          </Col>
        ))}
      </Row>

      {loading ? (
        <div className="loading-spinner">
          <Spin size="large" />
        </div>
      ) : (
        <>
          <Row gutter={12} className="movies-container-list">
            {movies.map((movie) => (
              <Col xs={24} sm={12} md={12} lg={8} xl={4} key={movie.id}>
                <MovieCard id={movie.id} {...movie} />
              </Col>
            ))}
          </Row>
          <div className="movies-container-pagination">
            <MoviesPagination />
          </div>
        </>
      )}
    </div>
  );
}

export default MoviesContainer;
