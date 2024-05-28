/* eslint-disable no-unused-vars */
// MainContainer.jsx
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import MainCard from "../MainCard/MainCard";
import { useSearchParams } from "react-router-dom";
import Showcase from "../Showcase/Showcase";
import MoviesContainer from "../MoviesContainer/MoviesContainer";

function MainContainer() {
  const { term } = useContext(GlobalContext);
  const [searchParams] = useSearchParams();
  const view = searchParams.get("view");
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [trendingMovies, setTrendingMovies] = useState([]);

  const showcaseList = [
    {
      title: "Trending",
      API_URL: `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
      searchParamKey: "view",
      searchParamValue: "trending",
    },
    {
      title: "Western",
      API_URL: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=37&sort_by=popularity.desc`,
      searchParamKey: "with_genres",
      searchParamValue: "37",
    },
    {
      title: "Horror",
      API_URL: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&sort_by=popularity.desc`,
      searchParamKey: "with_genres",
      searchParamValue: "27",
    },
  ];

  useEffect(() => {
    if (view === "trending") {
      fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => setTrendingMovies(data.results));
    }
  }, [view, API_KEY]);

  if (view === "trending") {
    return (
      <div>
        <h1>Trending Movies</h1>
        <div className="movies-list">
          {trendingMovies.map((movie) => (
            <div key={movie.id}>{movie.title}</div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <MainCard />
      {showcaseList.map((showcase) => (
        <Showcase
          key={showcase.title}
          title={showcase.title}
          API_URL={showcase.API_URL}
          searchParamKey={showcase.searchParamKey}
          searchParamValue={showcase.searchParamValue}
        />
      ))}
      <MoviesContainer />
    </div>
  );
}

export default MainContainer;
