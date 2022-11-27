import { Box, Divider, Grid, ListItem } from "@mui/material";
import { useEffect } from "react";
import { Provider } from "react-redux";
import LoginForm from "../components/forms/LoginForm";
import Profile from "../components/Profile";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { authenticate } from "../redux/reducers/users";
import { store } from "../redux/store";
import AddCategory from "../components/forms/AddCategoryForm";
import AddProduct from "../components/forms/AddProductForm";
import Users from "../components/lists/UsersList";
import CreateUserViaAdminForm from "../components/forms/CreateUserViaAdminForm";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import SignUpForm from "../components/forms/SignUpForm";

const Login = () => {
  const user = useAppSelector((state) => state.userReducer.currentUser);

  const dispatch = useAppDispatch(); // Automatic authentication
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(authenticate(token));
    }
  }, [dispatch, token]); //-------------------------------------

  return (
    <div>
      <Provider store={store}>
        <Box>
          <Grid container spacing={0}>
            <Grid item xs={1.5}>
              {/** Placeholder */}
            </Grid>
            <Grid item xs={8.5}>
              {!user && (
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  gap={2}
                >
                  <SignUpForm />
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    light
                    flexItem
                    sx={{ height: "25em", marginTop: 11 }}
                  />
                  <LoginForm />
                </Box>
              )}
              {user && (
                <div>
                  {user?.role === "admin" && (
                    <Box>
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
                            <OfflineBoltIcon color="primary" />
                            Admin Panel
                          </ListItem>
                        </h2>
                      </Box>
                      <Divider variant="middle" />
                      <Box display="flex" justifyContent="space-evenly">
                        <CreateUserViaAdminForm />
                        <AddCategory />
                        <AddProduct />
                      </Box>
                    </Box>
                  )}
                </div>
              )}
              {/**MODIFY IT PROPERLY  */}
              <div>
                {user?.role === "admin" && (
                  <div>
                    <Users />
                  </div>
                )}
              </div>
            </Grid>
            <Grid item xs={2}>
              <Profile />
            </Grid>
          </Grid>
        </Box>
      </Provider>
    </div>
  );
};

export default Login;
