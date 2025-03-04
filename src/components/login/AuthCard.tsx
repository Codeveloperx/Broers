import { Card, Row, Col, Typography } from "antd";

const { Title, Text } = Typography;

type AuthCardProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

const AuthCard = (props: AuthCardProps) => {
  return (
    <Card
      style={{
        width: 750,
        padding: 24,
        borderRadius: 16,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Row gutter={32} align="middle">
        <Col span={12} style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={"src/assets/banner.png"}
            alt="Login Illustration"
            style={{ width: "100%", maxWidth: "250px" }}
          />
        </Col>

        <Col span={12}>
          <Title level={2} style={{ textAlign: "center", fontWeight: "bold" }}>
            {props.title}
          </Title>
          <Text
            style={{
              display: "block",
              textAlign: "center",
              marginBottom: 20,
              color: "#666",
            }}
          >
            {props.subtitle}
          </Text>
          {props.children}
        </Col>
      </Row>
    </Card>
  );
};

export default AuthCard;
