import { Button } from "antd";
import "./userbutton.css";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function UserButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signIn");
  };
  return (
    <div className="user-button">
      <Button
        className="user-icon-btn"
        shape="circle"
        onClick={handleClick}
        icon={<UserOutlined className="useroutlined" />}
      />
    </div>
  );
}

export default UserButton;
