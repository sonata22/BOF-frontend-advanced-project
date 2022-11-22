import { useEffect } from "react";
import { Provider } from "react-redux";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

import { store } from "../redux/store";
import ProgressLog from "../components/ProgressLog";
import SignUpForm from "../components/forms/SignUpForm";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import CategoriesList from "../components/lists/CategoriesList";
import { authenticate } from "../redux/reducers/users";

const Home = () => {
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
              {/**<NavBar /> */}
            </Grid>
            <Grid item xs={7.5}>
              <CategoriesList />
            </Grid>
            <Grid item xs={2.5}>
              {!user && <SignUpForm />}
              <ProgressLog />
              <h1>Random Product</h1>
            </Grid>
          </Grid>
        </Box>
      </Provider>
    </div>
  );
};

export default Home;
