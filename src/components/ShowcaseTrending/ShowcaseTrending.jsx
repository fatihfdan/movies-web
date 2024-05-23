// ShowcaseTrending.jsx
import { Col, Row } from "antd";
import MovieCard from "../MovieCard/MovieCard.jsx";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState.jsx";
import PropTypes from "prop-types";
import "./showcasetrending.css";

function ShowcaseTrending({ onViewAllClick }) {
  const { movies } = useContext(GlobalContext);
  const displayedMovies = movies.slice(0, 6);

  return (
    <div>
      <Row className="showcase-row">
        <h1 className="showcase-title">Trending</h1>
      </Row>
      <Row className="showcase-row-end">
        <h3 className="showcase-view-all" onClick={onViewAllClick}>
          View all
          <ArrowRightOutlined className="showcase-icon" />
        </h3>
      </Row>
      <Row justify="center" gutter={[0, 24]} className="showcase-content">
        {displayedMovies.map((movie) => (
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

ShowcaseTrending.propTypes = {
  onViewAllClick: PropTypes.func.isRequired,
};

export default ShowcaseTrending;
