/* eslint-disable react/prop-types */
import { Card, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalState";
import { useContext } from "react";
const { Meta } = Card;

function MovieCard({ poster_path, title, vote_average, id, genre_ids }) {
  const { genres } = useContext(GlobalContext);
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${id}`);
  };
  // eslint-disable-next-line react/prop-types
  // const roundedVoteAverage = vote_average.toFixed(1);
  console.log(poster_path, title, vote_average, id, genre_ids);

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
      <p style={{ marginTop: 10 }}>{`IMDb Puanı: ${
        vote_average ? vote_average.toFixed(1) : "-"
      }`}</p>

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
