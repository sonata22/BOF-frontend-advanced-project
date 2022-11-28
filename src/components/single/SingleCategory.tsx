import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchSingleCategory } from "../../redux/reducers/categories";
import CreateIcon from "@mui/icons-material/Create";
import EditCategoryModal from "../modals/EditCategoryModal";

const SingleCategory = () => {
  const params = useParams();
  const categoryId = Number(params.categoryId);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (categoryId) {
      dispatch(fetchSingleCategory(categoryId));
    }
  }, [dispatch, categoryId]);
  const category = useAppSelector(
    (state) => state.categoryReducer.singleCategory
  );
  if (!category) {
    return <h3>Loading</h3>;
  }
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      gap={0}
    >
      <Avatar alt={category.name} src={category.image} />
      <Typography
        color="primary"
        variant="button"
        padding={2}
        fontSize={18}
        fontWeight={550}
      >
        {category.name}
      </Typography>
      <EditCategoryModal />
    </Box>
  );
};

export default SingleCategory;
