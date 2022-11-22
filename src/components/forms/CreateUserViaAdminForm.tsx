import { Box } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addUser } from "../../redux/reducers/users";
import { SignUpFormData } from "../../types/forms/SignUpForm";

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
        width="15em"
      >
        <h1>Register User</h1>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          placeholder="Nata"
          {...register("name", { required: true })}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          placeholder="nata@mail.com"
          {...register("email", { required: true })}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          placeholder="NoMorePeanutsToday123!"
          {...register("password", { required: true })}
        />
        <label htmlFor="re_password">Retype Password: </label>
        <input
          name="re_password"
          type="password"
          id="re_password"
          placeholder="NoMorePeanutsToday123!"
        />
        <label htmlFor="role">Role</label>
        <select id="role" {...register("role", { required: true })}>
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>
        <label htmlFor="avatar">Avatar URL: </label>
        <input
          type="url"
          id="avatar"
          placeholder="https://www.img.com/img.png"
          {...register("avatar", { required: true })}
        />
        <button type="submit">Register</button>
      </Box>
    </form>
  );
};

export default CreateUserViaAdminForm;
