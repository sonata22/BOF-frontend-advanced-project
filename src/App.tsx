import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProductPage from "./pages/SingleProductPage";
import Users from "./pages/Users";
import { store } from "./redux/store";

function App() {
  return (
    <div className="App">
      {/** Routes */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products/:id" element={<SingleProductPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
