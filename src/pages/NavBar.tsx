import { Box } from "@mui/material";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" position="fixed">
        <h1>Menu</h1>
        <button type="button">Sign Up</button>
        <button type="button">Sign In</button>
        <button type="button">Profile</button>
        <button type="button">Add Product</button>
        <button type="button">Add Category</button>
        <button type="button">Cart</button>
        <button type="button">Featured</button>
        <button type="button">Switch Theme</button>
        <button type="button">Music Player</button>
        <button type="button">Search Product</button>
        <button type="button">Sign Out</button>
      </Box>
    </div>
  );
};

export default NavBar;
