import { Box, Grid } from "@mui/material";
import React from "react";
import ProductsList from "../components/lists/ProductsList";
import AddCategory from "../components/forms/AddCategoryForm";
import AddProduct from "../components/forms/AddProductForm";
import NavBar from "../components/NavBar";
import ProgressLog from "../components/ProgressLog";
import Users from "../components/lists/UsersList";
import RandomNum from "../components/RandomNum";

const Products = () => {
  return (
    <div>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            {/**<NavBar /> */}
          </Grid>
          <Grid item xs={8}>
            <ProductsList />
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Products;
