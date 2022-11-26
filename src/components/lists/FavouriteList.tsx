import { Box, Divider, IconButton, List, ListItem } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Link } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import { removeFromFav } from "../../redux/reducers/favourites";

const FavouriteList = () => {
  const dispatch = useAppDispatch();
  const favourites = useAppSelector((state) => state.favouriteReducer);
  console.log("call from fav list", favourites);
  const product = useAppSelector((state) => state.productReducer.singleProduct);
  const onDelete = (id: number) => {
    dispatch(removeFromFav(id));
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
                {item.images && (
                  <img src={item.images[0]} alt={item.title} width="205px" />
                )}
                <Link to={`../products/${item.id}`}>
                  <b>{item.title}</b>
                </Link>
                <i>${item.price}</i>
                {item.description}
                <IconButton
                  onClick={() => onDelete(item.id!)}
                  sx={{ position: "relative" }}
                >
                  <CancelIcon />
                </IconButton> 
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
