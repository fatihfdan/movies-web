import { Col, Row } from "antd";
import MovieCard from "../MovieCard/MovieCard";

function ShowcaseTrending() {
  return (
    <div>
      <Row
        style={{
          alignItems: "start",
        }}
      >
        <h1
          style={{
            color: "white",
            marginBottom: "5px",
            marginLeft: "55px",
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
            textDecoration: "underline",
          }}
        >
          Other Movies
        </h3>
      </Row>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Col
          span={26}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MovieCard numberOfCards={7} />
        </Col>
      </Row>
    </div>
  );
}

export default ShowcaseTrending;
