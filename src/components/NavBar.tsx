import { Box, ListItemIcon, MenuItem, MenuList } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ForwardButton from "./ForwardButton";
import ReturnButton from "./ReturnButton";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";

const NavBar = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" position="fixed">
        <h1>Menu</h1>
        {/** Return / Forward */}
        <Box display="flex" flexDirection="row" justifyContent="center">
          <ReturnButton />
          <ForwardButton />
        </Box>

        <nav>
          <Link to="">Home</Link>
          <Link to="products">Products</Link>
          <Link to="cart">Cart</Link>
          <Link to="featured">Featured</Link>
          <Link to="search">Search</Link>
        </nav>
        <nav>
          <MenuList>
            <MenuItem>
              <ListItemIcon>
                <HomeIcon fontSize="small" color="primary" />
              </ListItemIcon>
              <Link to="">Home</Link>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <CategoryIcon fontSize="small" color="primary" />
              </ListItemIcon>
              <Link to="products">Products</Link>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <AddShoppingCartIcon fontSize="small" color="primary" />
              </ListItemIcon>
              <Link to="cart">Cart</Link>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <FavoriteIcon fontSize="small" color="primary" />
              </ListItemIcon>
              <Link to="featured">Featured</Link>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <SavedSearchIcon fontSize="small" color="primary" />
              </ListItemIcon>
              <Link to="search">Search</Link>
            </MenuItem>
          </MenuList>
        </nav>
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
