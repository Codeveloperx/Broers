import { Layout } from "antd";
import { useAuth } from "../hook/useAuth";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import { Content } from "antd/es/layout/layout";

type PropsType = {
  children: React.ReactNode;
};

const MainLayout = (props: PropsType) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <>{props.children}</>;
  }

  return (
    <Layout style={{ minHeight: "100vh", overflow: "hidden" }}>
      <Sidebar />
      <Layout style={{ marginLeft: 200 }}>
        <Header />
        <Content
          style={{
            marginTop: 64,
            padding: 24,
            background: "#fff",
            height: "calc(100vh - 64px)",
            overflowY: "auto",
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
