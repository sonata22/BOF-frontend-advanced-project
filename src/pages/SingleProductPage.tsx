import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import EditProductForm from "../components/forms/EditProductForm";
import ProductCategory from "../components/single/ProductCategory";
import SingleProduct from "../components/single/SingleProduct";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { authenticate } from "../redux/reducers/users";

const SingleProductPage = () => {
  const dispatch = useAppDispatch(); // Automatic authentication
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(authenticate(token));
    }
  }, [dispatch, token]); //-------------------------------------
  const user = useAppSelector((state) => state.userReducer.currentUser); //read userReducer state value

  return (
    <div>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={1.5}>
            {/**<NavBar /> */}
          </Grid>
          <Grid item xs={8.5}>
            <SingleProduct />
          </Grid>
          <Grid item xs={2}>
            <ProductCategory />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};;

export default SingleProductPage;
