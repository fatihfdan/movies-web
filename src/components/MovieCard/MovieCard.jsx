import { Card, Button } from "antd";
const { Meta } = Card;
import PropTypes from "prop-types";
import { GlobalContext } from "../../Context/GlobalState";
import { useContext } from "react";

function MovieCard({ numberOfCards }) {
  const { movies } = useContext(GlobalContext);

  const renderOverview = (overview) => {
    const maxLength = 75;
    if (overview.length > maxLength) {
      return `${overview.substring(0, maxLength)}...`;
    }
    return overview;
  };

  MovieCard.propTypes = {
    numberOfCards: PropTypes.number.isRequired,
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {movies.slice(0, numberOfCards).map((movie) => (
        <Card
          key={movie.id}
          hoverable
          style={{
            width: 240,
            margin: 10,
            border: "5px solid white",
          }}
          cover={
            <img
              alt={movie.title}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              style={{ height: 400, objectFit: "cover" }}
            />
          }
        >
          <Meta
            title={movie.title}
            description={renderOverview(movie.overview)}
          />
          {movie.overview.length > 75 && (
            <Button type="link" style={{ marginTop: 10 }}>
              See More
            </Button>
          )}
        </Card>
      ))}
    </div>
  );
}

export default MovieCard;
