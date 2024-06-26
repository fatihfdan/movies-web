import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [searchParams] = useSearchParams();
  const withGenresFilter = searchParams.get("with_genres");
  const trending = searchParams.get("trending");
  const API_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
  const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;
  const API_GENRES_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${withGenresFilter}&sort_by=popularity.desc`;

  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState({});
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState([]);

  useEffect(() => {
    if (selectedGenres.length > 0) {
      fetchMoviesByGenre(selectedGenres, currentPage);
    } else {
      fetchData(currentPage);
    }
  }, [term, currentPage, withGenresFilter, trending, selectedGenres]);

  useEffect(() => {
    fetchGenresData();
  }, []);

  const fetchData = (page) => {
    const query = term ? `&query=${term}` : "";
    setLoading(true);

    fetch(
      `${
        term ? API_SEARCH : withGenresFilter ? API_GENRES_URL : API_URL
      }${query}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        const filteredMovies = data.results.filter(
          (movie) => movie.poster_path !== null
        );
        setMovies(filteredMovies);
        setTotalResults(data.total_results);
        setTotalPages(data.total_pages);
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

  const fetchMoviesByGenre = (genreIds, page) => {
    setLoading(true);
    const genreQuery = genreIds.join(",");
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreQuery}&sort_by=popularity.desc&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        const filteredMovies = data.results.filter(
          (movie) => movie.poster_path !== null
        );
        setMovies(filteredMovies);
        setTotalResults(data.total_results);
        setTotalPages(data.total_pages);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies by genre:", error);
        setLoading(false);
      });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleGenreClick = (genreId) => {
    let updatedSelectedGenres = [];
    if (selectedGenres.includes(genreId)) {
      updatedSelectedGenres = selectedGenres.filter((id) => id !== genreId);
    } else {
      updatedSelectedGenres = [...selectedGenres, genreId];
    }
    setSelectedGenres(updatedSelectedGenres);
    setCurrentPage(1);
    if (updatedSelectedGenres.length > 0) {
      fetchMoviesByGenre(updatedSelectedGenres, 1);
    } else {
      fetchData(1);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        movies,
        fetchData,
        fetchMoviesByGenre,
        term,
        setTerm,
        loading,
        genres,
        totalResults,
        currentPage,
        handlePageChange,
        totalPages,
        selectedGenres,
        handleGenreClick,
        setSelectedGenres,
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
