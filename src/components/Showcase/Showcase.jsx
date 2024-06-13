// ShowcaseTrending.jsx
import { Col, Row } from "antd";
import MovieCard from "../MovieCard/MovieCard.jsx";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import "./showcase.css";

// eslint-disable-next-line react/prop-types
function Showcase({ title, API_URL, searchParamKey, searchParamValue }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const displayedMovies = movies.slice(0, 6);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setMovies(data.results.slice(0, 6)));
  }, []);

  const handleClick = () => {
    searchParams.set(searchParamKey, searchParamValue);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <Row className="showcase-row">
        <h1 className="showcase-title">{title}</h1>
      </Row>
      <Row className="showcase-row-end">
        <h3 className="showcase-view-all" onClick={handleClick}>
          View all
          <ArrowRightOutlined className="showcase-icon" />
        </h3>
      </Row>
      <Row className="showcase-content">
        {displayedMovies.map((movie) => (
          <Col
            key={movie.id}
            xs={24}
            sm={12}
            md={8}
            lg={8}
            xl={4}
            className="movie-card-col"
          >
            <MovieCard id={movie.id} {...movie} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Showcase;
