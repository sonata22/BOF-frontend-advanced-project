import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";

import FavouriteList from "../components/lists/FavouriteList";
import { useAppDispatch } from "../redux/hooks";
import { authenticate } from "../redux/reducers/users";

const Featured = () => {
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
          <FavouriteList />
        </Grid>
      </Grid>
    </Box>
  );
};;

export default Featured;
