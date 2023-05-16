import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

import firebase from "../../firebase.js";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError("!Please enter all information");
      return;
    }

    if (password.length < 6) {
      setError("!Password must be at least 6 characters long");
    }

    if (password !== confirmPassword) {
      setError("!Password not verified");
      return;
    }

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="register mt-10">
      <h2 className="register__title text-6xl">Register</h2>
      <form
        onSubmit={handleSubmit}
        className="register__form w-full mt-7 flex flex-col items-center gap-3"
      >
        <label
          id="email"
          className="register__label-email w-1/3 flex flex-col items-start"
        >
          Email:
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="register__email w-full border-2 border-black py-3 px-4 rounded-xl border-teal-900 outline-0"
          />
        </label>

        <label
          id="password"
          className="register__label-password w-1/3 flex flex-col items-start"
        >
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            className="register__password w-full border-2 border-black py-3 px-4 rounded-xl border-teal-900 outline-0"
          />
        </label>

        <label
          id="confirmPassword"
          className="register__label-cpassword w-1/3 flex flex-col items-start"
        >
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            id="confirmPassword"
            name="confirmPassword"
            className="register__cpassword w-full ml-a mr-a border-2 border-black py-3 px-4 rounded-xl border-teal-900 outline-0"
          />
        </label>
        <button
          type="submit"
          className="register__btn mt-5 border-2 border-teal-900 py-3 px-6"
        >
          Sign up
        </button>
      </form>
      <div className="register__box-one mt-6">
        <p>
          <Link to={"/login"} className="text-teal-500">
            Log in
          </Link>{" "}
          if you are registered
        </p>
      </div>
      <div className="register__box-tow w-full mt-6 text-center">
        <h2 className="redister__error text-5xl text-red-700">{error}</h2>
      </div>
    </div>
  );
};

export default Register;
