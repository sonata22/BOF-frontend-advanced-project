import { Box, Divider, Grid, ListItem } from "@mui/material";
import React, { useEffect } from "react";
import CategoryIcon from "@mui/icons-material/Category";

import ProductsByCategory from "../components/lists/ProductsByCategory";
import SingleCategory from "../components/single/SingleCategory";
import { useAppDispatch } from "../redux/hooks";
import { authenticate } from "../redux/reducers/users";

const SingleCategoryPage = () => {
  const dispatch = useAppDispatch(); // Automatic authentication
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(authenticate(token));
    }
  }, [dispatch, token]); //-------------------------------------
  return (
    <Box>
      <Grid container spacing={0}>
        <Grid item xs={1.5}>
          {/**<NavBar /> */}
        </Grid>
        <Grid item xs={10.5}>
          <ProductsByCategory />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SingleCategoryPage;
