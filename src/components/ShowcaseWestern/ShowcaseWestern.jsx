// ShowcaseWestern.jsx
import { ArrowRightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { useSearchParams } from "react-router-dom";
import "./showcaseWestern.css";

function ShowcaseWestern() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_WESTERN_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=37&sort_by=popularity.desc`;

    fetch(API_WESTERN_URL)
      .then((response) => response.json())
      .then((data) => setMovies(data.results.slice(0, 6)));
  }, []);

  const handleClick = () => {
    searchParams.set("with_genres", "37");
    setSearchParams(searchParams);
  };

  return (
    <div>
      <Row
        className="showcase-western"
        style={{
          alignItems: "start",
          marginBottom: "-35px",
          marginTop: "50px",
        }}
      >
        <h1
          style={{
            marginBottom: "5px",
            marginLeft: "55px",
            fontSize: "24px",
          }}
        >
          Western Movies
        </h1>
      </Row>
      <Row
        style={{
          justifyContent: "end",
          marginRight: "55px",
        }}
        onClick={handleClick}
      >
        <h3
          style={{
            marginLeft: "55px",
            cursor: "pointer",
            fontSize: "24px",
            opacity: "0.5",
          }}
        >
          View all
          <ArrowRightOutlined
            style={{ marginLeft: "10px", fontSize: "22px" }}
          />
        </h3>
      </Row>
      <Row
        justify="center"
        gutter={[0, 24]}
        style={{ marginTop: 15, padding: "0 150px" }}
      >
        {movies.map((movie) => (
          <Col
            key={movie.id}
            xs={24}
            sm={12}
            md={8}
            lg={4}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MovieCard id={movie.id} {...movie} style={{ margin: "0" }} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ShowcaseWestern;
