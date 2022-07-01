import { Facebook, Google } from "@mui/icons-material";
import React from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { FormHelperText } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [authLogin, setAuthLogin] = React.useState({
    email: "123@gmail.com",
    password: "123456",
  });
  const [login, setLogin] = React.useState({
    email: "",
    password: "",
  });
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      login.email === authLogin.email &&
      login.password === authLogin.password
    ) {
      history.push("/dashboard");
    } else {
      toast.error(" Crediential failed!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      <form className="loginform" onSubmit={(e) => handleSubmit(e)}>
        <h3>Login Here</h3>

        <label className="loginlabel" for="username">
          Username
        </label>
        <input
          className="logininput"
          type="text"
          placeholder="Email or Phone"
          id="username"
          value={login.email}
          onChange={(e) => {
            setLogin({ ...login, email: e.target.value });
          }}
        />

        <label className="loginlabel" for="password">
          Password
        </label>
        <input
          className="logininput"
          type="password"
          placeholder="Password"
          id="password"
          value={login.password}
          onChange={(e) => {
            setLogin({ ...login, password: e.target.value });
          }}
        />

        <button className="loginbutton" type="submit">
          Log In
        </button>

        <div className="social">
          <div className="go">
            <Google /> Google
          </div>
          <div className="fb">
            <Facebook /> Facebook
          </div>
        </div>
      </form>
    </div>
  );
}
