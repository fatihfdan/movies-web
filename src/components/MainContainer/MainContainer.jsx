import { useState, useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import MainCard from "../MainCard/MainCard";
import Movies from "../Movies/Movies";
import MoviesPagination from "../MoviesPagination/MoviesPagination";
import ShowcaseTrending from "../ShowcaseTrending/ShowcaseTrending";
import ShowcaseHorror from "../ShowcaseHorror/ShowcaseHorror";
import ShowcaseWestern from "../ShowcaseWestern/ShowcaseWestern";

function MainContainer() {
  const { term } = useContext(GlobalContext);
  const [viewAll, setViewAll] = useState(false);

  const handleViewAllClick = () => {
    setViewAll(true);
  };

  return (
    <div>
      {term ? (
        <div>
          <Movies />
          <MoviesPagination />
        </div>
      ) : viewAll ? (
        <div>
          <Movies />
          <MoviesPagination />
        </div>
      ) : (
        <div>
          <MainCard />
          <ShowcaseTrending onViewAllClick={handleViewAllClick} />
          <ShowcaseHorror />
          <ShowcaseWestern />
        </div>
      )}
    </div>
  );
}

export default MainContainer;
