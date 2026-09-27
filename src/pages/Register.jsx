import React from 'react';
import { NavLink } from "react-router";
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
  const  { createUser , setUser }  = useContext(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
       console.log(e.target);
       const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
         console.log({name, photoUrl, email, password}); 

         
         createUser(email, password)
          .then(result => {
             const user = result.user;
             setUser(user);
              // console.log(user);
          })
          .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            console.log(errorMessage);
          })
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
          <input name="name" type="text" className="input" placeholder="Name" required />
          {/* Photo url */}
          <label className="label">Photo URL</label>
          <input name="photoUrl" type="text" className="input" placeholder="Photo URL" required />
          
         {/* Gmail */}
          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" required />
            {/* Password */}
          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" required />
        
          
          <button type="submit" className="btn btn-neutral mt-4">Register</button>
          <p className="font-semibold text-center pt-4">
                      Already have an account? 
                      <NavLink className="text-secondary link link-hover" to="/auth/login">
  <span className="decoration-underline">Login</span>
</NavLink>
                    </p>
          
        </fieldset>
      </form>
    </div>
    </div>
    );
}

export default Register;