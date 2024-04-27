import "./header.css";
import { Col, Row } from "antd";

function Header() {
  return (
    <Row
      style={{
        height: "112px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <Col xs={2} sm={4} md={6} lg={8} xl={8}>
        Col
      </Col>
      <Col
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        xs={20}
        sm={16}
        md={12}
        lg={8}
        xl={6}
      >
        <input
          className="movies-search"
          type="search"
          placeholder="Search..."
        />
      </Col>
      <Col xs={2} sm={4} md={6} lg={8} xl={8}></Col>
    </Row>
  );
}

export default Header;
