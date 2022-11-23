import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { deleteProduct } from "../../redux/reducers/products";

const DeleteProduct = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const productId = Number(params.productId);
  const onClick = () => {
    dispatch(deleteProduct(productId));
    navigate(-1);
  };
  return (
    <div>
      <IconButton onClick={onClick}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default DeleteProduct;
