import {
  Box,
  Divider,
  IconButton,
  LinearProgress,
  List,
  ListItem,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Link } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import { positions } from "@mui/system";
import { toggleFavourites } from "../../redux/reducers/favourites";

const FavouriteList = () => {
  const dispatch = useAppDispatch();
  const favourites = useAppSelector((state) => state.favouriteReducer);
  console.log("call from fav list",favourites)
  const product = useAppSelector((state) => state.productReducer.singleProduct);
  const onDelete = () => {
    dispatch(toggleFavourites(product));
  };
  return (
    <div>
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
            <FavoriteIcon color="primary" />
            Featured
          </ListItem>
        </h2>
      </Box>
      <Divider variant="fullWidth" />
      {favourites.length > 0 ? (
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
        >
          {favourites.map((item) => (
            <List key={item.id}>
              <Box
                width={210}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <IconButton onClick={onDelete} sx={{ position: "fixed" }}>
                  <CancelIcon />
                </IconButton>
                {item.images && (
                  <img src={item.images[0]} alt={item.title} width="205px" />
                )}
                <Link to={`../products/${item.id}`}>
                  <b>{item.title}</b>
                </Link>
                <i>${item.price}</i>
                {item.description}
              </Box>
            </List>
          ))}
        </Box>
      ) : (
        <i>Featured List is empty.</i>
      )}
    </div>
  );
};

export default FavouriteList;
