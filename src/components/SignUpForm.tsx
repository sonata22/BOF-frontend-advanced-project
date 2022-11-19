import { Box } from '@mui/material';
import React from 'react'

const SignUpForm = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" width="13em">
      Sign Up
      <label htmlFor="name">Name: </label>
      <input type="text" name="name" id="name" />
      <label htmlFor="email">Email: </label>
      <input type="email" name="email" id="email" />
      <label htmlFor="password">Password: </label>
      <input type="password" name="password" id="password" />
      <label htmlFor="re_password">Retype Password: </label>
      <input type="password" name="re_password" id="re_password" />
      <button type="submit">Sign Up</button>
    </Box>
  );
}

export default SignUpForm