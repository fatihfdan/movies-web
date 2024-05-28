import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import MainCard from "../MainCard/MainCard";
import Movies from "../Movies/Movies";
import MoviesPagination from "../MoviesPagination/MoviesPagination";
import { useSearchParams } from "react-router-dom";
import Showcase from "../Showcase/Showcase";
import MoviesContainer from "../MoviesContainer/MoviesContainer";

function MainContainer() {
  const { term } = useContext(GlobalContext);
  const API_KEY = import.meta.env.VITE_API_KEY;

  const [searchParams] = useSearchParams();
  const queryString = searchParams.get("with_genres");
  const trending = searchParams.get("trending");
  const view = searchParams.get("view");

  const showcaseList = [
    {
      title: "Trending",
      API_URL: `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
      searchParamKey: "trending",
      searchParamValue: "true",
    },
    {
      title: "Horror",
      API_URL: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&sort_by=popularity.desc`,
      searchParamKey: "with_genres",
      searchParamValue: "27",
    },
    {
      title: "Western",
      API_URL: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=37&sort_by=popularity.desc`,
      searchParamKey: "with_genres",
      searchParamValue: "37",
    },
  ];

  return (
    <div>
      {view === "movies" && (
        <div>
          <MoviesContainer />
        </div>
      )}

      {!(view === "movies") && (
        <div>
          {term || queryString || trending || view ? (
            <div>
              <Movies />
              <MoviesPagination />
            </div>
          ) : (
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
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MainContainer;
