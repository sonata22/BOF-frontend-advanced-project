import { List, ListItem } from "@mui/material";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchSingleProduct } from "../redux/reducers/products";

const SingleProduct = () => {
  // Accessing value of a URL
  const params = useParams();
  const productId = Number(params.productId);

  const product = useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(fetchSingleProduct(productId));
    }
  }, [dispatch, productId]);

  console.log("Single Product fetched: ", product);

if (product.length === 0) {
  return <h1>Loading</h1>;
}
  return (
    <div>
      <h1>Signle Product Page</h1>
      <div>
        Hello there
      </div>
    </div>
  );
};

export default SingleProduct;
