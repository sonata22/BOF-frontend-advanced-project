import { useEffect } from "react";
import { Link } from "react-router-dom";
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
  LinearProgress,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAllProducts } from "../../redux/reducers/products";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { red } from "@mui/material/colors";
import { ExpandMore } from "@mui/icons-material";
import SortForm from "../forms/SortForm";

const ProductsList = () => {
  const products = useAppSelector((state) => state.productReducer.products);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  return (
    <div>
      <Box
        display="flex"
        flexDirection="row"
        paddingLeft={5}
        position="sticky"
        justifyContent="space-between"
        top={0}
        bgcolor="background.default"
        sx={{ zIndex: 5 }}
      >
        <Typography
          color="primary"
          variant="button"
          padding={2}
          fontSize={18}
          fontWeight={550}
        >
          All Products
        </Typography>
        <SortForm />
      </Box>
      <Divider variant="middle" />
      {products.length > 0 ? (
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={1}
        >
          {products.map((item) => (
            <List key={item.id}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={
                      <Avatar alt={item.title} src={item.category?.image} />
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
                      <Link to={JSON.stringify(item.id)}>
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
        <LinearProgress />
      )}
    </div>
  );
};

export default ProductsList;
