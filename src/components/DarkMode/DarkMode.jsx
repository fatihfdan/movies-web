import { MoonOutlined, SunFilled } from "@ant-design/icons";
import { Space, Switch } from "antd";
import "./darkmode.css";
import { useEffect, useState } from "react";

function DarkMode() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    document.body.className = lightMode ? "light-theme" : "dark-theme";
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
