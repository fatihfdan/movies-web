import "./header.css";
import { Menu } from "antd";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function Header() {
  return (
    <div className="header-container">
      <Menu
        mode="horizontal"
        className="movies-menu"
        defaultSelectedKeys={["home"]}
      >
        <Menu.Item key="home" style={{ color: "white" }}>
          Home
        </Menu.Item>
        <div className="search-container">
          <Input
            className="movies-search"
            placeholder="Search Movies..."
            suffix={<SearchOutlined style={{ fontSize: "20px" }} />}
          />
        </div>
        <Menu.Item key="about1" style={{ color: "white" }}>
          Movies
        </Menu.Item>
        <Menu.Item key="contact" style={{ color: "white" }}>
          Series
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Header;
