import { Box, Button, Card, MenuItem, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../redux/hooks";
import { addUser } from "../../redux/reducers/users";
import { SignUpFormData } from "../../types/forms/SignUpForm";
import PersonIcon from "@mui/icons-material/Person";

const CreateUserViaAdminForm = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<SignUpFormData>();
  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    dispatch(addUser(data));
    reset();
  };
  return (
    <Box margin={1}>
      <Card sx={{ maxWidth: 345 }}>
        <Box
          component="form"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={1}
          margin={2}
          sx={{
            "& .MuiTextField-root": { width: "25ch" },
          }}
          onSubmit={handleSubmit(onSubmit)}
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
            startIcon={<PersonIcon />}
            size="medium"
            color="secondary"
          >
            Register
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default CreateUserViaAdminForm;
