import { Link } from "react-router-dom";
import { Box, Button, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import { generatePath } from "react-router";

import { useAppSelector } from "../redux/hooks";
import ForwardButton from "./buttons/ForwardButton";
import ReturnButton from "./buttons/ReturnButton";
import { linkStyle } from "../ui/style";
import CasinoIcon from "@mui/icons-material/Casino";
import GetRandomProductPath from "./GetRandomProductPath";
import { useEffect } from "react";

const NavBar = () => {
  const user = useAppSelector((state) => state.userReducer.currentUser);
  return (
    <Box
      display="flex"
      flexDirection="column"
      position="fixed"
      justifyContent="center"
      margin={1}
      height="90%"
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        sx={{ bgcolor: "background.default" }}
      >
        <ReturnButton />
        <ForwardButton />
      </Box>
      <Box display="flex" flexDirection="column" gap={0.3}>
        <Link to="" style={linkStyle}>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Button variant="outlined" startIcon={<HomeIcon />}>
              Home
            </Button>
          </Box>
        </Link>
        {!user ? (
          <Link to="login" style={linkStyle}>
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Button variant="outlined" startIcon={<LoginIcon />}>
                Log In
              </Button>
            </Box>
          </Link>
        ) : (
          <Link to="login" style={linkStyle}>
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Button variant="outlined" startIcon={<PersonIcon />}>
                Profile
              </Button>
            </Box>
          </Link>
        )}
        <Link to="products" style={linkStyle}>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Button variant="outlined" startIcon={<CategoryIcon />}>
              Products
            </Button>
          </Box>
        </Link>
        <Link to="cart" style={linkStyle}>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Button
              variant="outlined"
              startIcon={<AddShoppingCartIcon />}
              disabled={user ? false : true}
            >
              Cart
            </Button>
          </Box>
        </Link>
        <Link to="featured" style={linkStyle}>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Button
              variant="outlined"
              startIcon={<FavoriteIcon />}
              disabled={user ? false : true}
            >
              Featured
            </Button>
          </Box>
        </Link>
        <Link to="search" style={linkStyle}>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Button variant="outlined" startIcon={<SearchIcon />}>
              Search
            </Button>
          </Box>
        </Link>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <Link
            to={
              "/products/" + JSON.stringify(Math.floor(Math.random() * 200) + 1)
            } //URLs are cashed
            style={linkStyle}
          >
            <IconButton color="primary" aria-label="add to shopping cart">
              <CasinoIcon />
            </IconButton>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
