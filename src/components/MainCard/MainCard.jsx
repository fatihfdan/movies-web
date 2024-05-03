import mainCardImg from "../../assets/movie.png";
import { Button, Space } from "antd";
import {
  CalendarOutlined,
  HistoryOutlined,
  StarFilled,
} from "@ant-design/icons";
import "./maincard.css";

function MainCard() {
  const img = mainCardImg;
  return (
    <div className="maincard">
      <div style={{ position: "relative" }}>
        <img
          src={img}
          alt="img"
          className="maincard-img"
          style={{ display: "block", margin: "auto" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            top: "321px",
            transform: "translateX(-50%)",
          }}
        >
          <Space>
            <Button
              type="primary"
              style={{
                background: "red",
                width: "223px",
                height: "76px",
                fontSize: "24px",
                fontWeight: "700",
                borderRadius: "5px",
                marginRight: "20px",
              }}
            >
              Watch Now
            </Button>
            <Button
              type="primary"
              className="watch-later-btn"
              style={{
                width: "223px",
                height: "76px",
                fontSize: "24px",
                fontWeight: "700",
                backgroundColor: "transparent",
                border: "3px solid red",
                borderRadius: "5px",
              }}
            >
              Watch Later
            </Button>
          </Space>
        </div>
        <div
          style={{
            position: "absolute",
            top: "452px",
            left: 524,
            transform: "translateX(-50%)",
          }}
        >
          <h1
            style={{
              color: "white",
              textAlign: "start",
              marginBottom: "10px",
            }}
          >
            Avatar: The Way of Water
          </h1>
          <Space>
            <Button
              type="primary"
              style={{
                borderRadius: "20px",
                marginRight: "5px",
                backgroundColor: "white",
                color: "black",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "24px",
                height: "44px",
              }}
            >
              Action
            </Button>
            <Button className="button-adventure">Adventure</Button>
            <Button className="button-science">Science Fiction</Button>
            <CalendarOutlined style={{ fontSize: "20px", color: "white" }} />
            <p style={{ color: "white", fontSize: "16px", fontWeight: "500" }}>
              2022
            </p>
            <HistoryOutlined
              style={{ fontSize: "20px", color: "white", marginLeft: "10px" }}
            />
            <p style={{ color: "white", fontSize: "16px", fontWeight: "500" }}>
              3:12:00
            </p>
            <StarFilled
              style={{ fontSize: "20px", color: "white", marginLeft: "10px" }}
            />
            <p style={{ color: "white", fontSize: "16px", fontWeight: "500" }}>
              8.5
            </p>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
