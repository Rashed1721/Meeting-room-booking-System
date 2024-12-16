import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import AdminNavbar from "./AdminNavbar";
import { useState, useEffect } from "react";

const { Header, Content } = Layout;

const AdminLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // Simulate loading state
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <AdminNavbar />
        </Header>
        <Content style={{ margin: "24px 16px", backgroundColor: "#f5f5f5" }}>
          <div
            style={{
              padding: 24,
              background: "#fff",
              borderRadius: 8,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              minHeight: "80vh",
            }}
          >
            {isLoading ? (
              <div style={{ textAlign: "center", marginTop: "20%" }}>
                <p>Loading...</p>
              </div>
            ) : (
              <>
                <Outlet />
              </>
            )}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
