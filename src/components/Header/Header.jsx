/* eslint-disable no-unused-vars */
// Header.jsx
import "./header.css";
import "../../App.css";
import { Menu } from "antd";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import DarkMode from "../DarkMode/DarkMode";
import UserButton from "../UserButton/UserButton";
import { useSearchParams } from "react-router-dom";

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
  const [moviesParams, setMoviesParams] = useSearchParams();

  const handleMenuClick = (e) => {
    if (e.key === "movies") {
      setMoviesParams({ view: "movies" });
    } else {
      setMoviesParams({});
    }
  };

  const handleSearch = () => {
    setTerm(searchValue);
  };

  return (
    <div className="header-container">
      <Menu
        className="movies-menu"
        defaultSelectedKeys={["home"]}
        mode="horizontal"
        items={items}
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
        <DarkMode />
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
