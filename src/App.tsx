import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import MainPage from "./pages/dashboard";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
