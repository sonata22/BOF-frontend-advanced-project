import { List, ListItem } from "@mui/material";
import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchSingleProduct } from "../redux/reducers/products";
import { Product } from "../types/Product";
import AddToFavourite from "./AddToFavourite";
import ProductCarousel from "./ProductCarousel";

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
      <ProductCarousel/>
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
