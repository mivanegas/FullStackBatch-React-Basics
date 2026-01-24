import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComponent from "./components/Navbar";
import NewsCarousel from "./components/index";
import SecondaryNavbar from "./components/SecondaryNavbar";
import NewsCards from "./components/NewsCards";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkmode") === "active";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkmode");
      localStorage.setItem("darkmode", "active");
    } else {
      document.body.classList.remove("darkmode");
      localStorage.removeItem("darkmode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavbarComponent toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={<Navigate to="/categories/general" replace />}
          />

          <Route
            path="/categories/:category"
            element={
              <>
                <NewsCarousel />
                <SecondaryNavbar />
                <NewsCards />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
