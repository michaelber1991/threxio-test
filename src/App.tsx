import "./App.css";
import { NavBar } from "./components";
import { Home } from "./pages";
import { LayoutContainer } from "./layouts";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Routes, Route } from "react-router-dom";
import { Products } from "./pages/Products";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <LayoutContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </LayoutContainer>
    </Provider>
  );
}

export default App;
