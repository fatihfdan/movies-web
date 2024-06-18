import { useContext, useEffect, useState } from "react";
import { Button, Space } from "antd";
import {
  CalendarOutlined,
  HistoryOutlined,
  StarFilled,
} from "@ant-design/icons";
import { GlobalContext } from "../../Context/GlobalState"; // GlobalContext yolunu kendi dosya yapınıza göre ayarlayın
import "./maincard.css";

function MainCard() {
  const { movies, fetchData, genres, loading, currentPage } =
    useContext(GlobalContext);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (movies.length > 0) {
      setMovie(movies[1]); // Ana film olarak listeden ilk filmi alıyoruz
    } else {
      fetchData(currentPage);
    }
  }, [movies, currentPage, fetchData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>No movie found</div>;
  }

  const img = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  const runtime = movie.runtime || 0;
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return (
    <div className="maincard">
      <img src={img} alt={movie.title} className="maincard-img" />
      <div className="button-container">
        <Space>
          <Button type="primary" className="primary-button">
            Watch Now
          </Button>
          <Button type="primary" className="watch-later-btn">
            Watch Later
          </Button>
        </Space>
      </div>
      <div className="details-container">
        <h1 className="movie-title">{movie.title}</h1>
        <Space className="buttons-icons">
          {movie.genre_ids.map((genreId) => (
            <Button key={genreId} className="category-button">
              {genres[genreId]}
            </Button>
          ))}
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
      </div>
    </div>
  );
}

export default MainCard;
