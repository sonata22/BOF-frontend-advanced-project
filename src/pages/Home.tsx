import { Provider } from "react-redux";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

import { store } from "../redux/store";
import ProgressLog from "../components/ProgressLog";
import SignUpForm from "../components/forms/SignUpForm";
import { useAppSelector } from "../redux/hooks";

const Home = () => {
  const user = useAppSelector((state) => state.userReducer.currentUser); //read userReducer state value

  return (
    <div>
      <Provider store={store}>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              {/**<NavBar /> */}
            </Grid>
            <Grid item xs={7}>
              <h1>Main content</h1>
              {!user && <SignUpForm />}
            </Grid>
            <Grid item xs={3}>
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
