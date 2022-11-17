import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { Provider } from "react-redux";
import LoginForm from "../components/LoginForm";
import { useAppDispatch } from "../redux/hooks";
import { authenticate } from "../redux/reducers/users";
import { store } from "../redux/store";
import AddCategory from "./AddCategoryForm";
import AddProduct from "./AddProduct";
import Users from "./Users";

const Login = () => {

const dispatch = useAppDispatch(); // Authenticate automapically upon reload until token expire
const token = localStorage.getItem("token");
useEffect(() => {
  if (token) {
    dispatch(authenticate(token));
  }
}, []); //------------------------------------------------------------------


  return (
    <div>
      Login page
      <Provider store={store}>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              {/** Placeholder */}
            </Grid>
            <Grid item xs={7}>
              <h1>Main content</h1>
              <AddProduct />
              <AddCategory />
              <Users />
            </Grid>
            <Grid item xs={3}>
              <LoginForm />
            </Grid>
          </Grid>
        </Box>
      </Provider>
    </div>
  );
};

export default Login;
