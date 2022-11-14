import {
  Avatar,
  Box,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
} from "@mui/material";
import { iteratorSymbol } from "immer/dist/internal";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchAllProducts } from "../redux/reducers/products";

const Products = () => {
  const products = useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();
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
      <ul>
        {products.map((item) => (
          <List key={item.id}>
            <img src={item.images[0]} alt="Image" width="200px" />
            <ListItem>Title: {item.title}</ListItem>
            <ListItem>Description: {item.description}</ListItem>
            <ListItem>${item.price}</ListItem>
          </List>
        ))}
      </ul>
    </div>
  );
};

export default Products;
