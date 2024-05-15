import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import MainCard from "../MainCard/MainCard";
import Movies from "../Movies/Movies";
import MoviesPagination from "../MoviesPagination/MoviesPagination";
import ShowcaseTrending from "../ShowcaseTrending/ShowcaseTrending";
import ShowcaseHorror from "../ShowcaseHorror/ShowcaseHorror";
import ShowcaseWestern from "../ShowcaseWestern/ShowcaseWestern";

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
          <ShowcaseHorror />
          <ShowcaseWestern />
        </div>
      )}
    </div>
  );
}

export default MainContainer;
