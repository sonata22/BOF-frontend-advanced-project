import { Box, Grid } from "@mui/material";
import React from "react";
import SingleCategory from "../components/single/SingleCategory";

const SingleCategoryPage = () => {
  return (
    <div>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            {/**<NavBar /> */}
          </Grid>
          <Grid item xs={7.5}>
            <h1>Products in This Category</h1>
          </Grid>
          <Grid item xs={2.5}>
            <SingleCategory />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SingleCategoryPage;
