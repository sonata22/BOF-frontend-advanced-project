import React from "react";
import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { IconButton } from "@mui/material";

const ReturnButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <IconButton
        onClick={() => navigate(-1)}
        color="primary"
        aria-label="return"
      >
        <ChevronLeftIcon />
      </IconButton>
    </div>
  );
};

export default ReturnButton;
