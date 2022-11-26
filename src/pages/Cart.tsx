import { Box, Divider, Grid, ListItem } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategoryIcon from "@mui/icons-material/Category";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { authenticate } from "../redux/reducers/users";

const Cart = () => {
  const navigate = useNavigate(); //error says it needs to be wrapped in useEffect
  const user = useAppSelector((state) => state.userReducer.currentUser);
  const dispatch = useAppDispatch(); // Automatic authentication
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(authenticate(token));
    }
  }, [dispatch, token]); //-------------------------------------
  if (!user) {
    navigate("/login");
  }

  return (
    <Box>
      <Grid container spacing={0}>
        <Grid item xs={1.5}></Grid>
        <Grid item xs={8.5}>
          <Box
            display="flex"
            flexDirection="row"
            paddingLeft={5}
            position="sticky"
            top={0}
            bgcolor="white"
            sx={{ zIndex: 5 }}
          >
            <h2>
              <ListItem>
                <CategoryIcon color="primary" />
                Cart
              </ListItem>
            </h2>
          </Box>
          <Divider variant="middle" />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
