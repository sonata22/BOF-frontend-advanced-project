import {
  Avatar,
  Box,
  Divider,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { isTemplateExpression } from "typescript";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchAllUsers } from "../redux/reducers/users";

const Users = () => {
  const users = useAppSelector((state) => state.userReducer.users);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);
  if (users.length === 0) {
    return (
      <div>
        <h1>Products List</h1>
        <LinearProgress />
      </div>
    );
  }
  return (
    <div>
      <Box display="flex" justifyContent="center">
        <h1>List of All Users</h1>
      </Box>
      <ul>
        {users.map((item) => (
          <List key={item.id}>
            <ListItem alignItems="center">
              <ListItemAvatar>
                <Avatar
                  alt={item.name}
                  src={item.avatar}
                  sx={{ width: 100, height: 100, m: "0em 0.7em" }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={
                  <React.Fragment>
                    {item.email}
                    <br/>
                    {item.role}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        ))}
      </ul>
    </div>
  );
};

export default Users;

/**<List key={item.id}>
            <img src={item.avatar} alt="Image" width="200px" />
            <ListItem>Name: {item.name}</ListItem>
            <ListItem>Email: {item.email}</ListItem>
            <ListItem>Role: {item.role}</ListItem>
          </List> */

/**<List
            key={item.id}
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={item.name} src={item.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.email}
                    </Typography>
                    <br />
                    {item.role}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List> */
