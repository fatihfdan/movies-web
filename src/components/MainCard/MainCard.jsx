import mainCardImg from "../../assets/movie.png";
import "./maincard.css";

function MainCard() {
  const img = mainCardImg;
  return (
    <div className="maincard">
      <img src={img} alt="img" className="maincard-img" />
    </div>
  );
}

export default MainCard;
