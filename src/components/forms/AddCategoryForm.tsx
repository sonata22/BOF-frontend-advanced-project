import { Box } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAppDispatch } from "../../redux/hooks";
import { addCategory } from "../../redux/reducers/categories";
import { AddCategoryFormData } from "../../types/forms/AddCategoryForm";

const AddCategory = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<AddCategoryFormData>(); //returns 1 object with many methods
  const renderAddCategoryForm: SubmitHandler<AddCategoryFormData> = (data) => {
    dispatch(addCategory(data));
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(renderAddCategoryForm)}>
        <Box display="flex" flexDirection="column" width="15em">
          <h1>Add Category</h1>
          <label htmlFor="name">Category Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Hats"
            id="name"
          />
          <label htmlFor="image">Category Image URL</label>
          <input
            type="url"
            {...register("image", { required: true })}
            id="image"
            placeholder="https://www.img.com/img.png"
            pattern="https://.*"
          />
          <button type="submit">Create</button>
        </Box>
      </form>
    </div>
  );
};

export default AddCategory;
