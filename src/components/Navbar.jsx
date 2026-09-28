
import userIcon from "../assets/user.png"
import { NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { use } from "react";
const Navbar = () => {
  const { user, logOut } = use (AuthContext)
  const HandleLogout = ()=> {
    console.log("user trying to Logout")
    logOut().then(() => {
      alert("Your Logged out successfully");
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  console.log(error);
});

  };
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
        {
          user ? (
            <button onClick={HandleLogout} className="btn btn-primary px-10"> Logout</button>
          ) : <NavLink to="/auth/login" className="btn btn-primary px-10">
          Login
        </NavLink>
        }
        
        <NavLink to="/auth/register" className="btn btn-secondary px-10">
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;