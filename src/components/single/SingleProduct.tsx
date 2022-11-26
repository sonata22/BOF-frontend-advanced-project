import { Box, Divider, IconButton, ListItem } from "@mui/material";
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
        paddingLeft={1}
        position="sticky"
        top={0}
        bgcolor="white"
        sx={{ zIndex: 5 }}
      >
        <h2>
          <ListItem>
            <InsertDriveFileIcon color="primary" />
            {product.title} <i>${product.price}</i>
          </ListItem>
        </h2>
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
        {user?.role === "admin" ? (
          <Box display="flex">
            <IconButton color="primary">
              <AddShoppingCartIcon />
            </IconButton>
            <AddToFavourite />
            <EditProductModal />
            <DeleteProduct />
          </Box>
        ) : (
          <Box>
            <IconButton color="primary">
              <AddShoppingCartIcon />
            </IconButton>
            <AddToFavourite />
          </Box>
        )}
      </Box>
      <h3>Description</h3>
      <p>{product.description}</p>
      <i>Product ID: {product.id}</i>
    </div>
  );
};

export default SingleProduct;
