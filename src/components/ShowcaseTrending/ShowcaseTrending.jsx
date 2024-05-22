import { Col, Row } from "antd";
import MovieCard from "../MovieCard/MovieCard.jsx";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState.jsx";
import PropTypes from "prop-types";
function ShowcaseTrending({ onViewAllClick }) {
  const { movies } = useContext(GlobalContext);

  const displayedMovies = movies.slice(0, 6);

  return (
    <div>
      <Row
        style={{
          alignItems: "start",
          marginBottom: "-35px",
        }}
      >
        <h1
          style={{
            color: "white",
            marginBottom: "5px",
            marginLeft: "55px",
            fontSize: "24px",
          }}
        >
          Trending
        </h1>
      </Row>
      <Row
        style={{
          justifyContent: "end",
          marginRight: "55px",
        }}
      >
        <h3
          style={{
            color: "white",
            marginLeft: "55px",
            cursor: "pointer",
            fontSize: "24px",
            opacity: "0.5",
          }}
          onClick={onViewAllClick}
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
        {displayedMovies.map((movie) => (
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

ShowcaseTrending.propTypes = {
  onViewAllClick: PropTypes.func.isRequired,
};

export default ShowcaseTrending;
