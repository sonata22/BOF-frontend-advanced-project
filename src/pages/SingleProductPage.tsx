import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleProduct from "../components/single/SingleProduct";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchSingleProduct } from "../redux/reducers/products";

const SingleProductPage = () => {
  return (
    <div>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            {/**<NavBar /> */}
          </Grid>
          <Grid item xs={7}>
            <SingleProduct />
          </Grid>
          <Grid item xs={3}>
            <h1>Category Info</h1>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SingleProductPage;
