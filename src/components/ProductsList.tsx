import {
  Avatar,
  Box,
  LinearProgress,
  Link,
  List,
  ListItem,
  ListItemAvatar,
} from "@mui/material";
import { iteratorSymbol } from "immer/dist/internal";
import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchAllProducts, updateProduct } from "../redux/reducers/products";

const ProductsList = () => {
  const products = useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();
  const onEdit = () => {
    dispatch(
      updateProduct({
        id: 3,
        data: {
          id: 3,
          title: "THIS is changed product",
          price: 300,
          description: "This changed product is highly not recommended to buy",
          images: [
            "https://api.lorem.space/image/watch?w=640&h=480&r=6151",
            "https://api.lorem.space/image/watch?w=640&h=480&r=2296",
            "https://api.lorem.space/image/watch?w=640&h=480&r=1097",
          ],
        },
      })
    );
  };
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  if (products.length === 0) {
    return (
      <div>
        <h1>Products List</h1>
        <LinearProgress />
      </div>
    );
  }
  return (
    <div>
      <h1>Products List</h1>
      <Box display="flex" flexDirection="row">
        <Carousel navButtonsAlwaysVisible={true} fullHeightHover={true}>
          {products.map((item) => (
            <List key={item.id}>
              <img src={item.images[0]} alt="Image" width="200px" />
              {/** <Link to={`products/${item.id}`}>{item.id}</Link> */}
              <ListItem>Title: {item.title}</ListItem>
              <ListItem>Description: {item.description}</ListItem>
              <ListItem>${item.price}</ListItem>
              <Box display="flex" flexDirection="row" justifyContent="center">
                <button type="button">Like</button>
                <button type="button">Add to Cart</button>
                <button type="button" onClick={onEdit}>
                  Edit
                </button>
                <button type="button">Delete</button>
              </Box>
            </List>
          ))}
        </Carousel>
      </Box>
    </div>
  );
};

export default ProductsList;
