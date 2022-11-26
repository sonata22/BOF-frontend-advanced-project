import React from "react";
import { IconButton, ToggleButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToFav } from "../../redux/reducers/favourites";

const ToFavourites = () => {
  const product = useAppSelector((state) => state.productReducer.singleProduct);
  const dispatch = useAppDispatch();
  const onClick = () => {
    product && dispatch(addToFav(product));
  };
  return (
    <IconButton onClick={onClick} color="primary">
      <FavoriteIcon />
    </IconButton>
  );
};

export default ToFavourites;
