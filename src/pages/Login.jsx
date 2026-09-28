import React from "react";
import { NavLink } from "react-router";
import {use} from "react";
import { AuthContext } from "../provider/AuthProvider";
const Login = () => {
  const {signIn} = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    signIn(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user)
    }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode, errorMessage);
    // ..
  });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-bold text-2xl text-center">
          Login Your Account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" required />
            {/* Password */}
            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" required />
            <div><a className="link link-hover">Forgot password?</a></div>

            <button type="submit" className="btn btn-neutral mt-4">Login</button>
            <p className="font-semibold text-center pt-4">
              Don't have an account?{" "}
              <NavLink className="link link-hover" to="/auth/register">
                <span className="text-secondary">Register</span>
              </NavLink>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;