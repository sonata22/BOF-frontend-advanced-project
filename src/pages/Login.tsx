import { Box, Divider, Grid } from "@mui/material";
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

const Login = () => {
  const user = useAppSelector((state) => state.userReducer.currentUser); //read userReducer state value

  const dispatch = useAppDispatch(); // Authenticate automapically upon reload until token expire
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(authenticate(token));
    }
  }, [dispatch, token]); //------------------------------------------------------------------

  return (
    <div>
      <Provider store={store}>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              {/** Placeholder */}
            </Grid>
            <Grid item xs={7.5}>
              {!user && <LoginForm />}
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
                          <OfflineBoltIcon color="primary" />
                          Admin Panel
                        </h2>
                      </Box>
                      <Divider variant="middle" />
                      <Box display="flex" justifyContent="space-evenly" gap={1}>
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
            <Grid item xs={2.5}>
              <Profile />
            </Grid>
          </Grid>
        </Box>
      </Provider>
    </div>
  );
};

export default Login;
