import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Link } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import { removeFromFav } from "../../redux/reducers/favourites";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

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
          <i>Featured</i>
        </h2>
      </Box>
      <Divider variant="fullWidth" />
      {favourites.length > 0 ? (
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={1}
        >
          {favourites.map((item) => (
            <List key={item.id}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={
                      <Avatar alt={item.title} src={item.category?.image} />
                    }
                    action={
                      <IconButton onClick={() => onDelete(item.id!)}>
                        <CancelIcon />
                      </IconButton>
                    }
                    title={item.title}
                    subheader={item.category?.name}
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={item.images[0]}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <Box
                    display="flex"
                    flexDirection="row-reverse"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <CardActions>
                      <Link to={`../products/${item.id}`}>
                        <IconButton color="primary">
                          <ReadMoreIcon />
                        </IconButton>
                      </Link>
                    </CardActions>
                    <Box paddingLeft={1.5}>${item.price}</Box>
                  </Box>
                </Card>
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
