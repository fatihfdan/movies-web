import { Col, Row } from "antd";
import MovieCard from "../MovieCard/MovieCard.jsx";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState.jsx";

function ShowcaseTrending() {
  const { movies } = useContext(GlobalContext);
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
        >
          View all
          <ArrowRightOutlined
            style={{ marginLeft: "10px", fontSize: "22px" }}
          />
        </h3>
      </Row>
      <Row>
        <Col span={26}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} id={movie.id} {...movie} />
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default ShowcaseTrending;
