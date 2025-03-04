import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

type AuthFormProps = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  buttonText: string;
  onSubmit: () => void;
};

const AuthForm = (props: AuthFormProps) => {
  return (
    <Form layout="vertical">
      <Form.Item
        label={<span style={{ fontWeight: "bold" }}>Correo electrónico</span>}
      >
        <Input
          prefix={<UserOutlined />}
          value={props.email}
          onChange={(e) => props.setEmail(e.target.value)}
          placeholder="Ingrese su correo electrónico"
          size="large"
        />
      </Form.Item>

      <Form.Item label={<span style={{ fontWeight: "bold" }}>Contraseña</span>}>
        <Input.Password
          prefix={<LockOutlined />}
          value={props.password}
          onChange={(e) => props.setPassword(e.target.value)}
          placeholder="Ingrese su contraseña"
          size="large"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          block
          size="large"
          style={{ background: "#001529", borderColor: "#001529" }}
          onClick={props.onSubmit}
        >
          {props.buttonText}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AuthForm;
