import { Layout } from "antd";
import { useLocation } from "react-router-dom";

const { Header } = Layout;

const HeaderBar = () => {
  const location = useLocation();

  const getTitle = () => {
    if (location.pathname === "/characters") return "Listado de Personajes";
    if (location.pathname.startsWith("/character/"))
      return "Detalle de Personaje";
    return "";
  };

  return (
    <Header
      style={{
        position: "fixed",
        top: 0,
        left: 200,
        right: 0,
        height: 64,
        background: "#fff",
        padding: "0 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
        borderBottom: "1px solid #ddd",
      }}
    >
      <h2 style={{ margin: 0 }}>{getTitle()}</h2>
    </Header>
  );
};

export default HeaderBar;
