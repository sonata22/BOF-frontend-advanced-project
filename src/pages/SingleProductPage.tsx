import { Box, Grid } from "@mui/material";
import EditProductForm from "../components/forms/EditProductForm";
import ProductCategory from "../components/single/ProductCategory";
import SingleProduct from "../components/single/SingleProduct";
import { useAppSelector } from "../redux/hooks";

const SingleProductPage = () => {
  const user = useAppSelector((state) => state.userReducer.currentUser); //read userReducer state value

  return (
    <div>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            {/**<NavBar /> */}
          </Grid>
          <Grid item xs={7.5}>
            <SingleProduct />
          </Grid>
          <Grid item xs={2.5}>
            {user?.role === "admin" && <EditProductForm />}
            <ProductCategory />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SingleProductPage;
