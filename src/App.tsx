import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Cart from "./pages/Cart";
import Featured from "./pages/Featured";
import Home from "./pages/Home";
import SingleProductPage from "./pages/SingleProductPage";
import Users from "./components/lists/UsersList";
import { store } from "./redux/store";
import Products from "./pages/Products";
import NavBar from "./components/NavBar";
import SingleUserPage from "./pages/SingleUserPage";
import Login from "./pages/Login";
import CategoriesList from "./components/lists/CategoriesList";
import SingleCategoryPage from "./pages/SingleCategoryPage";
import Search from "./pages/Search";
import { Box, createTheme, IconButton, ThemeProvider, useTheme } from "@mui/material"; //IMPORTANT
import { blue, green, purple } from "@mui/material/colors";
import { useState } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function App() {
const [mode, setMode] = useState<"light" | "dark">("light");

const theme = createTheme({
  palette: {
    mode: mode,
    ...(mode === "light"
      ? {
          primary: {
            main: blue[500],
          },
          secondary: {
            main: blue[500],
          },
        }
      : {
          primary: {
            main: "#E3E7E9",
          },
          secondary: {
            main: "#E3E7E9",
          },
          typography: {
            body1: {
              color: "red",
            },
            h2: {
              color: "white",
            },
          },
        }),
  },
});

  return (
    <ThemeProvider theme={theme}>
      <Box className="App" sx={{ bgcolor: "background.default" }}>
          <IconButton
            sx={{ ml: 1, position: "fixed", zIndex: 10   }}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            color="primary"
          >
            {theme.palette.mode === "light" ? (
              <Brightness4Icon />
            ) : (
              <Brightness7Icon />
            )}
          </IconButton>
        <Provider store={store}>
          {/** Routes */}
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/products">
                <Route path="" element={<Products />} />
                <Route path=":productId" element={<SingleProductPage />} />
              </Route>
              <Route path="/users">
                <Route path="" element={<Users />} />
                <Route path=":userId" element={<SingleUserPage />} />
              </Route>
              <Route path="/categories">
                <Route path="" element={<CategoriesList />} />
                <Route path=":categoryId" element={<SingleCategoryPage />} />
              </Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/featured" element={<Featured />}></Route>
              <Route path="/search" element={<Search />}></Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </Box>
    </ThemeProvider>
  );
}

export default App;
