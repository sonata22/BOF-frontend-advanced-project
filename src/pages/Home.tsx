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
              {/**<NavBar /> */}
            </Grid>
            <Grid item xs={10.5}>
              <CategoriesList />
            </Grid>
          </Grid>
        </Box>
      </Provider>
    </div>
  );
};;

export default Home;
