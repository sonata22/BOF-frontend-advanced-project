import {
  Avatar,
  Box,
  Divider,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAllUsers } from "../../redux/reducers/users";
import PersonIcon from "@mui/icons-material/Person";

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
      <Box
        display="flex"
        flexDirection="row"
        paddingLeft={5}
        position="sticky"
        top={0}
        bgcolor="white"
        sx={{ zIndex: 5 }}
      >
        <h2>
          <ListItem>
            <PersonIcon color="primary" />
            Users List
          </ListItem>
        </h2>
      </Box>
      <Divider variant="middle" />
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
                    <br />
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
