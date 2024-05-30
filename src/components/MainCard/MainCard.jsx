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
      <img src={img} alt="img" className="maincard-img" />
      <div className="button-container">
        <Space>
          <Button type="primary" className="primary-button">
            Watch Now...
          </Button>
          <Button type="primary" className="watch-later-btn">
            Watch Later
          </Button>
        </Space>
      </div>
      <div className="details-container">
        <h1 className="movie-title">Avatar: The Way of Water</h1>
        <Space className="buttons-icons">
          <Button className="category-button">Action</Button>
          <Button className="category-button">Adventure</Button>
          <Button className="category-button">Science Fiction</Button>
          <CalendarOutlined className="calendar-icon" />
          <p className="calendar-text">2022</p>
          <HistoryOutlined className="history-icon" />
          <p className="history-text">3:12:00</p>
          <StarFilled className="star-icon" />
          <p className="star-text">7.5</p>
        </Space>
      </div>
    </div>
  );
}

export default MainCard;
