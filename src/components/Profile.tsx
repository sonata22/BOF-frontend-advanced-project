import { Avatar, Box, Button, ListItem, ListItemText } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logOut } from "../redux/reducers/users";
import LogoutIcon from "@mui/icons-material/Logout";

const Profile = () => {
  const user = useAppSelector((state) => state.userReducer.currentUser); //read userReducer state value
  const dispatch = useAppDispatch();
  const onLogout = () => {
    dispatch(logOut());
  };
  return (
    <div>
      {user && (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          position="fixed"
          margin={1}
        >
          <h1>Profile</h1>
          <Avatar
            alt={user.name}
            src={user.avatar}
            sx={{ width: 200, height: 200 }}
          />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            lineHeight={0}
            margin={1}
          >
            <h3>User Name</h3>
            <p>{user.name}</p>
            <h3>Email</h3>
            <p>{user.email}</p>
            {/**<h3>Password</h3>
            {user.role === "admin" ? <p>{user.password}</p> : <p>*******</p>} */}
            <h3>Role</h3>
            <p>{user.role}</p>
          </Box>
          <Button
            type="button"
            variant="contained"
            endIcon={<LogoutIcon />}
            size="medium"
            onClick={onLogout}
          >
            Log Out
          </Button>
        </Box>
      )}
    </div>
  );
};

export default Profile;
