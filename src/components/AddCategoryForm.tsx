import { Box } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../redux/hooks";
import { addCategory } from "../redux/reducers/categories";
import { AddCategoryFormData } from "../types/forms/AddCategoryForm";

const AddCategory = () => {
  const dispatch = useAppDispatch();
  const onClick = () => {
    
  };

  const { register, handleSubmit, reset } = useForm<AddCategoryFormData>(); //returns 1 object with many methods
  const renderAddCategoryForm: SubmitHandler<AddCategoryFormData> = (data) => {
    console.log(data);
    dispatch(
      addCategory(data)
    );
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(renderAddCategoryForm)}>
        <Box display="flex" flexDirection="column">
          <h1>Add Category</h1>
          <label htmlFor="name">Category Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            id="name"
          />
          <label htmlFor="image">Category Image URL</label>
          <input
            type="url"
            {...register("image", { required: true })}
            id="image"
            placeholder="https://example.com"
            pattern="https://.*"
          />
          <button type="submit" onClick={onClick}>
            Create
          </button>
        </Box>
      </form>
    </div>
  );
};

export default AddCategory;
