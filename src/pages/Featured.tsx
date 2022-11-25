import { Box, Grid } from "@mui/material";
import React from "react";
import FavouriteList from "../components/lists/FavouriteList";

const Featured = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          {/**<NavBar /> */}
        </Grid>
        <Grid item xs={8}>
          <FavouriteList />
        </Grid>
        <Grid item xs={2}>
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default Featured;
