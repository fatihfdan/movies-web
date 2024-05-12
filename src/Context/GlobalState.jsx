import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;

  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState({});

  useEffect(() => {
    fetchData();
  }, [term]);

  useEffect(() => {
    fetchGenresData();
  }, []);

  const fetchData = () => {
    const query = term ? `&query=${term}` : "";
    setLoading(true);

    fetch(`${term ? API_SEARCH : API_URL}${query}`)
      .then((res) => res.json())
      .then((data) => {
        const filteredMovies = data.results.filter(
          (movie) => movie.poster_path !== null
        );
        setMovies(filteredMovies);
        setLoading(false);
        console.log(filteredMovies);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  const fetchGenresData = () => {
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
      });
  };

  return (
    <GlobalContext.Provider
      value={{
        movies,
        fetchData,
        setTerm,
        loading,
        genres,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
