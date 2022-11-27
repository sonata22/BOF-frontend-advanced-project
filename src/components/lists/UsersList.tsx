import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  LinearProgress,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
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
          <i>Users List</i>
        </h2>
      </Box>
      <Divider variant="middle" />
      <Box display="flex" flexWrap="wrap" gap={1} justifyContent="center">
        {users.map((item) => (
          <List key={item.id}>
            <Box>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar
                      alt={item.name}
                      src={item.avatar}
                      sx={{ width: 150, height: 150 }}
                    />
                  }
                  title={item.name + " | " + item.role}
                  subheader={item.email + " password: " + item.password}
                />
              </Card>
            </Box>
          </List>
        ))}
      </Box>
    </div>
  );
};

export default Users;
