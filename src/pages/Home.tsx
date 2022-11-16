import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Item from "@mui/material";

import React from "react";
import { Provider } from "react-redux";

import { store } from "../redux/store";
import Products from "../components/ProductsList";
import Users from "./Users";
import NavBar from "../components/NavBar";
import AddProduct from "./AddProduct";
import AddCategory from "./AddCategoryForm";
import ProgressLog from "./ProgressLog";

const Home = () => {
  return (
    <div>
      This is Home page
      <Provider store={store}>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              {/**<NavBar /> */}
            </Grid>
            <Grid item xs={7}>
              <AddProduct />
              <AddCategory />
              <h1>Main content</h1>
            </Grid>
            <Grid item xs={3}>
              <ProgressLog />
              <Users />
            </Grid>
          </Grid>
        </Box>
      </Provider>
    </div>
  );
};

export default Home;
