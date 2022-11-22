import { Box, Button, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAppDispatch } from "../../redux/hooks";
import { addCategory } from "../../redux/reducers/categories";
import { AddCategoryFormData } from "../../types/forms/AddCategoryForm";
import AddIcon from "@mui/icons-material/Add";

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
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={1}
          sx={{
            "& .MuiTextField-root": { width: "25ch" },
          }}
        >
          <h2>Add Category</h2>
          <TextField
            required
            id="categoryName"
            label="Category Name"
            type="text"
            variant="outlined"
            size="small"
            placeholder="Hats"
            {...register("name", { required: true })}
          />
          <TextField
            required
            id="CategoryImage"
            label="Category Image"
            type="url"
            variant="outlined"
            size="small"
            placeholder="https://"
            {...register("image", { required: true })}
          />
          <Button
            type="submit"
            variant="contained"
            endIcon={<AddIcon />}
            size="medium"
          >
            Create
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddCategory;
