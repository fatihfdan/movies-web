import { useContext, useEffect, useState } from "react";
import { Button, Col, Row, Space } from "antd";
import {
  CalendarOutlined,
  HistoryOutlined,
  StarFilled,
} from "@ant-design/icons";
import { GlobalContext } from "../../Context/GlobalState";
import { useNavigate } from "react-router-dom";
import "./maincard.css";

function MainCard() {
  const { movies, fetchData, genres, loading, currentPage } =
    useContext(GlobalContext);
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (movies.length > 0) {
      setMovie(movies[1]);
    } else {
      fetchData(currentPage);
    }
  }, [movies, currentPage, fetchData]);

  if (loading) {
    return <div>Loading</div>;
  }

  if (!movie) {
    return <div>No movie found</div>;
  }

  const handleClick = () => {
    navigate(`/${movie.id}`);
  };

  const img = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  const runtime = movie.runtime || 0;
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return (
    <Row justify="center">
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <div className="maincard">
          <img src={img} alt={movie.title} className="maincard-img" />
          <div className="button-container">
            <Space>
              <Button
                type="primary"
                className="primary-button"
                onClick={handleClick}
              >
                Watch Now
              </Button>
            </Space>
          </div>
          <div className="details-container">
            <Row
              gutter={[16, 16]}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Col xs={24} sm={24} md={24} lg={20} xl={20}>
                <h1 className="movie-title">{movie.title}</h1>
                <Space className="buttons-icons">
                  {movie.genre_ids.map((genreId) => (
                    <Button key={genreId} className="category-button">
                      {genres[genreId]}
                    </Button>
                  ))}
                </Space>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Space className="buttons-icons">
                  <CalendarOutlined className="calendar-icon" />
                  <p className="calendar-text">
                    {new Date(movie.release_date).getFullYear()}
                  </p>
                  {runtime > 0 && (
                    <>
                      <HistoryOutlined className="history-icon" />
                      <p className="history-text">
                        {hours}:{minutes < 10 ? "0" : ""}
                        {minutes}
                      </p>
                    </>
                  )}
                  <StarFilled className="star-icon" />
                  <p className="star-text">{movie.vote_average}</p>
                </Space>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default MainCard;
