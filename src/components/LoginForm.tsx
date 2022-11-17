import { Box, Button, ListItem, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { authenticate, logOut } from "../redux/reducers/users";
import LoginIcon from "@mui/icons-material/Login";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer.currentUser); //read userReducer state value

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

  const onLogout = () => {
    dispatch(logOut());
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
        gap={1}
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

      {user && (
        <div>
          <h2>Profile</h2>
          <img src={user.avatar} alt={user.name} width="200" />
          <p>Nickname: {user.name}</p>
          <p>Email: {user.email}</p>
          <ListItem>
            <p>Password: </p>
            {user.role === "admin" ? <p>{user.password}</p> : <p>*******</p>}
          </ListItem>
          <p>Role: {user.role}</p>
          <button type="button" onClick={onLogout}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
function handleChange(
  arg0: string
):
  | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  | undefined {
  throw new Error("Function not implemented.");
}

function setValues(arg0: any) {
  throw new Error("Function not implemented.");
}
