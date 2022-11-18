import { List, ImageListItem, ImageList, Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchSingleProduct } from "../redux/reducers/products";
import { Product } from "../types/Product";
import AddToFavourite from "./AddToFavourite";
import { stringify } from "querystring";
import ReactDOM from "react-dom";
import ProgressLog from "../pages/ProgressLog";

const SingleProduct = () => {
  // Accessing value of a URL
  const params = useParams();
  const productId = Number(params.productId);

  const product = useAppSelector((state) => state.productReducer.singleProduct);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(fetchSingleProduct(productId));
    }
  }, [dispatch, productId]);

  if (!product) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={8}>
            <img src={product.images[0]} alt="" width="500" />
          </Grid>
          <Grid item xs={4}>
            <img src={product.images[1]} alt="" width="200" />
            <img src={product.images[2]} alt="" width="200" />
          </Grid>
        </Grid>
      </Box>

      <h3>Product ID</h3>
      <p>{product.id}</p>
      <h3>Title</h3>
      <p>{product.title}</p>
      <h3>Price</h3>
      <p>${product.price}</p>
      <h3>Description</h3>
      <p>{product.description}</p>
      <h3>Category</h3>
      <p>{product.category?.name}</p>
      <h3>Category Image</h3>
      <img src={product.category?.image} alt={product.title} width={300} />
      <h3>Images</h3>

      <button type="button">Add to Cart</button>
      <AddToFavourite />
    </div>
  );
};

export default SingleProduct;
