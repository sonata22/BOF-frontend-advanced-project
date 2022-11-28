import { Avatar, Box, Button, Typography } from "@mui/material";
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
          <Typography
            color="text.secondary"
            variant="h5"
            padding={2}
            fontWeight={550}
          >
            Profile
          </Typography>
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
            <Typography
              color="text.secondary"
              variant="h6"
              padding={2}
              fontWeight={550}
            >
              User Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.name}
            </Typography>
            <Typography
              color="text.secondary"
              variant="h6"
              padding={2}
              fontWeight={550}
            >
              Email
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.email}
            </Typography>
            <Typography
              color="text.secondary"
              variant="h6"
              padding={2}
              fontWeight={550}
            >
              Role
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.role}
            </Typography>
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
