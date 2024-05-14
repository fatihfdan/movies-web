import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import MainCard from "../MainCard/MainCard";
import Movies from "../Movies/Movies";
import MoviesPagination from "../MoviesPagination/MoviesPagination";
import ShowcaseTrending from "../ShowcaseTrending/ShowcaseTrending";

function MainContainer() {
  const { term } = useContext(GlobalContext);

  return (
    <div>
      {term ? (
        <div>
          <Movies />
          <MoviesPagination />
        </div>
      ) : (
        <div>
          <MainCard />
          <ShowcaseTrending />
        </div>
      )}
    </div>
  );
}

export default MainContainer;