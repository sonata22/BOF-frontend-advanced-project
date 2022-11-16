import { Search } from "@mui/icons-material";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Cart from "./pages/Cart";
import Featured from "./pages/Featured";
import Home from "./pages/Home";
import ProductsList from "./components/ProductsList";
import SingleProductPage from "./pages/SingleProductPage";
import Users from "./pages/Users";
import { store } from "./redux/store";
import Products from "./pages/Products";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/** Routes */}
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/products/:id" element={<SingleProductPage />}></Route>
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
