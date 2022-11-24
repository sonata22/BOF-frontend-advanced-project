import { Box, Button, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { updateProduct } from "../../redux/reducers/products";
import { AddProductFormData } from "../../types/forms/AddProductForm";
import EditIcon from "@mui/icons-material/Edit";
import { useParams } from "react-router-dom";

const EditProductForm = () => {
  const params = useParams();
  const product = useAppSelector((state) => state.productReducer.singleProduct);
  const productId = Number(params.productId);
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<AddProductFormData>();
  const renderAddProductForm: SubmitHandler<AddProductFormData> = (data) => {
    try {
      dispatch(
        updateProduct({
          id: productId,
          data: {
            title: data.title,
            price: data.price,
            description: data.description,
            categoryId: data.categoryId,
            images: [data.image1, data.image2, data.image3],
          },
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
        <h2>Edit Product</h2>
        <TextField
          id="title"
          label="Product Title"
          type="text"
          variant="outlined"
          size="small"
          placeholder="Fez"
          {...register("title")}
          defaultValue={product?.title}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="price"
          label="Price"
          type="number"
          variant="outlined"
          size="small"
          placeholder="12"
          {...register("price")}
          defaultValue={product?.price}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="description"
          label="Description"
          type="text"
          variant="outlined"
          size="small"
          placeholder="This is the best hat ever"
          {...register("description")}
          defaultValue={product?.description}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="categoryId"
          label="Category ID"
          type="number"
          variant="outlined"
          size="small"
          placeholder="1"
          {...register("categoryId")}
          defaultValue={product?.category?.id}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="image1"
          label="Image URL #1"
          type="url"
          variant="outlined"
          size="small"
          placeholder="https://"
          {...register("image1")}
          defaultValue={product?.images[0]}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="image2"
          label="Image URL #2"
          type="url"
          variant="outlined"
          size="small"
          placeholder="https://"
          {...register("image2")}
          defaultValue={product?.images[1]}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="image3"
          label="Image URL #3"
          type="url"
          variant="outlined"
          size="small"
          placeholder="https://"
          {...register("image3")}
          defaultValue={product?.images[2]}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          type="submit"
          variant="contained"
          startIcon={<EditIcon />}
          size="medium"
          color="secondary"
        >
          Update
        </Button>
      </Box>
    </form>
  );
};

export default EditProductForm;
