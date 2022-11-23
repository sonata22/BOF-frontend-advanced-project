import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ForwardButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <IconButton
        onClick={() => navigate(1)}
        color="primary"
        aria-label="forward"
      >
        <ChevronRightIcon />
      </IconButton>
    </div>
  );
};

export default ForwardButton;
