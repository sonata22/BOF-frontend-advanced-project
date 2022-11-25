import { Box, Button, Grid, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductsList from "../components/lists/ProductsList";
import { useAppDispatch } from "../redux/hooks";
import { sortPrice } from "../redux/reducers/products";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import SortForm from "../components/forms/SortForm";

const Products = () => {
  return (
    <div>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            {/** Placeholder */}
          </Grid>
          <Grid item xs={8}>
            <ProductsList />
          </Grid>
          <Grid item xs={2}>
            <SortForm />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Products;
