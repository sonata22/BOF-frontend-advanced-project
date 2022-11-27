import { IconButton } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { addToCart } from "../../redux/reducers/cart";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const ToCart = () => {
  const product = useAppSelector((state) => state.productReducer.singleProduct);
  const dispatch = useAppDispatch();
  const onClick = () => {
    product && dispatch(addToCart(product));
  };
  return (
    <div>
      <IconButton onClick={onClick} color="primary">
        <ShoppingCartIcon />
      </IconButton>
    </div>
  );
};

export default ToCart;
