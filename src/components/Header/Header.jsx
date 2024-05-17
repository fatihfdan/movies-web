import "./header.css";
import { Menu } from "antd";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import { useNavigate } from "react-router-dom";

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
  const { setTerm } = useContext(GlobalContext);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    setTerm(searchValue);
  };

  const handleMenuClick = (e) => {
    if (e.key === "home") {
      navigate("/");
    }
  };

  return (
    <div className="header-container">
      <Menu
        className="movies-menu"
        defaultSelectedKeys={["home"]}
        mode="horizontal"
        items={items}
        theme="dark"
        selectedKeys={null}
        onClick={handleMenuClick}
      />

      <div className="search-container">
        <Input
          className="movies-search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search Movies..."
          onPressEnter={handleSearch}
          suffix={
            <SearchOutlined
              onClick={handleSearch}
              style={{ fontSize: "20px" }}
            />
          }
        />
      </div>
    </div>
  );
}

export default Header;
