import {
  useState,
  useEffect,
} from "react";

import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [darkMode, setDarkMode] =
    useState(false);

  useEffect(() => {
    document.body.classList.toggle(
      "dark",
      darkMode
    );
  }, [darkMode]);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand">
        Job Tracker Portal
      </span>

      <div>
        <span className="text-light me-3">
          Welcome, {user?.name}
        </span>

        <button
          className="btn btn-secondary me-2"
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >
          {darkMode
            ? "Light"
            : "Dark"}
        </button>

        <button
          className="btn btn-danger"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;