import React from 'react';
import { Layout, Menu } from 'antd';
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

const items2 = [
  { key: "sub1", icon: <UserOutlined />, label: "ประเภทสินค้า" },
  { key: "sub2", icon: <LaptopOutlined />, label: "สุขภัณฑ์อัตโนมัติ" },
  { key: "sub3", icon: <NotificationOutlined />, label: "สุขภัณฑ์ชักโครก" },
  { key: "sub4", icon: <NotificationOutlined />, label: "สุขภัณฑ์เคลื่อนที่" },
  { key: "sub5", icon: <NotificationOutlined />, label: "สุขภัณฑ์เซ็นเซอร์" },
  { key: "sub6", icon: <NotificationOutlined />, label: "สุขภัณฑ์ราดน้ำ" },
];

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={200} >
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={items2}
      />
    </Sider>
  );
};

export default Sidebar;
