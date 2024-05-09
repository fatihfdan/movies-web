import { useEffect } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import { useParams } from "react-router-dom";

function SearchResults() {
  const { movies, fetchData, term } = useContext(GlobalContext);
  const { SearchResults } = useParams();

  useEffect(() => {
    fetchData();
  }, [term]);

  return (
    <div className="search-results">
      <h2>Arama Sonuçları</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <SearchResults key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
