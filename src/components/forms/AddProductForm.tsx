import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addProduct } from "../../redux/reducers/products";
import { Category } from "../../types/Category";
import { AddProductFormData } from "../../types/forms/AddProductForm";

const AddProductForm = () => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(
      addProduct({
        title: "IT's Me!",
        price: 7777,
        description: "string",
        categoryId: 1,
        images: ["string"],
      })
    );
  };
    let result = {}

  const { register, handleSubmit, reset } = useForm<AddProductFormData>(); //returns 1 object with many methods
  const renderAddProductForm: SubmitHandler<AddProductFormData> = (data) => {
    console.log(data);
    result = data
    console.log(result)
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(renderAddProductForm)}>
        <Box display="flex" flexDirection="column" width="15em">
          <h2>Add Product</h2>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            {...register("title", { required: true })}
          />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            {...register("price", { required: true })}
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            {...register("description", { required: true })}
          />
          <label htmlFor="categoryId">Category ID</label>
          <input
            type="number"
            id="categoryId"
            {...register("categoryId", { required: true })}
          />
          {/**TO FORMAT THESE TWO */}
          <label htmlFor="images">Image URL</label>
          <input
            type="url"
            id="images"
            {...register("images", { required: true })}
          />
          <button type="submit" onClick={onClick}>
            Create
          </button>
        </Box>
      </form>
    </div>
  );
};

export default AddProductForm;
