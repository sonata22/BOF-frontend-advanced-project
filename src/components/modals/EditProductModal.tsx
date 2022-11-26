import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CreateIcon from "@mui/icons-material/Create";
import { IconButton } from "@mui/material";
import EditCategoryForm from "../forms/EditCategoryForm";
import EditProductForm from "../forms/EditProductForm";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  bgcolor: "background.paper",
  p: 2,
  borderRadius: 3,
};

export default function EditProductModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton color="primary" onClick={handleOpen}>
        <CreateIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditProductForm />
        </Box>
      </Modal>
    </div>
  );
}
