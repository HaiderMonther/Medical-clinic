import {React} from 'react';
import {Link, Router, Routes} from 'react-router-dom'
import { Menu } from "antd";
import { IoIosPeople } from "react-icons/io";
import {
  HomeOutlined,
  FieldTimeOutlined,
  AreaChartOutlined,
  PayCircleOutlined,
  SettingOutlined,
  BarsOutlined,
}from "@ant-design/icons";
const Sidbar = ({ darkTheme }) => {
    return (
        <Menu
          theme={darkTheme ? "dark" : "light"}
          mode="inline"
          className="menu_bar"
        >
          
            <Menu.Item  key="home" icon={<HomeOutlined />}>
                <Link to= "/dashboard">الصفحة الرئيسية</Link>
            </Menu.Item>
            <Menu.Item key="activity" icon={<FieldTimeOutlined />}>
                عزيز جاسم
            </Menu.Item>
            <Menu.Item key="progress" icon={<IoIosPeople />}>
                المرضى
            </Menu.Item>
            <Menu.Item key="payment" icon={<PayCircleOutlined />}>
                الاستشارات
            </Menu.Item>
            <Menu.Item key="setting" icon={<SettingOutlined />}>
                Setting
            </Menu.Item>
        </Menu>
      );
};

export default Sidbar