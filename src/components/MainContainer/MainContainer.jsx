import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import MainCard from "../MainCard/MainCard";
import Movies from "../Movies/Movies";
import MoviesPagination from "../MoviesPagination/MoviesPagination";

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
        <MainCard />
      )}
    </div>
  );
}

export default MainContainer;
