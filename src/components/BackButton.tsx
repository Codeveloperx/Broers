import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      type="primary"
      style={{ background: "#001529", borderColor: "#001529" }}
      onClick={() => navigate(-1)}
    >
      Back
    </Button>
  );
};

export default BackButton;
