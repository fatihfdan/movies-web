import { Flex } from "antd";
import { GlobalContext } from "../../Context/GlobalState";
import MovieCard from "../MovieCard/MovieCard";
import { useContext } from "react";
import "./movies.css";

function Movies() {
  const { movies } = useContext(GlobalContext);
  return (
    <Flex className="movies">
      {movies.length === 0 ? (
        <p className="notfound">Not Found...</p>
      ) : (
        <Flex className="movies-list">
          {movies.map((movie) => (
            <MovieCard key={movie.id} id={movie.id} {...movie} />
          ))}
        </Flex>
      )}
    </Flex>
  );
}

export default Movies;
