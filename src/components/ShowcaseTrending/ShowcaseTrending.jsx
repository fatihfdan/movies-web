import { Col, Row } from "antd";
import MovieCard from "../MovieCard/MovieCard";
import { ArrowRightOutlined } from "@ant-design/icons";

function ShowcaseTrending() {
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
