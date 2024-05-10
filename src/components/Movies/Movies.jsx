import { Flex } from "antd";
import { GlobalContext } from "../../Context/GlobalState.jsx";
import MovieCard from "../MovieCard/MovieCard.jsx";
import { useContext } from "react";

function Movies() {
  const { movies } = useContext(GlobalContext);
  return (
    <Flex
      className="movies"
      style={{
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {movies.length === 0 ? (
        <p className="notfound">Not Found...</p>
      ) : (
        <Flex
          wrap="wrap"
          justify="center"
          style={{
            gap: "20px",
          }}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} id={movie.id} {...movie} />
          ))}
        </Flex>
      )}
    </Flex>
  );
}

export default Movies;
