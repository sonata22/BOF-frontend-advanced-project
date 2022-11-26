import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { authenticate } from "../../redux/reducers/users";
import LoginIcon from "@mui/icons-material/Login";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        { email, password }
      );
      const token = response.data; // received: { "access_token": "ey...HM" }
      localStorage.setItem("token", token.access_token);
      dispatch(authenticate(token.access_token));
    } catch (error) {
      console.log(error); // temporary
    }
  };
  return (
    <div>
      <Box
        component="form"
        onSubmit={onSubmit}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={1.5}
        height={550}
      >
        <h1>Log In</h1>
        <TextField
          required
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          size="small"
          onChange={(e) => setEmail(e.target.value)} // set email value from user input
          value={email}
        />
        <TextField
          required
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          size="small"
          onChange={(e) => setPassword(e.target.value)} // set password value from user input
          value={password}
        />
        <Button
          type="submit"
          variant="contained"
          endIcon={<LoginIcon />}
          size="medium"
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default LoginForm;
