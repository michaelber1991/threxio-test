import "./App.css";
import { NavBar } from "./components";
import { Home } from "./pages";
import { LayoutContainer } from "./layouts";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </Provider>
  );
}

export default App;
