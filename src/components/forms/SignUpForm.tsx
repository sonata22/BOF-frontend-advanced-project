import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../redux/hooks";
import { addUser, authenticate } from "../../redux/reducers/users";
import { SignUpFormData } from "../../types/forms/SignUpForm";
import PersonIcon from "@mui/icons-material/Person";

const SignUpForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm<SignUpFormData>();

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    dispatch(addUser(data));
    const email = data.email;
    const password = data.password;
    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        { email, password }
      );
      const token = response.data; // received: { "access_token": "ey...HM" }
      localStorage.setItem("token", token.access_token);
      dispatch(authenticate(token.access_token));
    } catch (error) {
      alert(error); // temporary
    }
    reset();
    navigate("/login");
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
        <Typography
          color="primary"
          variant="button"
          padding={2}
          fontSize={22}
          fontWeight={550}
        >
          Sign Up
        </Typography>
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
          endIcon={<PersonIcon />}
          size="medium"
          color="secondary"
        >
          Sign Up
        </Button>
      </Box>
    </form>
  );
};

export default SignUpForm;
