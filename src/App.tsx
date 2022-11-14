import { Provider } from "react-redux";

import "./App.css";
import Products from "./pages/Products";
import { store } from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Products />
      </Provider>
    </div>
  );
}

export default App;
