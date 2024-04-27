import img from "../../assets/movie.png";
import "./moviescontainer.css";

function MoviesContainer() {
  return (
    <div className="movies-container">
      <img className="movies-container-img" src={img} alt="img" />
    </div>
  );
}

export default MoviesContainer;
