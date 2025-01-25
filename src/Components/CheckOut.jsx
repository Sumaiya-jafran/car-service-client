import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const CheckOut = () => {
    const purchased= useLoaderData();
    const {user} = useContext(AuthContext);

    const {title,price}=purchased;

    const handleBuy=(e)=>{
        e.preventDefault();
        const formData = e.target;
        const name = formData.name.value;
        const email = user?.email;
        const price = formData.price.value;
        const date = formData.date.value;
        const order={
            name,email,price,date
        }
        console.log(order);
    }
    return (
        <div>
            <h2 className='text-3xl text-center mb-5 font-bold'>Ordered Items:{title}</h2>
             <form onSubmit={handleBuy} className="card-body">
           <div className='grid grid-cols-2 gap-5 w-3/5 m-auto'>
             <div className="form-control">
            
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name='name'
                defaultValue={user?.name}
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name='price'
               defaultValue={price}
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
                defaultValue={user?.email}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name='date'
                
                className="input input-bordered"
                required
              />
           
            </div>
           </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
    );
};

export default CheckOut;