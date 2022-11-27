import { Box, Button, Card, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAppDispatch } from "../../redux/hooks";
import { addCategory } from "../../redux/reducers/categories";
import { AddCategoryFormData } from "../../types/forms/AddCategoryForm";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const AddCategory = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<AddCategoryFormData>(); //returns 1 object with many methods
  const renderAddCategoryForm: SubmitHandler<AddCategoryFormData> = (data) => {
    dispatch(addCategory(data));
    reset();
  };
  return (
    <Box margin={1}>
      <Card sx={{ maxWidth: 345 }}>
          <Box
            component="form"
            onSubmit={handleSubmit(renderAddCategoryForm)}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={1}
            margin={2}
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
              startIcon={<ShoppingBasketIcon />}
              size="medium"
              color="secondary"
            >
              Add
            </Button>
          </Box>
      </Card>
    </Box>
  );
};

export default AddCategory;
