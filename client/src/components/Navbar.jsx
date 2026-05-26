import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

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