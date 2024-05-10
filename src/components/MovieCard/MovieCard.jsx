/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Card, Button } from "antd";

import { useNavigate } from "react-router-dom";
const { Meta } = Card;

// eslint-disable-next-line react/prop-types
function MovieCard({ poster_path, title, vote_average, id, genre_ids }) {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  const API_KEY = import.meta.env.VITE_API_KEY;
  const navigate = useNavigate();
  const [genres, setGenres] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=tr&api_key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        const genreMap = {};
        data.genres.forEach((genre) => {
          genreMap[genre.id] = genre.name;
        });
        setGenres(genreMap);
      })
      .catch((error) => console.error("Error fetching genres:", error));
  }, []);

  const handleClick = () => {
    navigate(`/${id}`);
  };
  // eslint-disable-next-line react/prop-types
  const roundedVoteAverage = vote_average.toFixed(1);

  return (
    <Card
      hoverable
      style={{ width: 240, margin: 5, border: "5px solid white" }}
      cover={
        <img alt={title} src={API_IMG + poster_path} style={{ height: 400 }} />
      }
      onClick={handleClick}
    >
      <Meta title={title} />
      <p style={{ marginTop: 10 }}>{`IMDb Puanı: ${roundedVoteAverage}`}</p>

      <div style={{ marginTop: 30 }}>
        {genre_ids.map((genreId) => (
          <Button
            style={{
              width: "auto",
              height: 30,
              fontSize: 12,
              marginRight: 5,
              marginBottom: 5,
              justifyContent: "center",
              alignItems: "center",
              background: "transparent",
            }}
            key={genreId}
          >
            {genres[genreId]}
          </Button>
        ))}
      </div>
    </Card>
  );
}

export default MovieCard;
