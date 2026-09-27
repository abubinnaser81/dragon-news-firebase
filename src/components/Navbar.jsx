
import userIcon from "../assets/user.png"
import { NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { use } from "react";
const Navbar = () => {
  const { user } = use (AuthContext)
  return (
    <div className="flex justify-between items-center">
      <div className=""> {user && user.email} </div>

      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>

      <div className="login-btn flex gap-5 items-center">
        <img src={userIcon} alt="User" />
        <NavLink to="/auth/login" className="btn btn-primary px-10">
          Login
        </NavLink>
        <NavLink to="/auth/register" className="btn btn-secondary px-10">
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;