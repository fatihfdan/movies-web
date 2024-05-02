import mainCardImg from "../../assets/movie.png";
import { Button, Flex } from "antd";
import { PlayCircleFilled, ClockCircleFilled } from "@ant-design/icons";
import "./maincard.css";

function MainCard() {
  const img = mainCardImg;
  return (
    <div className="maincard">
      <div style={{ position: "relative" }}>
        <img
          src={img}
          alt="img"
          className="maincard-img"
          style={{ display: "block", margin: "auto" }}
        />
        <Flex
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            gap: "44px",
          }}
        >
          <Button
            type="primary"
            style={{
              background: "red",
              width: "223px",
              height: "76px",
              fontSize: "24px",
              fontWeight: "700",
              borderRadius: "5px",
            }}
          >
            Watch Now
            <PlayCircleFilled
              style={{ fontSize: "31px", marginLeft: "10px", top: "10px" }}
            />
          </Button>
          <Button
            type="primary"
            className="watch-later-btn"
            style={{
              width: "223px",
              height: "76px",
              fontSize: "24px",
              fontWeight: "700",
              backgroundColor: "transparent",
              border: "3px solid red",
              borderRadius: "5px",
            }}
          >
            Watch Later
            <ClockCircleFilled style={{ fontSize: "20px" }} />
          </Button>
        </Flex>

        <Flex
          style={{
            position: "absolute",
            top: "452px",
            left: "160px",
            transform: "translate(50%, -50%)",
            gap: "10px",
          }}
        >
          <h1 style={{ color: "white", position: "absolute", width: "420px" }}>
            Avatar: The Way of Water
          </h1>

          <Button
            type="primary"
            style={{
              background: "white",
              width: "73px",
              height: "44px",
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              top: "54px",
              color: "black",
            }}
          >
            Action
          </Button>
          <Button
            type="primary"
            style={{
              background: "white",
              width: "108px",
              height: "44px",
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              top: "54px",
              color: "black",
            }}
          >
            Adventure
          </Button>
          <Button
            type="primary"
            style={{
              background: "white",
              width: "142px",
              height: "44px",
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              top: "54px",
              color: "black",
            }}
          >
            Science Fiction
          </Button>
        </Flex>
      </div>
    </div>
  );
}

export default MainCard;
