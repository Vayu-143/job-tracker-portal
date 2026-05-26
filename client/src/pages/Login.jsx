import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post(
        "/auth/login",
        form
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data)
      );

      navigate("/dashboard");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>

      <form onSubmit={loginHandler}>
        <input
          className="form-control mb-2"
          placeholder="Email"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />

        <button className="btn btn-primary">
          Login
        </button>
      </form>

      <p className="mt-3">
        New User?{" "}
        <Link to="/register">
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;