import React, { useContext } from 'react';
import signupImg from '../assets/images/login/login.svg'
import { AuthContext } from '../Providers/AuthProvider';
import { Link } from 'react-router-dom';
const Signup = () => {

  const {createAccount} = useContext(AuthContext)
  const handleSignUp = e =>{
    e.preventDefault();
    const formField = e.target;
    const name = formField.name.value;
    const email = formField.email.value;
    const password = formField.password.value;
    const user = {name,email,password};
    console.log(user);

    createAccount(email,password)
    .then((result)=>{
      const user = result.user;
      console.log(user);
    })
    .catch(e=>console.log(e.message))
  }

    return (
        <div className="hero bg-base-200 min-h-screen">
              <div className="hero-content flex-col lg:flex-row gap-12">
                <div className="text-center lg:text-left">
                    <img src={signupImg} alt=""/>
                  
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                  <form onSubmit={handleSignUp} className="card-body">
                  <h1 className="text-3xl text-center mb-5 font-bold">Sign Up now!</h1>
                    <div className="form-control">
                   
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        name='name'
                        placeholder="Your Name"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                    
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
                      <button className="btn btn-primary">Sign Up</button>
                    </div>
                  </form>
                  <p className='text-center mb-10'>Already have an account? <Link className='text-pink-600' to='/signin'>Sign In</Link></p>
                </div>
              </div>
            </div>
    );
};

export default Signup;