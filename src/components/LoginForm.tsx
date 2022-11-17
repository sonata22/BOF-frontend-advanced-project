import { ListItem } from "@mui/material";
import axios from "axios";
import { stringify } from "querystring";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { authenticate, logOut } from "../redux/reducers/users";

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
    dispatch(logOut())
  };

  return (
    <div>
      <h1>LoginForm</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={email}
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)} // set email value from user input
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={password}
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)} // set password value from user input
        />
        <button type="submit">Submit</button>
      </form>
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
