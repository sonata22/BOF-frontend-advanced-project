import { Search } from "@mui/icons-material";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Cart from "./pages/Cart";
import Featured from "./pages/Featured";
import Home from "./pages/Home";
import ProductsList from "./components/ProductsList";
import SingleProductPage from "./pages/SingleProductPage";
import Users from "./components/UsersList";
import { store } from "./redux/store";
import Products from "./pages/Products";
import NavBar from "./components/NavBar";
import SingleUserPage from "./pages/SingleUserPage";
import Login from "./pages/Login";
import { useAppDispatch } from "./redux/hooks";
import { useEffect } from "react";
import { authenticate } from "./redux/reducers/users";

function App() {
  return (
    <div className="App">
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
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/featured" element={<Featured />}></Route>
            <Route path="/search" element={<Search />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
