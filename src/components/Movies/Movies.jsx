import { Col, Flex, Row } from "antd";
import { GlobalContext } from "../../Context/GlobalState";
import MovieCard from "../MovieCard/MovieCard";
import { useContext } from "react";
import "./movies.css";

function Movies() {
  const { movies } = useContext(GlobalContext);
  return (
    <Flex className="movies">
      {movies.length === 0 ? (
        <p className="notfound">Not Found</p>
      ) : (
        <Row className="movies-list">
          {movies.map((movie) => (
            <Col xs={24} sm={12} md={8} lg={8} xl={4} key={movie.id}>
              <MovieCard id={movie.id} {...movie} />
            </Col>
          ))}
        </Row>
      )}
    </Flex>
  );
}

export default Movies;
