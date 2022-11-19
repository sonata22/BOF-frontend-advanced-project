import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { Provider } from "react-redux";
import LoginForm from "../components/LoginForm";
import Profile from "../components/Profile";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { authenticate } from "../redux/reducers/users";
import { store } from "../redux/store";
import AddCategory from "./AddCategoryForm";
import AddProduct from "./AddProduct";
import Users from "../components/UsersList";

const Login = () => {
  const user = useAppSelector((state) => state.userReducer.currentUser); //read userReducer state value

  const dispatch = useAppDispatch(); // Authenticate automapically upon reload until token expire
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(authenticate(token));
    }
  }, []); //------------------------------------------------------------------

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
                  <AddProduct />
                  <AddCategory />
                  <Users />
                </div>
              )}
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
