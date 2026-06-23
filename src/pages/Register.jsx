import React from 'react';
import { NavLink } from "react-router";
const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
       console.log(e.target);
       const form = e.target;
        const name = form.name.value;
         console.log(name); 
    }
    return (
        <div  className="flex justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className= "font-bold text-2xl text-center ">
            Register Your Account
          </h2>
      <form onSubmit = {handleRegister} className="card-body">
        <fieldset className="fieldset">
            {/* Name */}
          <label className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Name" />
          {/* Photo url */}
          <label className="label">Photo URL</label>
          <input name="photoUrl" type="text" className="input" placeholder="Photo URL" />
          
         {/* Gmail */}
          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />
            {/* Password */}
          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />
        
          
          <button type="submit" className="btn btn-neutral mt-4">Register</button>
          <p className="font-semibold text-center pt-4">
                      Already have an account? <NavLink className="text-secondary" to="/auth/login" className="link link-hover">
                        <span className=" text-secondary decoration-underline">Login</span>
                      </NavLink>
                    </p>
          
        </fieldset>
      </form>
    </div>
    </div>
    );
}

export default Register;