import React, { useContext } from "react";
// import loginImg from '../assets/images/login/login.svg'
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
const SignIn = () => {

  const {signInWithEmail} = useContext(AuthContext);
  const handleSignIn = e =>{
    e.preventDefault();
    const formField = e.target;
  
    const email = formField.email.value;
    const password = formField.password.value;
    const user = {email,password};
    console.log(user);

    signInWithEmail(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user);
    })
    .catch(e=>console.log(e.message))
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-12">
        <div className="text-center lg:text-left">
            {/* <img src={loginImg} alt=""/> */}
          
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
            <h1 className="text-3xl text-center mb-5 font-bold">Login now!</h1>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center mb-10">New Here? <Link className="text-pink-600 " to='/signup'>Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
