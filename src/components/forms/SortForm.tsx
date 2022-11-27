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
    <Box display="flex" alignItems="center" gap={0.5} marginRight={4.5}>
      <Button
        startIcon={<UnfoldMore />}
        variant="text"
        onClick={sortByPrice}
        color="primary"
        size="small"
      >
        $
      </Button>
      <Button
        variant="text"
        onClick={sortByTitleAsc}
        color="primary"
        size="small"
      >
        A-Z
      </Button>
      <Button
        variant="text"
        onClick={sortByTitleDesc}
        color="primary"
        size="small"
      >
        Z-A
      </Button>
    </Box>
  );
};

export default SortForm;
