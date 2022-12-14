import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItem,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchSingleProduct } from "../../redux/reducers/products";
import AddToFavourite from "../buttons/ToFavourites";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteProduct from "../buttons/DeleteProduct";
import { authenticate } from "../../redux/reducers/users";
import EditProductModal from "../modals/EditProductModal";
import ToCart from "../buttons/ToCart";
import SingleCategory from "./SingleCategory";

const SingleProduct = () => {
  const user = useAppSelector((state) => state.userReducer.currentUser); //read userReducer state value
  const params = useParams();
  const productId = Number(params.productId);
  const dispatch = useAppDispatch(); // Authenticate automapically upon reload until token expire
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(authenticate(token));
    }
  }, [dispatch, token]); //------------------------------------------------------------------
  const product = useAppSelector((state) => state.productReducer.singleProduct);
  useEffect(() => {
    if (productId) {
      dispatch(fetchSingleProduct(productId));
    }
  }, [dispatch, productId]);
  if (!product) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      <Box
        display="flex"
        flexDirection="row"
        paddingLeft={0}
        position="sticky"
        top={0}
        bgcolor="background.default"
        sx={{ zIndex: 5 }}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap={0}
        >
          <Avatar alt={product.category?.name} src={product.category?.image} />
          <Typography
            color="primary"
            variant="button"
            padding={2}
            fontSize={18}
            fontWeight={550}
          >
            {product.category?.name + ":"}
          </Typography>
        </Box>
        <Typography
          color="primary"
          variant="button"
          padding={2}
          fontSize={18}
          fontWeight={550}
        >
          {product.title} ${product.price}
        </Typography>
      </Box>
      <Divider variant="fullWidth" />
      {product.images && (
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={1}
          margin={1}
        >
          <img src={product.images[0]} alt="" width="500" />
          <Box display="flex" flexDirection="column">
            <img src={product.images[1]} alt="" width="167" />
            <img src={product.images[2]} alt="" width="167" />
            <img src={product.images[1]} alt="" width="167" />
          </Box>
        </Box>
      )}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        gap={1}
        margin={1}
      >
        {user?.role === "admin" && (
          <Box display="flex">
            <ToCart />
            <AddToFavourite />
            <EditProductModal />
            <DeleteProduct />
          </Box>
        )}
        {user?.role === "customer" && (
          <Box display="flex">
            <ToCart />
            <AddToFavourite />
          </Box>
        )}
      </Box>
      <Typography variant="body2" color="text.primary" fontWeight={550} fontSize={15} >
        Description:
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Product ID: {product.id}
      </Typography>
    </div>
  );
};

export default SingleProduct;
