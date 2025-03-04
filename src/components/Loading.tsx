import { Spin, Row, Col } from "antd";

const LoadingScreen = () => (
  <Row justify="center" align="middle" style={{ height: "100vh" }}>
    <Col>
      <Spin size="large" />
    </Col>
  </Row>
);

export default LoadingScreen;
