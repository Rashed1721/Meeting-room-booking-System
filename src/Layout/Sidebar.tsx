import { Layout, Menu, Avatar, Drawer, Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useAppSelector } from "../redux/hook";
import { sidebarItemsGenerator } from "../utils/sidebarItemsGenerator";
import { adminPaths } from "../router/AdminPaths";
import { userPaths } from "../router/userPaths";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  USER: "user",
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false); // For desktop sidebar
  const [drawerVisible, setDrawerVisible] = useState(false); // For mobile sidebar

  const user = useAppSelector((state) => state.auth.user);

  let sidebarItems;

  switch (user?.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.USER:
      sidebarItems = sidebarItemsGenerator(userPaths, userRole.USER);
      break;
    default:
      sidebarItems = [];
      break;
  }

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={toggleCollapsed}
        breakpoint="lg"
        collapsedWidth="80"
        style={{ position: "sticky", top: 0, height: "100vh" }}
        className="hidden lg:block"
      >
        <div className="flex items-center justify-center p-4 bg-gray-800 text-white">
          <Avatar size="large" icon={<UserOutlined />} />
          {!collapsed && (
            <div className="ml-3">
              <h3 className="text-sm font-bold">{user?.role || "User"}</h3>
              <p className="text-xs">{user?.role || "Guest"}</p>
            </div>
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={sidebarItems}
        />
      </Sider>

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <Button
          type="text"
          icon={drawerVisible ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
          onClick={toggleDrawer}
          className="p-4 text-gray-700"
        />
        <Drawer
          title="Menu"
          placement="left"
          closable={true}
          onClose={toggleDrawer}
          visible={drawerVisible}
          bodyStyle={{ padding: 0 }}
        >
          <div className="p-4 bg-gray-800 text-white flex items-center">
            <Avatar size="large" icon={<UserOutlined />} />
            <div className="ml-3">
              <h3 className="text-sm font-bold">{user?.role || "User"}</h3>
              <p className="text-xs">{user?.role || "Guest"}</p>
            </div>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={sidebarItems}
          />
        </Drawer>
      </div>
    </>
  );
};

export default Sidebar;
