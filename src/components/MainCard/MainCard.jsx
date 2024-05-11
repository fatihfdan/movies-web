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
        <div className="details-container">
          <h1 className="movie-title">Avatar: The Way of Water</h1>
          <Space>
            <Button className="category-button">Action</Button>
            <Button className="category-button">Adventure</Button>
            <Button className="category-button">Science Fiction</Button>
            <CalendarOutlined className="calendar-icon" />
            <p className="calendar-text">2022</p>
            <HistoryOutlined className="history-icon" />
            <p className="history-text">3:12:00</p>
            <StarFilled className="star-icon" />
            <p className="star-text">8.5</p>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
