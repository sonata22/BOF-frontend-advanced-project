import React from "react";
import { ToggleButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../redux/reducers/favourites";

const ToFavourites = () => {
  const [selected, setSelected] = React.useState(false);

  const product = useAppSelector((state) => state.productReducer.singleProduct);
  const featured = useAppSelector((state) => state.favouriteReducer.favourite);

  const dispatch = useAppDispatch();

  const onClick = () => {
    if (product && !featured.includes(product)) {
      dispatch(addToFavourites(product));
      setSelected(true);
    }
  };
  return (
    <ToggleButton value="check" selected={selected} onChange={onClick}>
      <FavoriteIcon />
    </ToggleButton>
  );
};

export default ToFavourites;
