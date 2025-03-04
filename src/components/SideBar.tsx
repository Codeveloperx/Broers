import { Layout, Menu, Button } from "antd";
import { LoginOutlined, TeamOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const { Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const menuItems = [
    {
      key: "/characters",
      icon: <TeamOutlined />,
      label: "Personajes",
      onClick: () => navigate("/characters"),
    },
  ];

  return (
    <Sider
      width={200}
      theme="dark"
      style={{
        position: "fixed",
        height: "100vh",
        left: 0,
        top: 0,
        bottom: 0,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
      >
        Marvel App
      </div>

      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
      />

      <div
        style={{
          position: "absolute",
          bottom: 20,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Button
          type="primary"
          danger
          icon={<LoginOutlined />}
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Cerrar Sesión
        </Button>
      </div>
    </Sider>
  );
};

export default Sidebar;
