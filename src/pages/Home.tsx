import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Item from "@mui/material";

import React from "react";
import { Provider } from "react-redux";

import { store } from "../redux/store";
import Products from "./Products";
import Users from "./Users";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div>
      This is Home page
      <Provider store={store}>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <NavBar />
            </Grid>
            <Grid item xs={7}>
              <h1>Main content</h1>
              <Products />
            </Grid>
            <Grid item xs={3}>
              <Users />
            </Grid>
          </Grid>
        </Box>
      </Provider>
    </div>
  );
};

export default Home;
