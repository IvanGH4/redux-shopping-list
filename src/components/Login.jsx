import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  async function getToken() {
    const response = await axios.post("https://ha-auth-react.now.sh/auth", {
      username: "hack",
      password: "academy",
    });
    dispatch(addUser({ token: response.data.token, username }));
    history.push("/categories");
  }

  function handleSubmit(e) {
    e.preventDefault();
    getToken();
    setUsername("");
    setPassword("");
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-success">
              Log in
            </button>
            <Link
              to="/categories"
              className="text-decoration-none text-light ms-4"
            >
              I do not want to login, I just want to shop!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
