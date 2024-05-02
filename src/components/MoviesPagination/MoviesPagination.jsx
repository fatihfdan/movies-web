import { Pagination } from "antd";
import "./moviespagination.css";

function MoviesPagination() {
  return (
    <div>
      <Pagination
        style={{ background: "white" }}
        className="movies-pagination"
        defaultCurrent={1}
        total={50}
        pageSizeOptions={[1, 10, 20, 30]}
      />
      ;
    </div>
  );
}

export default MoviesPagination;
