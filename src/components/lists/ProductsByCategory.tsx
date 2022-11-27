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
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAllProducts } from "../../redux/reducers/products";
import SingleCategory from "../single/SingleCategory";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

const ProductsByCategory = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  const list = useAppSelector((state) => state.productReducer.products);
  const params = useParams();
  const categoryId = Number(params.categoryId);
  const tempList = list.filter((item) => item.category?.id == categoryId);
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
        <SingleCategory />
      </Box>
      <Divider variant="middle" />
      {tempList.length > 0 ? (
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={1}
        >
          {tempList.map((item) => (
            <List key={item.id}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="194"
                    image={item.images[0]}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="body1" component="div">
                      {item.title}
                    </Typography>
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
        <i>No products in this category</i>
      )}
    </div>
  );
};

export default ProductsByCategory;
