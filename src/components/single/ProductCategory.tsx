import { Avatar, Box } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchSingleProduct } from "../../redux/reducers/products";

const ProductCategory = () => {
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
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        position="fixed"
        margin={1}
      >
        <h1>{product.category?.name}</h1>
        <Avatar
          alt={product.category?.name}
          src={product.category?.image}
          sx={{ width: 200, height: 200 }}
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          lineHeight={0}
          margin={1}
        >
          <h3>Category ID</h3>
          <p>{product.category?.id}</p>
        </Box>
      </Box>
    </div>
  );
};

export default ProductCategory;
