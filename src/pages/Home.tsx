import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Item from "@mui/material";

import React, { useEffect } from "react";
import { Provider } from "react-redux";

import { store } from "../redux/store";
import Products from "../components/ProductsList";
import Users from "../components/UsersList";
import NavBar from "../components/NavBar";
import AddProduct from "../components/AddProduct";
import AddCategory from "./AddCategoryForm";
import ProgressLog from "./ProgressLog";
import { useAppDispatch } from "../redux/hooks";
import { authenticate } from "../redux/reducers/users";
import SignUpForm from "../components/SignUpForm";

const Home = () => {
  //this is reauthentication upon opening


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
              <h1>Main content</h1>
              <SignUpForm/>
            </Grid>
            <Grid item xs={3}>
              <ProgressLog />
              <h1>Random Product</h1>
            </Grid>
          </Grid>
        </Box>
      </Provider>
    </div>
  );
};

export default Home;
