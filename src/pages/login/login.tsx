import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import Swal from "sweetalert2";
import AuthCard from "../../components/login/AuthCard";
import AuthForm from "../../components/login/FormLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const loginSuccess = login(email, password);

    if (loginSuccess) {
      Swal.fire({
        icon: "success",
        title: "Inicio de Sesión Exitoso",
        text: "Redirigiendo...",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        navigate("/characters");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Inicio de Sesión Fallido",
        text: "Correo o contraseña incorrectos",
      });
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "#001529",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AuthCard
        title="Iniciar Sesión"
        subtitle="Bienvenido al portal de salud COOSALUD"
      >
        <AuthForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          buttonText="Ingresar"
          onSubmit={handleLogin}
        />
      </AuthCard>
    </div>
  );
};

export default Login;
