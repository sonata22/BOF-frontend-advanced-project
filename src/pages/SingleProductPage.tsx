import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchSingleProduct } from "../redux/reducers/products";

const SingleProductPage = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(fetchSingleProduct(Number(productId)));
    }
  }, [dispatch, productId]);
  console.log(productId);

  return (
    <div>
      <p>SingleProductPage</p>
    </div>
  );
};

export default SingleProductPage;
