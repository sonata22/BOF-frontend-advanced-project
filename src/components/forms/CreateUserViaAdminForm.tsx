import { Box, Button, MenuItem, TextField } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addUser } from "../../redux/reducers/users";
import { SignUpFormData } from "../../types/forms/SignUpForm";
import AddIcon from "@mui/icons-material/Add";

const CreateUserViaAdminForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.userReducer.currentUser); //read userReducer state value
  const { register, handleSubmit, reset } = useForm<SignUpFormData>();
  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    dispatch(addUser(data));
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        <h2>Register User</h2>
        <TextField
          required
          id="username"
          label="User Name"
          type="text"
          variant="outlined"
          size="small"
          placeholder="Natali"
          {...register("name")}
        />
        <TextField
          required
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          size="small"
          placeholder="natali@mail.com"
          {...register("email")}
        />
        <TextField
          required
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          size="small"
          placeholder="NoMorePeanutsToday123!"
          {...register("password")}
        />
        <TextField
          required
          id="re_password"
          label="Confirm Password"
          type="password"
          variant="outlined"
          size="small"
          placeholder="NoMorePeanutsToday123!"
          {...register("re_password")}
        />
        <TextField
          select
          id="role"
          label="Role"
          defaultValue="customer"
          variant="outlined"
          size="small"
          {...register("role")}
        >
          <MenuItem key="customer" value="customer">
            Customer
          </MenuItem>
          <MenuItem key="admin" value="admin">
            Admin
          </MenuItem>
        </TextField>
        <TextField
          required
          id="avatar"
          label="Avatar Image URL"
          type="url"
          variant="outlined"
          size="small"
          placeholder="https://"
          {...register("avatar")}
          fullWidth={true}
        />
        <Button
          type="submit"
          variant="contained"
          endIcon={<AddIcon />}
          size="medium"
        >
          Register
        </Button>
      </Box>
    </form>
  );
};

export default CreateUserViaAdminForm;
