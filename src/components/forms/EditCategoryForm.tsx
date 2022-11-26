import { Box, Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
import SaveIcon from "@mui/icons-material/Save";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { EditCategoryFormData } from "../../types/forms/EditCategoryFormData";
import { useParams } from "react-router-dom";
import {
  fetchSingleCategory,
  updateCategory,
} from "../../redux/reducers/categories";

const EditCategoryForm = () => {
  const params = useParams();
  const categoryId = Number(params.categoryId);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (categoryId) {
      dispatch(fetchSingleCategory(categoryId));
    }
  });
  const category = useAppSelector(
    (state) => state.categoryReducer.singleCategory
  );
  const { register, handleSubmit, reset } = useForm<EditCategoryFormData>();
  const onSubmit: SubmitHandler<EditCategoryFormData> = (data) => {
    dispatch(updateCategory({ id: categoryId, data: data }));
    reset();
  };
  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={1}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2>Update Category</h2>
      <TextField
        required
        id="name"
        label="Category Name"
        type="text"
        variant="outlined"
        size="small"
        placeholder="Furniture"
        {...register("name")}
        defaultValue={category?.name}
      />
      <TextField
        required
        id="url"
        label="Category Image URL"
        type="url"
        variant="outlined"
        size="small"
        placeholder="https://"
        {...register("image")}
        defaultValue={category?.image}
      />
      <Button
        type="submit"
        variant="contained"
        startIcon={<SaveIcon />}
        size="medium"
        color="primary"
      >
        Save
      </Button>
    </Box>
  );
};

export default EditCategoryForm;
