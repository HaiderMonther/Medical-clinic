import React, { useState } from 'react';
import { Button, Layout, theme } from "antd";
import Sidbar from '../Component/Sidbar';
import ToggelThem from '../Component/ToggelThem';
import Logo from '../Component/Logo';
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import '../style/main.css'

const { Header, Sider } = Layout;

function Dashboard() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapse] = useState(false);

  const toggelThem = () => {
    setDarkTheme(!darkTheme);
  };


  return (
    <Layout>
      <Sider
        collapsed={collapsed}
        collapsible
        trigger={null}
        theme={darkTheme ? "dark" : "light"}
        className="sider"
      >
        <Logo />
        <Sidbar darkTheme={darkTheme} />
        <ToggelThem darkTheme={darkTheme} toggelThem={toggelThem} />
      </Sider>
      <Layout>
        <Header className="Nav-dash  ">
          <Button
            type="text"
            className="toggel"
            onClick={() => setCollapse(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
          <div className="dash-home">
            <h1>الصفحة الرئيسية</h1>
            <div className="NameImage">
              <img src="" alt="" />
              <span>علي حسين</span><br/>
              <p>مديـر عام</p>
            </div>
          </div>
        </Header>
      </Layout>
    </Layout>
  );
}

export default Dashboard