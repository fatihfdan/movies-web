/* eslint-disable no-unused-vars */
// Header.jsx
import "./header.css";
import "../../App.css";
import { Menu, Input, Row, Col } from "antd";
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
      <Row justify="space-between" align="middle" style={{ width: "100%" }}>
        {/* Left Section: Home and Movies */}
        <Col xs={9} sm={12} md={6} lg={6} xl={6}>
          <Menu
            className="movies-menu"
            defaultSelectedKeys={["home"]}
            mode="horizontal"
            items={items}
            selectedKeys={null}
            onClick={handleMenuClick}
          />
        </Col>

        <Col xs={12} sm={24} md={12} lg={12} xl={12}>
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
              style={{ width: "100%", maxWidth: 400 }}
            />
          </div>
        </Col>

        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
          <Row justify="end" align="middle">
            <Col>
              <DarkMode />
            </Col>
            <Col style={{ marginLeft: 16 }}>
              <UserButton />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
