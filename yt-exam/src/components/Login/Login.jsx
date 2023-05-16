import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import firebase from "../../firebase.js";

import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("!Please enter all information");
      return;
    }

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("!User does not exist");
      } else if (error.code === "auth/wrong-password") {
        setError("!There is an error in the password");
      } else {
        setError(error.message);
      }
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login">
      <h2 className="login__title mb-6 text-6xl text-start">Login pls</h2>
      <form
        onSubmit={handleLogin}
        className="login__form flex flex-col items-center gap-4"
      >
        <label className="login__label-email w-1/3 flex flex-col items-start">
          Email:
          <input
            className="login__email w-full border-2 border-black px-3 py-2 rounded-xl border-teal-900 outline-0"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="login__label-password w-1/3 flex flex-col items-start">
          Passwsord:
          <div className="w-full text-start flex">
            <input
              className="login__password w-11/12 border-2 border-black px-3 py-2 rounded-s-xl border-r-0 border-teal-900 outline-0"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="login__password-btn text-center pr-4 border-2 border-teal-900 border-l-0 rounded-e-xl"
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
          </div>
        </label>

        <button
          type="submit"
          className="block mt-4 border-2 border-teal-900 rounded-xl px-5 py-2"
        >
          Log in
        </button>
      </form>
      <div className="login__box-one mt-6">
        <p className="text-center">
          If you are not registered, go to{" "}
          <Link to={"/register"} className="text-teal-900">
            Register
          </Link>
        </p>
      </div>
      <div className="mt-6">
        <h2 className="text-red-700 text-5xl">{error}</h2>
      </div>
    </div>
  );
};

export default Login;
