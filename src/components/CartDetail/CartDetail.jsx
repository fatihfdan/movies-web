import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Space, Spin } from "antd";
import { Col, Row } from "antd";
import "./cartdetail.css";
import { CalendarOutlined, StarFilled } from "@ant-design/icons";

function CartDetail() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [cartLoading, setCartLoading] = useState(false);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = () => {
    setCartLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos&language=tr-TR`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setTimeout(() => setCartLoading(false), 500);
        console.log(data);
      });
  };

  const releaseYear = movie ? new Date(movie.release_date).getFullYear() : null;

  return (
    <div className="cartdetail">
      <Row style={{ width: "100%" }}>
        <Col span={2}></Col>
        <Col span={20}>
          {cartLoading ? (
            <div className="loading-overlay">
              <Spin />
            </div>
          ) : (
            <>
              {movie ? (
                <div className="moviecard">
                  {movie.videos?.results.length !== 0 ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="video-placeholder">Video Bulunamadı</div>
                  )}
                  <Row>
                    <Col span={8}>
                      <div className="image">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          alt="img"
                        />
                      </div>
                    </Col>
                    <Col span={14} style={{ marginLeft: 25 }}>
                      <div className="details">
                        <h1>{movie.title}</h1>
                        <Space className="movie-info" size="middle">
                          <div className="genres">
                            {movie.genres.map((genre) => (
                              <Button
                                className="cartdetail-button"
                                key={genre.id}
                              >
                                {genre.name}
                              </Button>
                            ))}
                          </div>
                          <div className="calendar-info">
                            <CalendarOutlined className="calendar-icon" />
                            <span className="calendar-text">{releaseYear}</span>
                          </div>
                          <div className="star-info">
                            <StarFilled className="star-icon" />
                            <span className="star-text">
                              {movie.vote_average.toFixed(1)}
                            </span>
                          </div>
                        </Space>
                        <p>{movie.overview}</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              ) : (
                <div>Film bilgilerine erişilemedi.</div>
              )}
            </>
          )}
        </Col>
        <Col span={2}></Col>
      </Row>
    </div>
  );
}

export default CartDetail;
