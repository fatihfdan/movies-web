import "./header.css";
import { Menu } from "antd";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const items = [
  {
    label: "Home",
    key: "home",
  },
  {
    label: "Movies",
    key: "movies",
  },
  {
    label: "Series",
    key: "series",
  },
];

function Header() {
  return (
    <div className="header-container">
      <Menu
        className="movies-menu"
        defaultSelectedKeys={["home"]}
        mode="horizontal"
        items={items}
        theme="dark"
        selectedKeys={null}
      />

      <div className="search-container">
        <Input
          className="movies-search"
          placeholder="Search Movies..."
          suffix={<SearchOutlined style={{ fontSize: "20px" }} />}
        />
      </div>
    </div>
  );
}

export default Header;
