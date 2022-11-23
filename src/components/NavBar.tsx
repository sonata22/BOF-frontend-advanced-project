import { Box, ListItemIcon, MenuItem, MenuList } from "@mui/material";
import { Link } from "react-router-dom";
import ForwardButton from "./buttons/ForwardButton";
import ReturnButton from "./buttons/ReturnButton";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import LoginIcon from "@mui/icons-material/Login";
import { useAppSelector } from "../redux/hooks";
import PersonIcon from "@mui/icons-material/Person";

const NavBar = () => {
  const user = useAppSelector((state) => state.userReducer.currentUser); // get value of currentUser

  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        position="fixed"
        justifyContent="center"
        alignItems="center"
        margin={1}
      >
        <h1>Menu</h1>
        {/** Return / Forward */}
        <Box display="flex" flexDirection="row" justifyContent="center">
          <ReturnButton />
          <ForwardButton />
        </Box>
        {/** Side Menu */}
        <nav>
          <MenuList>
            <MenuItem>
              <ListItemIcon>
                <HomeIcon fontSize="small" color="primary" />
              </ListItemIcon>
              <Link to="">Home</Link>
            </MenuItem>
            {!user ? (
              <MenuItem>
                <ListItemIcon>
                  <LoginIcon fontSize="small" color="primary" />
                </ListItemIcon>
                <Link to="login">Log In</Link>
              </MenuItem>
            ) : (
              <MenuItem>
                <ListItemIcon>
                  <PersonIcon fontSize="small" color="primary" />
                </ListItemIcon>
                <Link to="login">Profile</Link>
              </MenuItem>
            )}
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
        To Be Implemented:
        <button type="button" disabled={user ? false : true}>
          Cart
        </button>
        <button type="button">Featured</button>
        <button type="button">Switch Theme</button>
        <button type="button">Music Player</button>
        <button type="button">Search Product</button>
      </Box>
    </div>
  );
};

export default NavBar;
