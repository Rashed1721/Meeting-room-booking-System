import { Layout, Menu } from "antd";

import { NavLink } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
  const sidebarItems = [
    {
      key: "Room",
      label: "Room Management",
      children: [
        {
          key: "1",
          label: <NavLink to="/admin/add-rooms">Add Rooms</NavLink>,
        },
        {
          key: "2",
          label: <NavLink to="/admin/manage-rooms">Manage Rooms</NavLink>,
        },
      ],
    },
    {
      key: "Slot",
      label: "Slot Management",
      children: [
        {
          key: "3",
          label: <NavLink to="/admin/add-slots">Add Slots</NavLink>,
        },
        {
          key: "4",
          label: <NavLink to="/admin/manage-slots">Manage Slots</NavLink>,
        },
      ],
    },
    {
      key: "booking",
      label: "Booking Management",
      children: [
        {
          key: "6",
          label: <NavLink to="/admin/manage-bookings">Manage Bookings</NavLink>,
        },
      ],
    },
  ];
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Logo</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
