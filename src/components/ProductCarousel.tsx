import { Button, Paper } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { useAppSelector } from "../redux/hooks";

const ProductCarousel = () => {
  const product = useAppSelector((state) => state.productReducer.singleProduct);

  if (!product) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      <Carousel navButtonsAlwaysVisible={true}>
        <img src={product.images[0]} alt="" />
        <img src={product.images[1]} alt="" />
        <img src={product.images[2]} alt="" />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
