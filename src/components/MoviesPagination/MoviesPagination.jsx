import { Pagination } from "antd";
import "./moviespagination.css";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";

function MoviesPagination() {
  const { totalResults, currentPage, handlePageChange } =
    useContext(GlobalContext);

  return (
    <div>
      <Pagination
        className="movies-pagination"
        current={currentPage}
        total={totalResults}
        pageSize={20}
        onChange={handlePageChange}
        showSizeChanger={false}
      />
    </div>
  );
}

export default MoviesPagination;
