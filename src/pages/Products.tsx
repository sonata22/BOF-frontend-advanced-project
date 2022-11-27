import { Box, Button, Grid, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductsList from "../components/lists/ProductsList";
import { useAppDispatch } from "../redux/hooks";
import { sortPrice } from "../redux/reducers/products";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import SortForm from "../components/forms/SortForm";
import { authenticate } from "../redux/reducers/users";

const Products = () => {
  const dispatch = useAppDispatch(); // Automatic authentication
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(authenticate(token));
    }
  }, [dispatch, token]); //-------------------------------------
  return (
    <div>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={1.5}>
            {/* NavBar Placeholder */}
          </Grid>
          <Grid item xs={10.5}>
            <ProductsList />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Products;
