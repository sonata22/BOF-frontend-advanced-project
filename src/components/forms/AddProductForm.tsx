import { Box, Button, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";

import { useAppDispatch } from "../../redux/hooks";
import { addProduct } from "../../redux/reducers/products";
import { AddProductFormData } from "../../types/forms/AddProductForm";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const AddProductForm = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<AddProductFormData>(); //returns 1 object with many methods
  const renderAddProductForm: SubmitHandler<AddProductFormData> = (data) => {
    try {
      dispatch(
        addProduct({
          title: data.title,
          price: data.price,
          description: data.description,
          categoryId: data.categoryId,
          images: [data.image1, data.image2, data.image3],
        })
      );
      reset();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(renderAddProductForm)}>
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
        <h2>Add Product</h2>
        <TextField
          required
          id="title"
          label="Product Title"
          type="text"
          variant="outlined"
          size="small"
          placeholder="Fez"
          {...register("title")}
        />
        <TextField
          required
          id="price"
          label="Price"
          type="number"
          variant="outlined"
          size="small"
          placeholder="12"
          {...register("price")}
        />
        <TextField
          required
          id="description"
          label="Description"
          type="text"
          variant="outlined"
          size="small"
          placeholder="This is the best hat ever"
          {...register("description")}
        />
        <TextField
          required
          id="categoryId"
          label="Category ID"
          type="number"
          variant="outlined"
          size="small"
          placeholder="1"
          {...register("categoryId")}
        />
        {/**TO FORMAT THESE TWO */}
        <TextField
          required
          id="image1"
          label="Image URL #1"
          type="url"
          variant="outlined"
          size="small"
          placeholder="https://"
          {...register("image1")}
        />
        <TextField
          id="image2"
          label="Image URL #2"
          type="url"
          variant="outlined"
          size="small"
          placeholder="https://"
          {...register("image2")}
        />
        <TextField
          id="image3"
          label="Image URL #3"
          type="url"
          variant="outlined"
          size="small"
          placeholder="https://"
          {...register("image3")}
        />
        <Button
          type="submit"
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          size="medium"
          color="secondary"
        >
          Create
        </Button>
      </Box>
    </form>
  );
};

export default AddProductForm;
