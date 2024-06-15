/* eslint-disable no-unused-vars */
import "./header.css";
import "../../App.css";
import { Menu, Input, Row, Col } from "antd";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import { useContext, useState, useEffect } from "react";
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
];

function Header() {
  const { setTerm } = useContext(GlobalContext);
  const [searchValue, setSearchValue] = useState("");
  const [moviesParams, setMoviesParams] = useSearchParams();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      <div className="menu-icon">
        {isMobile ? (
          <MenuOutlined />
        ) : (
          <Menu
            className="movies-menu"
            mode="horizontal"
            items={items}
            onClick={handleMenuClick}
          />
        )}
      </div>

      {!isMobile && (
        <Menu
          className="movies-menu"
          mode="horizontal"
          items={items}
          onClick={handleMenuClick}
        />
      )}

      <Input
        className="movies-search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search Movies..."
        onPressEnter={handleSearch}
        suffix={
          <SearchOutlined onClick={handleSearch} style={{ fontSize: "20px" }} />
        }
      />

      <div className="header-actions">
        <DarkMode />
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
