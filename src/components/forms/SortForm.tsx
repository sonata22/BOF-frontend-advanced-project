import { Box, Button } from "@mui/material";
import { UnfoldMore } from "@mui/icons-material";
import {
  sortPrice,
  sortTitleAsc,
  sortTitleDesc,
} from "../../redux/reducers/products";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useState } from "react";

const SortForm = () => {
  const dispatch = useAppDispatch();
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const sortByPrice = () => {
    dispatch(sortPrice(order));
    setOrder(order === "asc" ? "desc" : "asc");
  };
  const sortByTitleAsc = () => {
    dispatch(sortTitleAsc());
  };
  const sortByTitleDesc = () => {
    dispatch(sortTitleDesc());
  };

  return (
    <Box>
      <h3>Sort by:</h3>
      <Button
        startIcon={<UnfoldMore />}
        variant="outlined"
        onClick={sortByPrice}
        color="primary"
      >
        Price
      </Button>
      <Button
        startIcon={<UnfoldMore />}
        variant="outlined"
        onClick={sortByTitleAsc}
        color="primary"
      >
        Title Asc
      </Button>
      <Button
        startIcon={<UnfoldMore />}
        variant="outlined"
        onClick={sortByTitleDesc}
        color="primary"
      >
        Title Desc
      </Button>
    </Box>
  );
};

export default SortForm;
