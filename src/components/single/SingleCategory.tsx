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
  const category = useAppSelector(
    (state) => state.categoryReducer.singleCategory
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (categoryId) {
      dispatch(fetchSingleCategory(categoryId));
    }
  }, [dispatch, categoryId]);
  if (!category) {
    return <h1>Loading</h1>;
  }
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      gap={1}
    >
      <Avatar alt={category.name} src={category.image} />
      <h2>
        <i>{category.name}</i>
      </h2>
      <EditCategoryModal />
    </Box>
  );
};

export default SingleCategory;
