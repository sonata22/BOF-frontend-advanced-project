import { Box, Grid } from "@mui/material";
import React from "react";
import ProductsList from "../components/ProductsList";
import AddCategory from "./AddCategoryForm";
import AddProduct from "./AddProduct";
import NavBar from "../components/NavBar";
import ProgressLog from "./ProgressLog";
import Users from "./Users";

const Products = () => {
  return (
    <div>
      Products Page
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            {/**<NavBar /> */}
          </Grid>
          <Grid item xs={7}>
            <AddProduct />
            <AddCategory />
            <h1>Main content</h1>
            <ProductsList />
          </Grid>
          <Grid item xs={3}>
            <ProgressLog />
            <Users />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Products;
