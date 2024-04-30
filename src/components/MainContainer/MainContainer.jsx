import img from "../../assets/movie.png";
import "./maincontainer.css";

function MoviesContainer() {
  return (
    <div className="movies-container">
      <img className="movies-container-img" src={img} alt="Movies İmg" />
    </div>
  );
}

export default MoviesContainer;
