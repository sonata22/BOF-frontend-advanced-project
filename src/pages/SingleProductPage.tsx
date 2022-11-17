import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleProduct from "../components/SingleProduct";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchSingleProduct } from "../redux/reducers/products";

const SingleProductPage = () => {
  return (
    <div>
      <p>SingleProductPage</p>
      <SingleProduct />
    </div>
  );
};

export default SingleProductPage;
