// DarkMode.jsx
import { MoonOutlined, SunFilled } from "@ant-design/icons";
import { Space, Switch } from "antd";
import { useEffect, useState } from "react";
import "./darkmode.css";

function DarkMode() {
  const [lightMode, setLightMode] = useState(
    () => localStorage.getItem("theme") === "light"
  );

  useEffect(() => {
    document.body.className = lightMode ? "light-theme" : "dark-theme";
    localStorage.setItem("theme", lightMode ? "light" : "dark");
  }, [lightMode]);

  const toggleTheme = () => {
    setLightMode(!lightMode);
  };

  return (
    <div>
      <Space direction="vertical">
        <Switch
          className="dark-mode-btn"
          checked={lightMode}
          onChange={toggleTheme}
          checkedChildren={<SunFilled className="sunfilled" />}
          unCheckedChildren={<MoonOutlined className="moonoutlined" />}
        />
      </Space>
    </div>
  );
}

export default DarkMode;
