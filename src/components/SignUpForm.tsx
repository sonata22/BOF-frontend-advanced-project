import { Box } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpFormData } from "../types/forms/SignUpForm";

const SignUpForm = () => {
  const { register, handleSubmit, reset } = useForm<SignUpFormData>(); //returns 1 object with many methods

  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    console.log(data);
    reset();
  };
  let inputRef: HTMLInputElement | null = null;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width="13em"
      >
        Sign Up
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          {...register("password", { required: true })}
        />
        <label htmlFor="re_password">Retype Password: </label>
        <input
          type="password"
          id="re_password"
          {...register("re_password", { required: true })}
        />
        <button type="submit">Sign Up</button>
      </Box>
    </form>
  );
};

export default SignUpForm;
