import { Provider } from "react-redux";

import "./App.css";
import Products from "./pages/Products";
import Users from "./pages/Users";
import { store } from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Users/>
        <Products />
      </Provider>
    </div>
  );
}

export default App;
