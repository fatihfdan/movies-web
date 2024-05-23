// ShowcaseHorror.jsx
import { useState, useEffect } from "react";
import { Col, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import MovieCard from "../MovieCard/MovieCard.jsx";
import { useSearchParams } from "react-router-dom";

function ShowcaseHorror() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_HORROR_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&sort_by=popularity.desc`;

    fetch(API_HORROR_URL)
      .then((response) => response.json())
      .then((data) => setMovies(data.results.slice(0, 6)));
  }, []);

  const handleClick = () => {
    searchParams.set("with_genres", "27");
    setSearchParams(searchParams);
  };

  return (
    <div>
      <Row className="showcase-row">
        <h1 className="showcase-title">Horror Movies</h1>
      </Row>
      <Row className="showcase-row-end">
        <h3 className="showcase-view-all" onClick={handleClick}>
          View all
          <ArrowRightOutlined className="showcase-icon" />
        </h3>
      </Row>
      <Row justify="center" gutter={[0, 24]} className="showcase-content">
        {movies.map((movie) => (
          <Col
            key={movie.id}
            xs={24}
            sm={12}
            md={8}
            lg={4}
            className="movie-card-col"
          >
            <MovieCard id={movie.id} {...movie} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ShowcaseHorror;
