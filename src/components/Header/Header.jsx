/* eslint-disable no-unused-vars */
import "./header.css";
import "../../App.css";
import { Menu, Input } from "antd";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const checkMobileView = () => {
    const viewportWidth = window.innerWidth;
    setIsMobileView(viewportWidth <= 768);
  };

  useEffect(() => {
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  const handleMenuClick = (e) => {
    if (e.key === "movies") {
      setMoviesParams({ view: "movies" });
    } else {
      setMoviesParams({});
    }

    setIsMobileMenuOpen(false);
  };

  const handleSearch = () => {
    setTerm(searchValue);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="header-container">
      <div className="menu-icon" onClick={toggleMobileMenu}>
        <MenuOutlined />
      </div>

      {!isMobileView && (
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

      {isMobileView && isMobileMenuOpen && (
        <div className="mobile-menu">
          <Menu mode="vertical" items={items} onClick={handleMenuClick} />
        </div>
      )}
    </div>
  );
}

export default Header;
